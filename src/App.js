import React, { useState } from "react";

import GridOverlay from "components/GridOverlay";
import Card from "components/Card";
import Toggle from "components/Toggle";

function App() {
  const [showOverlay, setOverlay] = useState(true);

  return (
    <>
      <GridOverlay show={showOverlay} />
      <header className="l-container">
        <div className="menu">
          <div className="menu-item">
            <span>Mostrar colunas:</span>
            <Toggle
              initialState={showOverlay}
              onToggle={toggleStatus => setOverlay(toggleStatus)}
            />
          </div>
        </div>
      </header>
      <main>
        <Card />
      </main>
    </>
  );
}

export default App;
