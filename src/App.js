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
                setTimeout(() => {
                  window.dispatchEvent(new Event("resize"));
                }, 250);
              }}
            />
          </div>
          <div className="menu-column-statics">
            <Statistics show={showOverlay} />
          </div>
        </div>
      </header>
      <main className="main">
        <section className="introduction">
          <h1 style={{ textAlign: "center" }}>Teste de grid</h1>
          <div className="introduction-container">
            <p>
              Esse site é uma demonstração dos grids propostas pela TV1. Por
              padrão, é aplicado o layout proposto de colunas e tamanhos fixos.
              Esse padrão consiste em 3 breakpoints, incluindo o "Grid Light".
            </p>
            <ul>
              Breakpoints:
              <li>367px</li>
              <li>988px</li>
              <li>1140</li>
            </ul>
          </div>
          <div className="introduction-container">
            <p>
              Ao pressionar o botão "Responsivo", outra configuração de layout
              aplicado. Ele consiste em colunas fluidas mas ainda baseada no
              conceito proposto acima. Portanto em mobile há 2 colunas e tambem
              manatemos o breakpoint do "Grid Layout" apenas para referencia. A
              partir deste breakpoint, a layout trabalha com 12 colunas se
              extendo até o limite máximo de largura da tela de 1140px. Essa
              largura máxima pode ser ampliada se necessário. Por enquanto
              estamos baseando no comportamento do layout proposto pela TV1.
            </p>
            <ul>
              Breakpoints:
              <li>367px</li>
              <li>988px</li>
              <li>1140</li>
            </ul>
          </div>
        </section>
        <Card />
      </main>
    </>
  );
}

export default App;
