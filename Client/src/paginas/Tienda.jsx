export default Tienda;
import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";
import Producto from "../componentes/Producto";

function Tienda() {
  //funcion para usar tailwind solo aqui y que de problemas en los otros sitios con bootstrap 
  const existingLink = document.querySelector('link[href="/src/styles/TiendaTailwind.css"]');
  if (window.location.pathname === '/tienda') {
    if (!existingLink) {

      const head = document.head;
      const link = document.createElement('link');

      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = '/src/styles/TiendaTailwind.css'; // Ruta a tu archivo CSS de Tailwind

      head.appendChild(link);
    }
  }

  return (
    <>
      <div className="tw-min-h-screen tw-bg-gray-800">
        <Navbar linkHome={"gym"} />

        <div className="tw-flex tw-justify-center ">
          <h1 className="tw-font-bold tw-text-white tw-mt-16 tw-text-7xl">Tienda</h1>
        </div>
        <div className="tw-flex tw-justify-center ">

          <Producto img={"https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
            nombre={"PutisimasZapatillas"} descripcion={"estas zapas estan para flipar"} precio={"20"} precioScam={"25"} descuento={"20%"}
          /><Producto img={"https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
            nombre={"PutisimasZapatillas"} descripcion={"estas zapas estan para flipar"} precio={"20"} precioScam={"25"} descuento={"20%"}
          /><Producto img={"https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
            nombre={"PutisimasZapatillas"} descripcion={"estas zapas estan para flipar"} precio={"20"} precioScam={"25"} descuento={"20%"}
          />

        </div>

        <Footer />
      </div>
    </>
  )
}
