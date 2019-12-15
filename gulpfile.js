var gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
var postcss = require("gulp-postcss");
var rename = require("gulp-rename");
var browsersync = require("browser-sync").create();

const plugins = [
  require("@csstools/postcss-sass"),
  require("lost"),
  require("postcss-custom-properties"),
  require("postcss-font-magician"),
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

function cssLostResponsive() {
  return gulp
    .src(["./src/styles/lost-responsive.scss"])
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins, { syntax: require("postcss-scss") }))
    .pipe(rename("lost-responsive.css"))
    .pipe(gulp.dest("./src/styles/build/"))
    .pipe(gulp.dest("./public"))
    .pipe(browsersync.stream());
}

function cssLostFixed() {
  return gulp
    .src(["./src/styles/lost-fixed.scss"])
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins, { syntax: require("postcss-scss") }))
    .pipe(rename("lost-fixed.css"))
    .pipe(gulp.dest("./src/styles/build/"))
    .pipe(gulp.dest("./public"))
    .pipe(browsersync.stream());
}

function watchFiles() {
  gulp.watch("src/styles/*.scss", gulp.series(css, browserSyncReload));
  gulp.watch("dist/*.html", gulp.series(browserSyncReload));
}

function watchSass() {
  gulp.watch(
    "src/styles/**/*.scss",
    gulp.parallel([cssLostFixed, cssLostResponsive])
  );
}

exports.serve = gulp.parallel(watchFiles, browserSync);
exports.watchSass = gulp.parallel(watchSass);
