
import { useState } from "react";
import './index.css';


function Contador() {
  const [valorPantalla, setValorPantalla] = useState("0");
  const [operador, setOperador] = useState();
  const [memoria, setMemoria] = useState();
  const manejarClick = valor => {
    // guarda los numeros y operadores
    if ("0123456789".includes(valor)) setValorPantalla(valorPantalla === "0" ? valor : valorPantalla + valor);
    if (["+", "-", "*", "/"].includes(valor)) { setOperador(valor); setMemoria(Number(valorPantalla)); setValorPantalla("0"); }
    if (valor === "=") {
      if (!operador) return;
      const primerNumero = memoria, segundoNumero = Number(valorPantalla);
      let resultado = 0;
      if (operador === "+") resultado = primerNumero + segundoNumero;
      if (operador === "-") resultado = primerNumero - segundoNumero;
      if (operador === "*") resultado = primerNumero * segundoNumero;
      if (operador === "/") resultado = segundoNumero === 0 ? "Error" : primerNumero / segundoNumero;
      setValorPantalla(String(resultado)); setOperador(); setMemoria();
    }
    // eliminar con c
    if (valor === "C") { setValorPantalla("0"); setOperador(); setMemoria(); }
  };
  // botones de la calculadora los cuales muestra
  const botones = [7,8,9,"/",4,5,6,"*",1,2,3,"-",".",0,"=","+","C"];
  return (
    <div className="contador">
      <label className="pantalla">{valorPantalla}</label>
      <div className="teclado">
        {botones.map((boton, i) => (
          // muesta  boton de c
          <button 
          key={i} className={boton === "C" ? "btn-reset" : ""} 
          onClick={() => manejarClick(String(boton))}
          >{boton}</button>
        ))}
      </div>
    </div>
  );
}

export default Contador;
