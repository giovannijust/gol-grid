import React from "react";

import Toggle from "components/Toggle";

function Menu({ label, initialState, onToggle }) {
  return (
    <div className="menu-item">
      <span>{label}</span>
      <Toggle initialState={initialState} onToggle={onToggle} />
    </div>
  );
}

export default Menu;
