export default Navbar;

import logo from "../img/logo.png";
function Navbar({linkHome}) {
    
  return (
    <nav
      class="container-fluid navbar bg-dark   navbar-expand-lg position-fixed z-3" style={{ '--bs-bg-opacity': '.9' }}
      data-bs-theme="dark">
      <div class="container-fluid ">
        <a class="navbar-brand" href="principal">
          <img
            src= {logo}
            alt="Logo"
            width="30"
            height="30"
            class="d-inline-block align-text-top"
          />
          ControlZ
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href= {linkHome}>
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#ejercicios">
                Ejercicios
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Rutina
              </a>

              <ul class="dropdown-menu">
                <li>
                  <a
                    class="dropdown-item"
                    onclick="rutinadias(this)"
                    href="rutina"
                  >
                    Lunes
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="perfil">
                Perfil
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-info" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
