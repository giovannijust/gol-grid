import React from "react";

function App() {
  return (
    <>
      <header>
        <div className="onoffswitch">
          <input
            type="checkbox"
            name="onoffswitch"
            className="onoffswitch-checkbox"
            id="myonoffswitch"
            checked
          />
          <label className="onoffswitch-label" for="myonoffswitch">
            <span className="onoffswitch-inner"></span>
            <span className="onoffswitch-switch"></span>
          </label>
        </div>
      </header>
      <main className="u-relative">
        <div className="grid-overlay">
          <div className="u-relative" style={{ left: "-50%" }}>
            <div className="grid-overlay-column"></div>
            <div className="grid-overlay-column"></div>
            <div className="grid-overlay-column u-hide-sm"></div>
            <div className="grid-overlay-column u-hide-sm"></div>
            <div className="grid-overlay-column u-hide-sm"></div>
            <div className="grid-overlay-column u-hide-sm"></div>
            <div className="grid-overlay-column u-hide-sm"></div>
            <div className="grid-overlay-column u-hide-sm"></div>
            <div className="grid-overlay-column u-hide-sm"></div>
            <div className="grid-overlay-column u-hide-sm"></div>
            <div className="grid-overlay-column u-hide-sm"></div>
            <div className="grid-overlay-column u-hide-sm"></div>
          </div>
        </div>
        <div className="l-container">
          <div className="card">
            <div className="card-image"></div>
            <div className="card-text">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
