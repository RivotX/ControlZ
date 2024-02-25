import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TablaRutina from "../components/Rutina/TablaRutina";
import "../styles/rutina.css"



function Rutina() {
  return (
    <>
      <div className="tw-min-h-screen tw-bg-[#0d0d0d]">
        <Navbar linkHome="/" />

        <div className=" tw-py-[4.87rem]  tw-min-h-full ">

          <TablaRutina />

        </div>

      </div>

      <Footer />

    </>
  );
}

export default Rutina;
