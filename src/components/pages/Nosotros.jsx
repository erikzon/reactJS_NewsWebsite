import React from "react";
import "../../App.css";
import "./Nosotros.css"

function Nosotros() {
  return (
    <>
      <h1 className="Nosotros"> Erick Oliva </h1>
      <div className="acercaDeMi">
        <p>
          Este sitio web es una demostracion de mis habilidades utilizando
          ReactJS. Se implementa el hook useState para el control del
          renderizado mientras se obtiene las noticia. tambien el hook useEffect para realizar un fetch controlado.
        </p>
        <p>
          Se consume la API de Prensa Libre que proporciona un JSON con las
          ultimas 10 noticias. En realidad esto sucede porque prensa libre usa
          WordPress y esta plataforma provee una API si se agrega el texto{" "}
          <code>/wp-json/wp/v2/posts</code> al final de la URL.
        </p>
        <p>
          El JSON incluye las imagenes y textos, incluso hay datos como videos, tweets pero estos se obvian por razones de simplificacion del proyecto.
        </p>
      </div>
    </>
  );
}

export default Nosotros;
