import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/index.css"
import { act } from "react";
import logoIcon from "../img/logoIcon.png";

function Login() {

  const [PantallaPequeña, setPantallaPequeña] = useState(window.innerWidth < 640);

  useEffect(() => {
    const actualizarAnchoVentana = () => {
      setPantallaPequeña(window.innerWidth < 640);
    };

    window.addEventListener('resize', actualizarAnchoVentana);

    // Limpiar el listener del evento resize cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', actualizarAnchoVentana);
    };
  }, []);
  axios.defaults.withCredentials = true;

  const [values, setValues] = useState({
    usuario: "",
    password: "",
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    sexo: "",
    password2: "",
    actividadfisica: 1,
    objetivo: 1,
    ObjProteinas: 0,
    ObjCalorias: 0,
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
      sexo: "",
      password2: "",
      actividadfisica: 1,
      objetivo: 1,
      ObjProteinas: 0,
      ObjCalorias: 0,
    });
  };

  //js estética
  const [VisibleWelcome, setVisibleWelcome] = useState(true);
  const [VisibleIniciarSesion, setVisibleIniciarSesion] = useState(false);
  const [VisibleRegistro, setVisibleRegistro] = useState(false);
  const [VisibleRegistro2, setVisibleRegistro2] = useState(false);

  const [showMensaje1, setShowMensaje1] = useState(false);
  const [showMensaje2, setShowMensaje2] = useState(false);
  const [showMensajeEmail, setShowMensajeEmail] = useState(false);
  const [showMensajeCompletar, setShowMensajeCompletar] = useState(false);
  const [showErrorRegistro, setshowErrorRegistro] = useState(false);
  const [showMensajeInicio, setshowMensajeInicio] = useState(false);
  const [showMensajeNoExiste, setshowMensajeNoExiste] = useState(false);
  const [animacion, setanimacion] = useState("");


  const btnComenzar = () => {
    vaciarCampos();
    setVisibleWelcome(false);
    setVisibleRegistro(false);

    setVisibleRegistro2(false);
    setVisibleIniciarSesion(true);
  };

  const cambiarDisplayRegistro = () => {
    setVisibleRegistro(true);

    vaciarCampos();
    setShowMensaje1(false);
    setShowMensaje2(false);
    setShowMensajeEmail(false);
    setshowErrorRegistro(false);
    setShowMensajeCompletar(false);
    setVisibleIniciarSesion(false);
    setVisibleRegistro2(false);
    setVisibleRegistro(true);

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
      .post("https://serverc-4y5e.onrender.com/registro", values) //envia values a "servidor/registro"
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  const ComprobarReg = (event) => {
    console.log("loqesea");
    event.preventDefault();

    axios
      .post("https://serverc-4y5e.onrender.com/existeregistro", values) //envia values a "servidor/registro"
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
        "https://serverc-4y5e.onrender.com/login",
        { usuario: values.usuario, password: values.password },
        { withCredentials: true },
      )
      .then((res) => {
        axios
          .get("https://serverc-4y5e.onrender.com/getSession", { withCredentials: true }) //envia values a "servidor/registro"
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
          if (!showMensajeInicio) {
            setshowMensajeInicio(true);
          } else {

            setanimacion("animate__animated animate__headShake")
            setTimeout(() => {
              setanimacion("")
            }, 1000);
          }

        } else {
          console.log("entro al 201");
          setshowMensajeInicio(false);

          if (!showMensajeNoExiste) {
            setshowMensajeNoExiste(true);
          } else {

            setanimacion("animate__animated animate__headShake")
            setTimeout(() => {
              setanimacion("")
            }, 1000);
          }
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="fondoindex tw-h-screen tw-w-full ">
      {/* Navbar  */}
      <div className="tw-flex tw-justify-center">
        <nav className="tw-w-full tw-absolute tw-flex tw-justify-between tw-items-center tw-max-w-screen-2xl tw-px-4 sm:tw-px-12 md:tw-px-24 lg:tw-px-28 ">
          <a className="tw-w-1/2 tw-flex tw-text-white tw-items-center " href="/">
            <img
              src={logoIcon}
              alt="Logo"
              width="50"
              height="50"
              className="tw-me-3 tw-mt-1"
            />
            <span className=" tw-text-lg" >
              Control<span className="tw-text-[#03e9f4]">Z</span>
            </span>
          </a>
          <div className="tw-text-white tw-flex tw-justify-between tw-w-1/3 sm:tw-w-1/4 lg:tw-w-1/5  xl:tw-w-[15%]">
            <div className="tw-flex">
              <div className="tw-cursor-pointer hover:tw-bg-[#25D366] tw-rounded-full">
                <a
                  className="tw-pointer-events-none"
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
            </div>
            <div className="tw-cursor-pointer hover:tw-bg-blue-500 tw-rounded-full">

              <a
                className=""
                style={{ backgroundColor: "#ffe60000" }}

                role="button"
              >
                <svg
                  className="facebookbi bi-facebook tw-pointer-events-none"
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
            <div className="tw-cursor-pointer hover:tw-bg-[#cc4ccf] tw-rounded-full " href="">
              <a
                className=""
                style={{ backgroundColor: "#ffe60000" }}
                href="https://www.instagram.com/"
                role="button"
                target="_blank"
              >
                <svg className="instagram bi bi-instagram tw-pointer-events-none" xmlns="http://www.w3.org/2000/svg"
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
      <div className="tw-py-32" style={{ display: VisibleWelcome ? "block" : "none" }} >
        <div className="  titulocontenedor tw-text-[33px] sm:tw-text-5xl md:tw-text-5xl lg:tw-text-7xl d-flex justify-content-center align-items-center">
          <p>
            Nosotros te ayudamos a
            <br />
            <span className="construir">construir</span> tu legado.
          </p>
        </div>
        <br />
        <div className="fixed tw-mt-3 descripcionindex tw-text-sm tw-text-pretty sm:tw-text-lg md:tw-text-lg lg:tw-text-lg xl:tw-text-lg">
          {PantallaPequeña ?
            (<p id="frasesuelta">No esperes más para comenzar tu viaje hacia una mejor versión de ti mismo.
              <br></br>
              <br></br>
              ¡Únete a nuestra familia de fitness hoy y empieza a escribir tu historia de éxito!</p>)

            :

            (<>
              < p id="frasesuelta">
                No esperes más para comenzar tu viaje hacia una mejor versión de ti mismo. Únete a nosotros para descubrir el placer del ejercicio, la emoción del logro y el apoyo inquebrantable de una comunidad dedicada.
              </p>
              <br />
              <p id="frasesuelta">
                ¡Únete a nuestra familia de fitness hoy y empieza a escribir tu
                historia de éxito!
              </p>
            </>)}
        </div>

        <div className="d-flex tw-text-sm tw-pt-[3%] justify-content-center align-items-center">
          <button className="iniciar tw-p-5" type="button" onClick={btnComenzar}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            COMENZAR
          </button>
        </div>
      </div>

      <div className=" tw-px-2 tw-flex tw-justify-center tw-items-center">
        {/* Inicio de sesion */}
        {VisibleIniciarSesion && (

          <div className="tw-flex tw-justify-center tw-items-center tw-w-full tw-pt-20">
            <div className=" login-box tw-border-cyan-50 tw-py-8 tw-px-20 tw-h-full"
              id="logearse"
            >
              <h2 className="tw-text-white tw-text-[1.9rem] text-center sm:tw-text-[2.3rem] md:tw-text-[3rem] tw-font-semibold ">Iniciar Sesión</h2>
              <form onSubmit={SumbitLogin} method="post" className="tw-h-1/2">
                <div className="text-center tw-flex tw-flex-wrap tw-justify-center tw-items-center ">
                  <p className="text-white tw-w-full tw-text-[1.rem] sm:tw-text-[1.2rem]  tw-py-5 ">Sign in with:</p>
                  <button
                    type="button"
                    className="mx-1 btn btn-secondary btn-floating "
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
                <div className="tw-py-8 tw-flex tw-flex-wrap tw-gap-8 sm:tw-gap-8 md:tw-gap-20 md:tw-py-10">
                  <div className="user-box tw-w-full md:tw-gap-2">
                    <input
                      type="text"
                      name="usuarioInicio"
                      required
                      value={values.usuario}
                      onChange={(e) =>
                        setValues({ ...values, usuario: e.target.value })
                      }
                    />
                    <label className="sm:tw-text-lg md:tw-text-xl md:tw-top-[-80%] tw-top-[-20%]">Usuario</label>
                  </div>
                  <div className="user-box tw-w-full md:tw-gap-2">
                    <input
                      type="password"
                      name="claveInicio"
                      required
                      value={values.password}
                      onChange={(e) =>
                        setValues({ ...values, password: e.target.value })
                      }
                    />
                    <label className="sm:tw-text-lg md:tw-text-xl md:tw-top-[-80%] tw-top-[-20%]">Contraseña</label>
                  </div>
                </div>
                <p
                  id="mensajeConstraseñaincorrectaInicio"
                  className={`${animacion} text-danger position-absolute`}
                  style={{
                    display: showMensajeInicio ? "block" : "none",
                    height: "10px",
                  }}
                >
                  Constraseña Incorrecta
                </p>

                <p
                  id="mensajeConstraseñaincorrectaInicio"
                  className={`${animacion} text-danger position-absolute`}
                  style={{
                    display: showMensajeNoExiste ? "block" : "none",
                    height: "10px",
                  }}
                >
                  Usuario inexistente
                </p>

                <div className="">
                  <u
                    href=""
                    className=" registro float-end tw-text-sm sm:tw-text-[0.9rem] md:tw-text-[1rem]"
                    onClick={cambiarDisplayRegistro}
                  >
                    No tengo cuenta
                  </u>
                </div>
                <div className="tw-mt-[20%] sm:tw-mt-[20%] tw-flex tw-w-full tw-justify-center ">
                  <div className="text-center tw-w-[100%] sm:tw-w-100%] md:tw-w-[100%] rounded-2">
                    <input
                      type="submit"
                      className=" botonsiguiente tw-w-full tw-bg-[#43b6bca3] sm:tw-text-lg md:tw-text-xl "
                      value="Siguiente"
                      name="submit"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Registro 1 */}
        {VisibleRegistro && (
          <div className="tw-flex tw-justify-center tw-items-center tw-w-full tw-pt-20">
            <div className='login-box tw-border-cyan-50 tw-py-8 tw-px-16 md:tw-px-32 tw-h-full'
              id="registrar"

            >
              <h2 className="tw-text-white tw-text-[2.2rem] text-center  sm:tw-text-[3rem]  tw-font-semibold">Crea tu Perfil</h2>

              <form id="" onSubmit={ComprobarReg} className="tw-h-1/2 tw-w-full">
                <div className="text-center tw-flex tw-flex-wrap tw-justify-center tw-items-center ">
                  <p className="text-white tw-w-full tw-text-[1.rem] sm:tw-text-[1.2rem]  tw-py-5">Sign up with:</p>
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

                <div className="tw-pt-5 ">
                  <div className="user-box tw-w-full md:tw-gap-2 tw-text-md lg:tw-text-xl tw-py-5">
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
                  <div className="user-box tw-w-full md:tw-gap-2 tw-text-md lg:tw-text-xl tw-py-5">
                    <input
                      type="text"
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
                  <div className="user-box tw-w-full md:tw-gap-2 tw-text-md lg:tw-text-xl tw-py-5">
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

                  <div className="user-box tw-w-full md:tw-gap-2 tw-text-md lg:tw-text-xl tw-py-5">
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
                <br></br>
                <div className="">
                  <u
                    href=""
                    className=" registro float-end tw-text-sm sm:tw-text-[0.9rem] md:tw-text-[1.1rem] lg:tw-text-[1rem]"
                    onClick={btnComenzar}
                  >
                    Ya tienes cuenta
                  </u>
                </div>
                <div className="tw-mt-[20%] sm:tw-mt-[12%] tw-flex tw-w-full tw-justify-center">
                  <div className="text-center tw-w-[100%] sm:tw-w-100%] md:tw-w-[100%] rounded-2">
                    <input
                      type="submit"
                      className=" botonsiguiente tw-w-full tw-bg-[#43b6bca3] sm:tw-text-lg md:tw-text-xl"
                      value="Siguiente"
                      name="submit"
                      id="sumbit"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}


        {/* Registro 2 */}
        {VisibleRegistro2 && (<div className='tw-flex tw-justify-center tw-items-center tw-w-full tw-py-20'>
          <div
            className="login-box tw-border-cyan-50 tw-py-8 tw-px-16 md:tw-px-28 tw-h-full "
            id="reg"
          >
            <h2 className="tw-text-white tw-text-[2.2rem] text-center sm:tw-text-[3.5rem] md:tw-text-[4rem] tw-font-semibold">Crea tu Perfil</h2>

            <form id="enviarphp" onSubmit={SumbitRegistro} className="tw-h-1/2">
              <div className="tw-pt-8">
                <div className="user-box tw-w-full md:tw-gap-2 tw-text-md lg:tw-text-xl tw-py-5">
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

                <div className="user-box regPlus tw-text-md lg:tw-text-xl tw-py-5">
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

                <div className="user-box regPlus tw-text-md lg:tw-text-xl tw-py-5">
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

                <div className="tw-text-white tw-py-5 tw-text-md lg:tw-text-xl tw-justify-between tw-flex tw-w-full">
                  <h3 className="">Sexo</h3>
                  <div className="inline-flex tw-items-center">
                    <input className="text-center tw-border tw-rounded-lg tw-border-blue-300 form-check-input" type="radio" value="1" onClick={(e) => { setValues({ ...values, sexo: e.target.value }) }} name="sexo"></input>
                    <label htmlFor="sexo" className="tw-ml-1">M</label>
                    <input className="text-center tw-border tw-rounded-lg tw-border-blue-300 form-check-input tw-ml-1" type="radio" value="0" onClick={(e) => { setValues({ ...values, sexo: e.target.value }) }} name="sexo"></input>
                    <label htmlFor="sexo" className="tw-ml-1">F</label>
                  </div>
                </div>
              </div>

              <u href="" className="registro float-end tw-text-sm sm:tw-text-[0.9rem] md:tw-text-[1.1rem] lg:tw-text-[1rem]" onClick={btnComenzar}>
                Ya tienes cuenta
              </u>

              <div className="tw-mt-[20%] sm:tw-mt-[12%] tw-flex tw-w-full tw-justify-center">
                <div className="text-center tw-w-[100%] sm:tw-w-100%] md:tw-w-[100%] rounded-2">
                  <input
                    type="submit"
                    className=" botonsiguiente tw-w-full tw-bg-[#43b6bca3] sm:tw-text-lg md:tw-text-xl"
                    value="Siguiente"
                    name="submit"
                    id="submit"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>)}

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
  );
}

export default Login;
