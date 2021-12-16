import React, { useState } from "react";
import "./Contador.css";
import { FiRefreshCw,FiChevronsUp,FiChevronsDown,FiX } from "react-icons/fi";

const Contador = (props) => {
  const [contador, setContador] = useState(props.data.valorInicial);

  //const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);
  const sumar = () => setContador(contador + 1);
  const recargar = () => setContador(props.data.valorInicial);
  const eliminar = () => props.eliminar(props.data.Id);

  return (
    <div className="contenedorContador">
      <h1 className="tituloContador">{props.data.nombre}</h1>
      <p className="numeroContador">{contador}</p>
      <div className="botones">
        <button className="resta" onClick={restar}>
          <FiChevronsDown />
        </button>
        <button className="suma" onClick={sumar}>
          <FiChevronsUp />
        </button>
        <button className="borrar" onClick={eliminar}>
          <FiX />
        </button>
        <button className="recargar" onClick={recargar} >< FiRefreshCw />
        
        </button>
      </div>
    </div>
  );
};

export default Contador;
