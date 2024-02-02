export default Features;

function Features({ imagen, titulo, descripcion, link }) {
  return (
    <a href={link} className="text-decoration-none">
      <div className="col ">
        <div className="m-2 card hovcard">
          <img src={imagen} className="card-img-top " alt="..." />
          <div className="card-body bg-dark ">
            <h5 className="text-white card-title">{titulo}</h5>
            <p className="card-text text-secondary cartas">{descripcion}</p>
            <span href={link} className="btn btn-outline-info">
              Acceder
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}