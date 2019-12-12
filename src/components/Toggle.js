import React, { useState } from "react";

function Toggle({ onToggle, initialState }) {
  const [toggleStatus, setToggle] = useState(initialState);

  return (
    <div className="onoffswitch">
      <input
        type="checkbox"
        name="onoffswitch"
        className="onoffswitch-checkbox"
        id="myonoffswitch"
        checked={toggleStatus}
        value={toggleStatus}
        onChange={event => {
          let newToogleStatus = !toggleStatus;
          setToggle(newToogleStatus);
          onToggle(newToogleStatus, event);
        }}
      />
      <label className="onoffswitch-label" htmlFor="myonoffswitch">
        <span className="onoffswitch-inner"></span>
        <span className="onoffswitch-switch"></span>
      </label>
    </div>
  );
}

export default Toggle;
