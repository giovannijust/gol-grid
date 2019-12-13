import React, { useState } from "react";

function Radio({ name, onChange = () => null }) {
  const [status, setStatus] = useState("OFF");

  return (
    <div className="control-group" style={{ display: "flex" }}>
      <label className="control control-radio">
        On
        <input
          type="radio"
          name={name}
          value="ON"
          checked={status === "ON"}
          onChange={event => {
            onChange(true);
            setStatus("ON");
          }}
        />
        <div
          className="control_indicator"
          onClick={event => {
            onChange(true);
            setStatus("ON");
          }}
        ></div>
      </label>
      <label className="u-inline-block control control-radio">
        Off
        <input
          type="radio"
          name={name}
          value="OFF"
          checked={status === "OFF"}
          onChange={event => {
            onChange(false);
            setStatus("OFF");
          }}
        />
        <div
          className="control_indicator"
          onClick={event => {
            onChange(true);
            setStatus("ON");
          }}
        ></div>
      </label>
    </div>
  );
}

export default Radio;
