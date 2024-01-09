export default Navbar;

import logo from "../img/logo.png";
import ChatComponent from "./ChatComponent";
function Navbar({ linkHome }) {
  return (
    <nav
      className="bg-black navbar navbar-expand-lg fixed-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="principal">
          <img
            src={logo}
            alt="Logo"
            width="30"
            height="30"
            className="align-text-top d-inline-block"
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
          <ul className="mb-2 navbar-nav me-auto mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href={linkHome}
              >
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
                  <a className="dropdown-item" href="rutina">
                    Lunes
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tienda">
                Tienda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="perfil">
                Perfil
              </a>
            </li>
          </ul>

          {/*svg carrito*/}

          <div className="tw-relative tw-bottom-1">
            <div className="tw-absolute tw-left-3 tw-top-0">
              <p className="tw-flex tw-h-2 tw-w-2 tw-items-center tw-justify-center tw-rounded-full tw-bg-red-500 tw-p-3 tw-text-xs tw-text-white ">
                3
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="flipaa tw-me-5 tw-mt-4 tw-h-6 tw-w-6 tw-cursor-pointer tw-text-white hover:tw-fill-current hover:tw-text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>

          <div className="me-2 ">
            <ChatComponent />
          </div>
        </div>
      </div>
    </nav>
  );
}
