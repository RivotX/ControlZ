export default Tienda;

function Tienda() {
  if (window.location.pathname === '/tienda') {
    // Agrega los estilos de Tailwind solo si la URL coincide con /tienda
    const head = document.head;
    const link = document.createElement('link');
  
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = '/src/styles/TiendaTailwind.css'; // Ruta a tu archivo CSS de Tailwind
  
    head.appendChild(link);
  }
    return(
        <div>
            <p className='bg-red-600 mx-80'> sdsdsdsds </p>
        </div>
    )
}
