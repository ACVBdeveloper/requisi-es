import React, { useEffect, useState } from "react";
import './style.css';

function App() {

  const [nutri, setNutri] = useState([]);

  useEffect(() => {

    function loadApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          console.log(json);
          setNutri(json);
        })
    }
    loadApi();
  }, []);
  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item) => {

        return (
          <article key={item.id} className="post">
            <strong className="titulo">
              {item.titulo}
              <img src={item.capa} alt={item.titulo} />
              <p>{item.subtitulo}</p>
              <h1>Categoria:{item.categoria}</h1>
              <a className="botao">Acessar</a>
            </strong>
          </article>
        )
      })}
    </div>
  );
}

export default App;
