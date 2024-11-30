const Nombre = "Manuel";
const apellidos = ["Solis", "Gonzalez"];
const parrafo = <p>Este es un parrafo de ejemplo que pasaa</p>;

function Saludo() {
  return (
    <>
      <h1 className="text-4xl"> {Nombre} dice : Hola Mundo </h1>
      <h2 className="text-3xl"> Sus Apellidos son: {apellidos}</h2>
      {parrafo}
      {2 * 5}
      {"Manu" + "el"}
    </>
  );
}

export default Saludo;
