var gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
var postcss = require("gulp-postcss");
var rename = require("gulp-rename");
var browsersync = require("browser-sync").create();

const plugins = [
  require("@csstools/postcss-sass"),
  require("lost"),
  require("postcss-custom-properties"),
  require("autoprefixer")({ browsers: ["> 1%", "last 2 versions"] })
];

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./dist"
    }
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function css() {
  return gulp
    .src(["./src/styles/index.scss"])
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins, { syntax: require("postcss-scss") }))
    .pipe(rename("index.css"))
    .pipe(gulp.dest("./src/styles/build/"))
    .pipe(browsersync.stream());
}

function cssResponsive() {
  return gulp
    .src(["./src/styles/index-responsive.scss"])
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins, { syntax: require("postcss-scss") }))
    .pipe(rename("index-responsive.css"))
    .pipe(gulp.dest("./src/styles/build/"))
    .pipe(browsersync.stream());
}

function cssFixed() {
  return gulp
    .src(["./src/styles/index-fixed.scss"])
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins, { syntax: require("postcss-scss") }))
    .pipe(rename("index-fixed.css"))
    .pipe(gulp.dest("./src/styles/build/"))
    .pipe(browsersync.stream());
}

function watchFiles() {
  gulp.watch("src/styls/*.scss", gulp.series(css, browserSyncReload));
  gulp.watch("dist/*.html", gulp.series(browserSyncReload));
}

function watchSass() {
  gulp.watch(
    "src/styles/**/*.scss",
    gulp.parallel([css, cssResponsive, cssFixed])
  );
}

exports.serve = gulp.parallel(watchFiles, browserSync);
exports.watchSass = gulp.parallel(watchSass);
