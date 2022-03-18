import React from "react";
import "../../App.css";
import "./Nosotros.css";

function Nosotros() {
  return (
    <>
      <h1 className="Nosotros">Erick Oliva</h1>
      <div className="acercaDeMi">
        <h3>Como funciona este proyecto?</h3>
        <p>
          Este sitio web es una demostracion de mis habilidades utilizando
          ReactJS. Se implementa el hook{" "}
          <span className="subrayado">useState</span> para el control del
          renderizado mientras se obtiene las noticia, tambien se usa el hook
          <span className="subrayado">useEffect</span> para realizar un fetch
          controlado y enviar el scroll hasta el inicio cada vez que se navega
          por las rutas.
        </p>
        <p>
          Se consume la <span className="subrayado">API</span> de Prensa Libre
          que proporciona un <span className="subrayado">JSON</span> con las
          ultimas 10 noticias. En realidad esto sucede porque prensa libre usa
          WordPress y esta plataforma provee una
          <span className="subrayado"> API</span> si se agrega el texto
          <code> /wp-json/wp/v2/posts </code> al final de la URL.
        </p>
        <p>
          Las noticias es un componente reutilizado, esto se logra con la funcion <span className="subrayado"> Map</span> de Javascript para que este "escriba" un numero N de veces el componente, segun la cantidad que el objeto contenga.
        </p>
      </div>
    </>
  );
}

export default Nosotros;
