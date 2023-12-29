export default Navbar;

import logo from "../img/logo.png";
import ChatComponent from "./ChatComponent";
function Navbar({ linkHome }) {
  return (
    <nav
      className=" navbar bg-black navbar-expand-lg fixed-top "
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="principal">
          <img
            src={logo}
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
          ControlZ
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href={linkHome}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ejercicios">
                Ejercicios
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Rutina
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    
                    href="rutina"
                  >
                    Lunes
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="perfil">
                Perfil
              </a>
            </li>
          </ul>
          <div className="me-2 ">
            <ChatComponent />
          </div>
        </div>
      </div>
    </nav>
  );
}
