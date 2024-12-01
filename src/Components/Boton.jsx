import { useState } from "react";

function Boton() {
  //useState es un hook que permite añadir estado a los componentes funcionales y le indica a react que el componente necesita ser renderizado nuevamente
  //un hook proporcionan un estado y un ciclo de vida a los componentes funcionales
  //const [variable, funcion] = useState(valorInicial);
  const [num, setNum] = useState(0);

  //Arrow function
  const sumar = () => {
    setNum(num + 1);
  };

  //IIFE (Immediately Invoked Function Expression)
  (() => {
    console.log("Hola Mundo");
  })();

  return (
    <>
      <button
        onClick={sumar}
        className="border-2 bg-purple-700 rounded-lg p-2 m-2 text-white"
      >
        Clicks: {num}
      </button>
    </>
  );
}

export default Boton;
