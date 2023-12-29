export default Features;

function Features({ imagen, titulo, descripcion, link }) {
  return (
    <a href={link} class="text-decoration-none">
      <div class="col ">
        <div class="card m-2 hovcard">
          <img src={imagen} class="card-img-top " alt="..." />
          <div class="card-body bg-dark ">
            <h5 class="card-title text-white">{titulo}</h5>
            <p class="card-text text-secondary cartas">{descripcion}</p>
            <span href={link} class="btn btn-outline-info">
              Acceder
            </span>
          </div>
        </div>{" "}
      </div>
    </a>
  );
}
