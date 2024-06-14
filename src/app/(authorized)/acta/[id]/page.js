const actas = [
  { id: 1, name: "Acta Circunstanciada", description: "Descripción del acta 1", fecha: "2024" },
  { id: 2, name: "Acta de Constatación", description: "Descripción del acta 2", fecha: "2024" },
  { id: 3, name: "Acta de Intimación (Disposición)", description: "Descripción del acta 3", fecha: "2024" },
  { id: 4, name: "Acta de Intimación (Genérica)", description: "Descripción del acta 4", fecha: "2024" },
  { id: 5, name: "Acta de Intimación (Separación)", description: "Descripción del acta 5", fecha: "2024" },
  { id: 6, name: "Acta Secuestro", description: "Descripción del acta 6", fecha: "2024" },
];

export default async function PaginaActa({ params }) {
  const id = params.id;
  const acta = actas.find((a) => a.id == id);

  return (
    <div>
      <h1>{acta?.name}</h1>
      <h2 className="acta-description">{acta?.description}</h2>
      <div className="info-acta">
        <p className="p-acta">Código: {id}</p>
        <p className="p-acta">Ultima actualización: {acta?.fecha}</p>
      </div>
      <div className="div-button_acta">
        <button className="button-acta">
          <a className="a-button" href="">Ingresar a Acta</a>
        </button>
      </div>
    </div>
  );
}
