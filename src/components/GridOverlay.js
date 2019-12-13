import React from "react";

function GridOverlay({ show }) {
  return (
    <div className="grid-overlay" style={{ opacity: show ? 0.2 : 0 }}>
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
  );
}

export default GridOverlay;
