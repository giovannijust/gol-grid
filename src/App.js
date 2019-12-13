import React, { useState } from "react";

import GridOverlay from "components/GridOverlay";
import Statistics from "components/Statistics";
import Card from "components/Card";
import MenuItem from "components/MenuItem";
import CustomCSS from "components/CustomCSS";

function App() {
  const [showOverlay, setOverlay] = useState(false);
  const [isResponsive, setResponsive] = useState(false);
  return (
    <>
      <GridOverlay show={showOverlay} />
      <CustomCSS
        href={isResponsive ? "index-responsive.css " : "index-fixed.css"}
      />
      <header>
        <div className="menu">
          <div className="menu-column-button">
            <MenuItem
              label="Colunas:"
              initialState={showOverlay}
              onChange={toggleStatus => setOverlay(toggleStatus)}
            />
            <MenuItem
              label="Responsivo:"
              name="responsive"
              initialState={isResponsive}
              onChange={toggleStatus => {
                setResponsive(toggleStatus);
                setTimeout(()=> {window.dispatchEvent(new Event('resize'))}, 250)
              }}
            />
          </div>
          <div className="menu-column-statics">
            <Statistics show={showOverlay} />
          </div>
        </div>
      </header>
      <main className="main">
        <Card />
      </main>
    </>
  );
}

export default App;
