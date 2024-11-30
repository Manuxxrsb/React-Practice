import { useState } from "react";

function FormularioControlado() {
  const [valorInput, setValorInput] = useState("");
  const [valorExtra, setExtra] = useState("");

  const Cambio = (evento) => {
    const entrada = evento.target.value;
    setValorInput(entrada);
  };
  //Este tipo de form solo captura el cambio de un evento onchange del input
  //si quisiera poner mas de un input deberia crear una funcion para cada uno
  //Ocasionalmente util || hay mejores!
  return (
    <>
      <div className="border-2 rounded-md border-blue-400">
        <label htmlFor="Text">Primera entrada de Texto </label>
        <input
          id="Text"
          className="border-4 rounded-md border-black m-4"
          onChange={Cambio}
        />
        {valorInput}
      </div>
    </>
  );
}

export default FormularioControlado;
