export default Rutina;
import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";

function Rutina() {
  return (
    <div className="container-fluid bg-black min-vh-100 ">
      <Navbar linkHome={"gym"} />

      <div className="container-fluid containercompelto">
        <h1 className="text-center text-white"> $Variable dia</h1>
      </div>
    
      <Footer />
    </div>
  );
}
