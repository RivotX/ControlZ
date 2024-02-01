export default Index;
import { useState, useEffect } from "react";
import axios from "axios";
import amorr from "../img/amorr.png";

function Index() {
  const [values, setValues] = useState({
    usuario: "",
    password: "",
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    // sexo: "",
    password2: "",
  });

  // Función para vaciar todos los campos
  const vaciarCampos = () => {
    setValues({
      usuario: "",
      password: "",
      nombre: "",
      email: "",
      telefono: "",
      direccion: "",
      // sexo: "",
      password2: "",
    });
  };

  //js estética
  const [VisibleWelcome, setVisibleWelcome] = useState(true);
  const [VisibleRegistro, setVisibleRegistro] = useState(false);
  const [VisibleRegistro2, setVisibleRegistro2] = useState(false);
  const [VisibleIniciarSesion, setVisibleIniciarSesion] = useState(false);

  const [showMensaje1, setShowMensaje1] = useState(false);
  const [showMensaje2, setShowMensaje2] = useState(false);
  const [showMensajeEmail, setShowMensajeEmail] = useState(false);
  const [showMensajeCompletar, setShowMensajeCompletar] = useState(false);
  const [showErrorRegistro, setshowErrorRegistro] = useState(false);
  const [showMensajeInicio, setshowMensajeInicio] = useState(false);
  const [showMensajeNoExiste, setshowMensajeNoExiste] = useState(false);

  const btnComenzar = () => {
    vaciarCampos();
    setVisibleWelcome(false);
    setVisibleRegistro(false);
    setVisibleRegistro2(false);
    setVisibleIniciarSesion(true);
  };

  const cambiarDisplayRegistro = () => {
    vaciarCampos();
    setShowMensaje1(false);
    setShowMensaje2(false);
    setShowMensajeEmail(false);
    setshowErrorRegistro(false);
    setShowMensajeCompletar(false);
    setVisibleIniciarSesion(false);
    setVisibleRegistro(true);
    setVisibleRegistro2(false);
  };

  useEffect(() => {
    if (values.password && values.password2) {
      if (values.password.length < 8) {
        setShowMensaje1(false);
        setShowMensajeCompletar(false);
        setShowMensajeEmail(false);
        setshowErrorRegistro(false);
        setShowMensaje2(true);
      } else if (values.password !== values.password2) {
        setShowMensajeCompletar(false);
        setShowMensajeEmail(false);
        setShowMensaje2(false);
        setshowErrorRegistro(false);
        setShowMensaje1(true);
      } else {
        setShowMensaje1(false);
        setShowMensaje2(false);
      }
    }
  }, [values.password, values.password2]);

  const validarEmail = (email) => {
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(String(email).toLowerCase());
  };

  useEffect(() => {
    if (values.email) {
      if (!validarEmail(values.email)) {
        setShowMensajeCompletar(false);
        setShowMensaje1(false);
        setShowMensaje2(false);
        setshowErrorRegistro(false);
        setShowMensajeEmail(true);
      } else {
        setShowMensajeEmail(false);
      }
    }
  }, [values.email]);

  const cambiarDisplayRegistro2 = (e) => {
    if (values.usuario && values.email && values.password && values.password2) {
    }

    if (
      values.usuario.trim() === "" ||
      values.email.trim() === "" ||
      values.password.trim() === "" ||
      values.password2.trim() === ""
    ) {
      return;
    }
    //check que las contraseñas coincidan
    else if (values.password !== values.password2) {
      return;
    }
    //check que la contraseña tenga mas de 8 caracteres
    else if (values.password.length < 8) {
      return;
    }
    //check del email valido
    else if (!validarEmail(values.email)) {
      return;
    }
    setVisibleRegistro(false);
    setVisibleRegistro2(true);
  };


  const IrInicioSesion = () => {
    setVisibleRegistro(false);
    setVisibleRegistro2(false);
    setVisibleIniciarSesion(true);
  };


  //servidor

  const SumbitRegistro = (event) => {
    event.preventDefault();
    IrInicioSesion();

    axios
      .post("http://localhost:8081/registro", values) //envia values a "servidor/registro"
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  const ComprobarReg = (event) => {
    console.log("loqesea");
    event.preventDefault();

    axios
      .post("http://localhost:8081/existeregistro", values) //envia values a "servidor/registro"
      .then((ccc) => {
        console.log(ccc);

        console.log(ccc.status);

        if (ccc.status == 200) {
          cambiarDisplayRegistro2();
          console.log("entro al 200");
        } else {
          console.log("entro al 201");

          setshowErrorRegistro(true);
          setShowMensaje1(false);
          setShowMensajeCompletar(false);
          setShowMensajeEmail(false);
          setShowMensaje2(false);
        }
      })
      .catch((err) => console.error(err));
  };

  //mandamos a servidor/login los datos para trabajar con ellos
  const SumbitLogin = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:8081/login",
        { usuario: values.usuario, password: values.password },
        { withCredentials: true },
      )
      .then((res) => {
        axios
          .get("http://localhost:8081/getSession", { withCredentials: true }) //envia values a "servidor/registro"
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.error(err));

        console.log(res);
        if (res.data.redirectTo != undefined) {
          window.location.href = res.data.redirectTo;
        } else if (
          res.request.response == '{"Error":"Contraseña incorrecta"}'
        ) {
          setshowMensajeNoExiste(false);
          setshowMensajeInicio(true);
        } else {
          console.log("entro al 201");
          setshowMensajeInicio(false);
          setshowMensajeNoExiste(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="fondoindex min-vh-100">
      <div id="containerPagEntera" className="container-fluid">
        {/* Navbar  */}
        <div className=" Nav">
          <nav className="navbar">
            <a className="navbar-brand col-md-6 col-sm-6" href="" />
            <a
              className="text-left navbar-brand col-md-6 col-sm-6 pasta"
              href="#"
            >
              <img
                src="../src/img/logo.png"
                alt="Logo"
                width="50"
                height="50"
                className="d-inline-block"
              />
              <span className="logoindex" style={{ marginLeft: "5px" }}>
                ControlZ
              </span>
            </a>
            <div className="row superflipadoelmigue d-flex align-items-center justify-content-center">
              <div className="col-4">
                <a
                  className="mb-2 text-white btn w-100"
                  style={{ backgroundColor: "#ffe60000" }}
                  href="https://www.whatsapp.com"
                  role="button"
                >
                  <svg
                    className="whatsapp bi bi-whatsapp"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="mb-2 text-white btn w-100"
                  style={{ backgroundColor: "#ffe60000" }}
                  href="https://www.facebook.com"
                  role="button"
                >
                  <svg
                    className="facebookbi bi-facebook "
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="mb-2 text-white btn w-100"
                  style={{ backgroundColor: "#ffe60000" }}
                  href="https://statics.memondo.com/p/s1/ccs/2022/10/CC_2795378_7e45a8644f28403f99ef1c5df2008edf_meme_otros_este_es_mierdon.jpg?cb=7121585"
                  role="button"
                >
                  <svg
                    className="instagram bi bi-instagram"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
              </div>
            </div>
          </nav>
        </div>

        {/* Pantalla inicial */}
        <div
          className="container completo"
          style={{ display: VisibleWelcome ? "block" : "none" }}
        >
          <div className="container titulocontenedor">
            <p>
              Nosotros te ayudamos a
              <br />
              <span className="construir">construir</span> tu legado.
            </p>
          </div>
          <br />
          <div className="fixed descripcionindex">
            <p id="frasesuelta">
              No esperes más para comenzar tu viaje hacia una mejor versión de
              ti mismo. En el gimnasio, no solo transformamos cuerpos;
              transformamos vidas. Únete a nosotros para descubrir el placer del
              ejercicio, la emoción del logro y el apoyo inquebrantable de una
              comunidad dedicada. Estamos aquí para ayudarte a alcanzar tus
              metas y superar tus límites.
            </p>
            <br />
            <p id="frasesuelta">
              ¡Únete a nuestra familia de fitness hoy y empieza a escribir tu
              historia de éxito!
            </p>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <button className="iniciar" type="button" onClick={btnComenzar}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              COMENZAR
            </button>
          </div>
        </div>

        {/* Inicio de sesion */}
        <div className="inicio d-flex justify-content-center align-items-center">
          <div
            className="login-box "
            id="logearse"
            style={{
              display: VisibleIniciarSesion ? "block" : "none",
              opacity: 1,
            }}
          >
            <h2>Iniciar Sesion</h2>
            <form onSubmit={SumbitLogin} method="post">
              <div className="mb-2 text-center">
                <p className="text-white">Sign in with:</p>
                <button
                  type="button"
                  className="mx-1 btn btn-secondary btn-floating"
                >
                  <i className="fab fa-facebook-f">
                    <svg
                      id="svg1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </i>
                </button>

                <button
                  type="button"
                  className="mx-1 btn btn-secondary btn-floating"
                >
                  <i className="fab fa-google">
                    <svg
                      id="svg1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-google"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                  </i>
                </button>
              </div>

              <div className="user-box">
                <input
                  type="text"
                  name="usuarioInicio"
                  required
                  value={values.usuario}
                  onChange={(e) =>
                    setValues({ ...values, usuario: e.target.value })
                  }
                />
                <label>Usuario</label>
              </div>
              <div className="user-box">
                <input
                  type="password"
                  name="claveInicio"
                  required
                  value={values.password}
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                />
                <label>Contraseña</label>
              </div>

              <p
                id="mensajeConstraseñaincorrectaInicio"
                className="text-danger position-absolute"
                style={{
                  display: showMensajeInicio ? "block" : "none",
                  height: "10px",
                }}
              >
                Constraseña Incorrecta
              </p>

              <p
                id="mensajeConstraseñaincorrectaInicio"
                className="text-danger position-absolute"
                style={{
                  display: showMensajeNoExiste ? "block" : "none",
                  height: "10px",
                }}
              >
                No existe El usuario
              </p>

              <div className="">
                <u
                  href=""
                  className=" registro float-end"
                  onClick={cambiarDisplayRegistro}
                >
                  No tengo cuenta
                </u>
              </div>
              <div className="mt-5 mb-5 container-fluid ">
                <div className="text-center row rounded-2">
                  <input
                    type="submit"
                    className=" botonsiguiente"
                    value="Siguiente"
                    name="submit"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Registro 1 */}
        <div className=" d-flex justify-content-center align-items-center">
          <div
            className="loginRegistro login-box reg "
            id="registrar"
            style={{
              display: VisibleRegistro ? "block" : "none",
              opacity: "100%",
            }}
          >
            <h2>Crea tu Perfil</h2>

            <form id="enviarphp2" onSubmit={ComprobarReg}>
              <div className="mb-3 text-center">
                <p className="text-white">Sign up with:</p>
                <button
                  type="button"
                  className="mx-1 btn btn-secondary btn-floating"
                >
                  <i className="fab fa-facebook-f">
                    <svg
                      id="svg1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </i>
                </button>

                <button
                  type="button"
                  className="mx-1 btn btn-secondary btn-floating"
                >
                  <i className="fab fa-google">
                    <svg
                      id="svg1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-google"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                  </i>
                </button>
              </div>

              <div className="user-box regNormal">
                <input
                  type="text"
                  name="usuario"
                  id="usuario"
                  value={values.usuario}
                  onChange={(e) =>
                    setValues({ ...values, usuario: e.target.value })
                  }
                  required
                />
                <label>Usuario</label>
              </div>

              <div className="user-box regNormal">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                  required
                />
                <label>Email</label>
              </div>
              <div className="user-box regNormal">
                <input
                  type="password"
                  name="clave1"
                  id="clave1"
                  value={values.password}
                  required
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                />
                <label>Contraseña</label>
              </div>

              <div className="user-box regNormal">
                <input
                  type="password"
                  name="clave2"
                  id="clave2"
                  value={values.password2}
                  onChange={(e) =>
                    setValues({ ...values, password2: e.target.value })
                  }
                  required
                />
                <label>Repetir contraseña</label>
              </div>
              <p
                id="mensajeRegError"
                className="text-danger position-absolute"
                style={{
                  display: showErrorRegistro ? "block" : "none",
                  height: "10px",
                }}
              >
                El usuario o el Email ya existen
              </p>
              <p
                id="mensaje1"
                className="text-danger position-absolute"
                style={{
                  display: showMensaje1 ? "block" : "none",
                  height: "10px",
                }}
              >
                Las contraseñas no coinciden
              </p>
              <p
                id="mensaje2"
                className="text-danger position-absolute"
                style={{
                  display: showMensaje2 ? "block" : "none",
                  height: "10px",
                }}
              >
                La contraseña es demasiado corta
              </p>
              <p
                id="mensajeEmail"
                className="text-danger position-absolute"
                style={{
                  display: showMensajeEmail ? "block" : "none",
                  height: "10px",
                }}
              >
                Direccion de Email inválida
              </p>
              <p
                id="mensajeCompletar"
                className="text-danger position-absolute"
                style={{
                  display: showMensajeCompletar ? "block" : "none",
                  height: "10px",
                }}
              >
                Debes escribir en todos los campos
              </p>
              <div className="">
                <u
                  href=""
                  className=" registro float-end"
                  onClick={btnComenzar}
                >
                  Ya tienes cuenta
                </u>
              </div>
              <div className="mt-5 mb-5 container-fluid">
                <div className="text-center row">
                  <input
                    // onClick={cambiarDisplayRegistro2}
                    type="submit"
                    className=" botonsiguiente"
                    value="Siguiente"
                    name="submit"
                    id="sumbit"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Registro 2 */}
        <div className=" d-flex justify-content-center align-items-center">
          <div
            className="loginRegistro login-box reg "
            id="reg"
            style={{ display: VisibleRegistro2 ? "block" : "none", opacity: 1 }}
          >
            <h2>Crea tu Perfil</h2>

            <form id="enviarphp" onSubmit={SumbitRegistro}>
              <div className="user-box regPlus">
                <input
                  type="text"
                  name="nombre"
                  value={values.nombre}
                  onChange={(e) =>
                    setValues({ ...values, nombre: e.target.value })
                  }
                  required
                />
                <label>Nombre completo</label>
              </div>

              <div className="user-box regPlus">
                <input
                  type="text"
                  name="telefono"
                  value={values.telefono}
                  onChange={(e) =>
                    setValues({ ...values, telefono: e.target.value })
                  }
                  required
                />
                <label>Telefono</label>
              </div>

              <div className="user-box regPlus">
                <input
                  type="text"
                  name="direccion"
                  value={values.direccion}
                  onChange={(e) =>
                    setValues({ ...values, direccion: e.target.value })
                  }
                  required
                />
                <label>Direccion</label>
              </div>

              <div style={{ color: "white" }}>
                <h3>Sexo</h3>
                <label>Hombre</label>
                <input type="radio" name="sexo" value="1" id="sexo" />
                <br /> <label>Mujer</label>
                <input type="radio" name="sexo" value="0" id="sexo2" />
              </div>
              <u href="" className="col-4 registro" onClick={btnComenzar}>
                Ya tienes cuenta
              </u>

              <div className="mt-3 mb-5 container-fluid">
                <div className="text-center row">
                  <input
                    type="submit"
                    className=" botonsiguiente"
                    value="Siguiente"
                    name="submit"
                    id="submit"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
          integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
        ></script>
      </div>
    </div>
  );
}
