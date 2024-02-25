export default CartasFeatures;

function CartasFeatures({ imagen, titulo, descripcion, link }) {
  return (
    <a href={link} className="text-decoration-none ">
      <div className=" tw-w-full">
        <div className="m-2 card hovcard ">
          <img src={imagen} className="card-img-top " alt="..." />
          <div className="card-body bg-dark ">
            <h5 className="text-white card-title">{titulo}</h5>
            <p className="card-text text-secondary cartas tw-text-pretty">{descripcion}</p>
            <span href={link} className="btn btn-outline-info">
              Acceder
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
