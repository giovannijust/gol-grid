import React from "react";

import Radio from "components/Radio";

function Menu({ label, initialState, onChange }) {
  return (
    <div className="menu-item">
      <span>{label}</span>
      <Radio onChange={onChange} />
    </div>
  );
}

export default Menu;
