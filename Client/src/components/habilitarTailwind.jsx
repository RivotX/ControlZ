const habilitarTailwind = () => {
  const existingLink = document.querySelector('link[href="/src/styles/TiendaTailwind.css"]');
  if (!existingLink) {
    const head = document.head;
    const link = document.createElement('link');

    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = '/src/styles/TiendaTailwind.css'; // Ruta a tu archivo CSS de Tailwind

    head.appendChild(link);
  }

};

export default habilitarTailwind;
