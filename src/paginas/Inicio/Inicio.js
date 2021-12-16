import "./Inicio.css";
import React, { useState } from "react";
import Contador from "../../componentes/Contador/Contador";
import Formulario from "../../componentes/Formulario/Formulario";

function Inicio() {
  const [contadores, setContadores] = useState([]);

  const eliminarContador = (Id) => {
    setContadores(contadores.filter((contador) => contador.Id !== Id));
  };

  return (
    <>
      <h2 className="titulo">
        Count<spam className="spam">erity</spam>
      </h2>
      <div className="contenedor">
        <Formulario modificador={setContadores} />

        <div className="contadoresContainer">
          {contadores.map((contador, index) => (
            <Contador key={index} data={contador} eliminar={eliminarContador} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Inicio;
