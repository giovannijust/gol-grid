import React from "react";

function GridOverlay({ show }) {
  return (
    show && (
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
    )
  );
}

export default GridOverlay;
