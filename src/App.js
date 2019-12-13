import React, { useState } from "react";

import GridOverlay from "components/GridOverlay";
import Statistics from "components/Statistics";
import Card from "components/Card";
import MenuItem from "components/MenuItem";
import CustomCSS from "components/CustomCSS";

function App() {
  const [showOverlay, setOverlay] = useState(true);
  const [isResponsive, setResponsive] = useState(false);

  return (
    <>
      <GridOverlay show={showOverlay} />
      <CustomCSS
        href={isResponsive ? "index-responsive.css " : "index-fixed.css"}
      />
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
            }}
          />
          <Statistics show={showOverlay} />
        </div>
      </header>
      <main>
        <Card />
      </main>
    </>
  );
}

export default App;
