export default Rutina;
import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";

function Rutina() {
  return (
    <div class="container-fluid bg-black min-vh-100 ">
      <Navbar linkHome={"gym"} />

      <div class="container-fluid containercompelto">
        <h1 class="text-center text-white"> $Variable dia</h1>
      </div>
    
      <Footer />
    </div>
  );
}
