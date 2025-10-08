
import { useState } from "react";
import './index.css';


function Contador() {
  const [pantalla, setPantalla] = useState("0");
  const [op, setOp] = useState();
  const [mem, setMem] = useState();
  const click = v => {
    if ("0123456789".includes(v)) setPantalla(pantalla === "0" ? v : pantalla + v);
    if (v === "." && !pantalla.includes(".")) setPantalla(pantalla + ".");
    if (["+", "-", "*", "/"].includes(v)) { setOp(v); setMem(Number(pantalla)); setPantalla("0"); }
    if (v === "=") {
      if (!op) return;
      const a = mem, b = Number(pantalla);
      let r = 0;
      if (op === "+") r = a + b;
      if (op === "-") r = a - b;
      if (op === "*") r = a * b;
      if (op === "/") r = b === 0 ? "Error" : a / b;
      setPantalla(String(r)); setOp(); setMem();
    }
    if (v === "C") { setPantalla("0"); setOp(); setMem(); }
  };
  const btns = [7,8,9,"/",4,5,6,"*",1,2,3,"-",".",0,"=","+","C"];
  return (
    <div className="calculadora">
      <label className="pantalla">{pantalla}</label>
      <div className="teclado">
        {btns.map((b, i) => (
          <button key={i} className={b === "C" ? "btn-reset" : ""} onClick={() => click(String(b))}>{b}</button>
        ))}
      </div>
    </div>
  );
}

export default Contador;
