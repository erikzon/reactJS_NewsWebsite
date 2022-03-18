import React from "react";
import "./Paginador.css";

function Paginador({ setPagina, Pagina }) {
  const anterior = () => {
    setPagina(Pagina - 1);
  };

  const siguiente = () => {
    setPagina(Pagina + 1);
  };

  return (
    <div className="Paginador">
      <button onClick={anterior} className={Pagina == 1 ? 'btn-deshabilitado' : 'btn-paginador'} disabled={Pagina == 1}>
        ANTERIOR
      </button>
      <h3>{Pagina}</h3>
      <button onClick={siguiente} className="btn-paginador">
        SIGUIENTE
      </button>
    </div>
  );
}

export default Paginador;
