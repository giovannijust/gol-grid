import React, { useState } from "react";

import GridOverlay from "components/GridOverlay";
import Card from "components/Card";
import MenuItem from "components/MenuItem";

function App() {
  const [showOverlay, setOverlay] = useState(true);
  const [isResponsive, setResponsive] = useState(false);

  return (
    <>
      <GridOverlay show={showOverlay} />
      <header className="l-container">
        <div className="menu">
          {/* <MenuItem
            label="Colunas:"
            initialState={showOverlay}
            onToggle={toggleStatus => setOverlay(toggleStatus)}
          /> */}
          <MenuItem
            label="Responsivo:"
            initialState={isResponsive}
            onToggle={toggleStatus => {
              setResponsive(toggleStatus);
              toggleStatus
                ? import("styles/build/index-responsive.css")
                : import("styles/build/index-fixed.css");
            }}
          />
        </div>
      </header>
      <main>
        <Card />
      </main>
    </>
  );
}

export default App;
