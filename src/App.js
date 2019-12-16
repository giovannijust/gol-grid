import React, { useState } from "react";

import GridOverlay from "components/GridOverlay";
import Statistics from "components/Statistics";
import Card from "components/Card";
import MenuItem from "components/MenuItem";
import CustomCSS from "components/CustomCSS";
import Gallery from "components/Gallery";

function App() {
  const [showOverlay, setOverlay] = useState(false);
  const [isResponsive, setResponsive] = useState(false);

  return (
    <>
      <GridOverlay show={showOverlay} />
      <CustomCSS
        href={isResponsive ? "lost-responsive.css " : "lost-fixed.css"}
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
      <main>
        <section className="introduction">
          <div className="introduction-content">
            <h1 style={{ textAlign: "center" }}>Teste de grid</h1>
            <h3>Introdução</h3>
            <p>
              Site com teste de grid para validar layout e breakpoints. Há dois
              arquivos de estilos csonfigurados: Um "responsivo" e outro "fixo"
              a qual é possível mudar pressionando os botões do menu acima. O
              grid é uma solução customizada usando Sass + Postcss gerando
              colunas usando a técnica mais tradicional com "floats" e
              "margins". Dependendo de qual browser e versões o publico da GOL
              usa, podemos adotar técnicas mais modernas e simples para
              desenvolvimento de Grid. Por enquanto estamos usando um método
              mais tradicional pensando no pior cenário e priorizando
              compatibilidade.
            </p>
          </div>
          <div className="introduction-content">
            <h3>Layout Fixo</h3>
            <p>
              Grids configurado conforme especificação da TV1. Ao pressionar o
              botão "Responsivo", outra configuração de layout aplicado. Ele
              consiste em colunas fluidas mas ainda baseada no conceito proposto
              acima. Portanto em mobile há 2 colunas e tambem manatemos o
              breakpoint do "Grid Layout" apenas para referencia. A partir deste
              breakpoint, a layout trabalha com 12 colunas se extendo até o
              limite máximo de largura da tela de 1140px. Essa largura máxima
              pode ser ampliada se necessário. Por enquanto estamos baseando no
              comportamento do layout proposto pela TV1.
            </p>
            <ul>
              Breakpoints:
              <li>367px</li>
              <li>988px (desktop light)</li>
              <li>1140</li>
            </ul>
          </div>
          <div className="introduction-content">
            <h3>Layout Responsivo</h3>
            <p>
              O layout responsivo ele deixa as colunas fluidas enquanto ocupa
              toda a largura da tela. Esse grid precisa de validação e pode-se
              definir algumas coisas como por exemplo a largura total por
              breakpoint. Mantivemos o breakpoint "desktop light" para
              comparação.
            </p>
            <ul>
              Breakpoints:
              <li>367px</li>
              <li>988px (desktop light)</li>
              <li>1140</li>
            </ul>
          </div>
        </section>
        <section className="showcase">
          <div className="showcase-introduction">
            <h2 style={{ textAlign: "center" }}>Showcase</h2>
            <p>
              Componentes criados para demonstração. Somente para testar o uso
              de colunas e como se adaptam em resoluções diferentes. Não
              refletem o produto final.
            </p>
          </div>
          <div className="showcase-demonstration">
            <h3 style={{ textAlign: "center" }}>Card com imagem + texto</h3>
            <Card />
            <h3 style={{ textAlign: "center" }}>Galeria de imagens</h3>
            <Gallery />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
