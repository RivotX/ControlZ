export default Gym;
import Navbar from "../componentes/navbar";
import Footer from "../componentes/Footer";
import Features from "../componentes/Features";
import fotorutinaserv from "../img/fotorutinaserv.jpg";
import fotoejerciciosexpli from "../img/fotoejerciciosexpli.jpg";
import fototiendaserv from "../img/fototiendaserv.jpg";
import fotodietaserv from "../img/fotodietaserv.jpg";
import fotogym from "../img/gym.jpg";
function Gym() {
  return (
    <div class="container-fluid bg-black min-vh-100 bodygym">

      <Navbar linkHome={"#"} />

      <div class="container-fluid">
        <div class="container text-center">
          <div class="mb-3">
            <div class=" text-center mb-2 mt-2 mx-auto d-flex align-items-center justify-content-center">
              <h1 class=" container titulobienvenidagym">Servicios</h1>
            </div>
          </div>
          <div class="container mx-auto d-flex align-items-center justify-content-center ">
            <div class="card-group">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4  ">
                <Features imagen={fotorutinaserv} titulo={"Rutina"} descripcion={"Some quick example text to build on the card title and make up the bulk of the card's content"
                }
                  link={"rutina"}
                />
                <Features
                  imagen={fotoejerciciosexpli}
                  titulo={"Guia ejercicios"}
                  descripcion={
                    "Some content"
                  }
                  link={"#"}
                />
                <Features
                  imagen={fotodietaserv}
                  titulo={"Dieta"}
                  descripcion={
                    "Some quick example text to build on the card title and make up the bulk of the card's content"
                  }
                  link={"dieta"}
                />{" "}
                <Features
                  imagen={fototiendaserv}
                  titulo={"Tienda"}
                  descripcion={
                    "Some quick example text to build on the card title and make up the bulk of the card's content"
                  }
                  link={"#"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="flecha"
        class="mt-5 container-fluid bg-dark bg-gradient bg-opacity-10  contenidoGym"
      >
        <div class="mt-3 mb-4 container contenedortitulogym ">
          <div class="mb-3">
            <div class=" text-center mb-2 mt-4 mx-auto d-flex align-items-center justify-content-center">
              <h1 class=" container mt-4 titulobienvenidagym">
                Comienza el cambio (usuario)
              </h1>
            </div>
          </div>

          <div class=" mt-4 descgym text-secondary mx-auto d-flex align-items-center justify-content-center">
            <p class="mb-4">
              Aquí, no solo te ayudaremos a fortalecer tu cuerpo, sino que
              también fomentaremos la construcción de una mentalidad fuerte y
              resiliente. Creemos que el camino hacia la salud y la forma física
              es único para cada persona, y estamos comprometidos a ofrecerte un
              apoyo personalizado para que logres tus objetivos de la manera que
              mejor se adapte a ti. En nuestro gimnasio, no solo encontrarás una
              variedad de clases y programas de entrenamiento, sino también un
              ambiente inclusivo y amigable. La diversidad de nuestras
              instalaciones y la comunidad que las llena hacen que este sea un
              lugar especial donde todos son bienvenidos, sin importar su nivel
              de condición física o experiencia previa. ¡Bienvenido a nuestro
              gimnasio, donde el cambio positivo comienza hoy!
            </p>
          </div>
        </div>
      </div>

      <div class="container mb-5 mt-5 mx-auto d-flex align-items-center justify-content-center">
        <div class="mt-5 contenedorgym text-center ">
          <h1 class="textgym">
            CONSTRUYE<span id="wanana">TU LEGADO</span>
          </h1>
          <h1 class="textgym">
            CREA<span id="wanana">TU FUTURO</span>
          </h1>
          <h1 class="textgym mb-5">
            DISFRUTA<span id="wanana">EL CAMINO</span>
          </h1>
        </div>
      </div>

      <div class="  container-fluid bg-dark bg-gradient bg-opacity-10">
        <div class="container mt-5 mb-5">
          <div class="row mt-5">
            <div class="col-6 mt-3">
              <img
                src={fotogym}
                class="img-fluid rounded-start-pill"
                alt="..."
              />
            </div>
            <div class="col-6 mt-3 mx-auto d-flex align-items-center justify-content-center">
              <div class="card border-info bg-dark text-secondary mb-3">
                <div class="card-header">Header</div>
                <div class="card-body ">
                  <h5 class="card-title">Info card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
