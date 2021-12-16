import React, { useState } from "react";
import "./Formulario.css";

const Formulario = (props) => {
  const [state, setState] = useState({
    Ncontador: "",
    Vcontador: "",
  });

  const { Ncontador, Vcontador } = state;

  const crearContador = (e) => {
    e.preventDefault();

    props.modificador((estado) => {
      return [
        ...estado,
        {
          nombre: state.Ncontador,
          valorInicial: Number(state.Vcontador),
          Id: Math.floor(Math.random() * 9999),
        },
      ];
    });
  };

  return (
    <div className="contenedorFormulario">
      <h2 className="tituloFormulario">
        <span>Create</span> <span className="spamFormulario">Counter</span>
      </h2>
      <form className="formulario">
        <div className="formularioGrupo">
          <label>Counter name</label>
          <input
            value={Ncontador}
            type="text"
            onChange={(e) => setState({ ...state, Ncontador: e.target.value })}
          ></input>
        </div>
        <div className="formularioGrupo">
          <label>Intial value</label>
          <input
            value={Vcontador}
            type="number"
            onChange={(e) => setState({ ...state, Vcontador: e.target.value })}
          ></input>
        </div>

        <button onClick={crearContador} className="boton" type="submit">
          Create counter
        </button>
      </form>
    </div>
  );
};

export default Formulario;
