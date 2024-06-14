export default function Acta() {
    return (
      <section>
        <h1>Listado de Actas</h1>
        <div className="div-listado_actas">
            <article className="article-actas">
                <a className="a-actas" href="./acta/1">
                    <h3>Acta Circunstanciada</h3>
                    <p>Descripción de acta</p>
                </a>
            </article>
            <article className="article-actas">
                <a className="a-actas" href="./acta/2">
                    <h3>Acta de Constatación</h3>
                    <p>Descripción de acta</p>
                </a>
            </article>
            <article className="article-actas">
                <a className="a-actas" href="./acta/3">
                    <h3>Acta de Intimación (Disposición)</h3>
                    <p>Descripción de acta</p>
                </a>
            </article>
        </div>
      </section>
    );
  }