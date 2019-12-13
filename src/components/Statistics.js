import React, { useState, useEffect } from "react";

function Statistics({ show }) {

  const [countColumns, setCountColumns] = useState(0);
  const [widthColumns, setWidthColumns] = useState(0);

  const [countGutters, setCountGutters] = useState(0);
  const [widthGutters, setWidthGutters] = useState(0);

  const [space, setSpace] = useState(0)

  document.getElementsByTagName("body")[0].onresize = function() {
    show && updateColumnsAndGutter()
  };

  useEffect(() => {
    show && updateColumnsAndGutter()
  })

  const updateColumnsAndGutter = () => {
    let visibleColumns = 0    
    let auxCountGutters = 0

    const allColumns = document.querySelectorAll(".grid-overlay-column")

    allColumns.forEach(el => {

      if(getComputedStyle(el, null).display != "none") {
        visibleColumns += 1;

        if(Number.parseInt(getComputedStyle(el, null).marginLeft) > 0) auxCountGutters += 1;

      }

    })

    setCountColumns(visibleColumns)
    setWidthColumns(allColumns[0].clientWidth)

    setCountGutters(auxCountGutters)
    setWidthGutters(getComputedStyle(allColumns[1], null).marginLeft)

    const utilArea = Number.parseInt(getComputedStyle(document.querySelector(".u-relative"), null).width)
    const totalArea = Number.parseInt(getComputedStyle(document.querySelector("#root"), null).width)
    setSpace(totalArea - utilArea)
  }

  return (
    show && (
      <div className="statistics-container">
        <div>São <b>{countColumns}</b> colunas com <b>{widthColumns}px</b> cada</div>
        <div>São <b>{countGutters}</b> gutters com <b>{widthGutters}</b> cada</div>
        <div>O espaço que está sobrando é de <b>{space}px</b> no total</div>
      </div>
    )
  );
}

export default Statistics;
