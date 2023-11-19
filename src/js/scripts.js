function ampliar(elemento, number) {
  elemento.style.backgroundSize = number;
}
function desampliar(elemento) {
  elemento.style.backgroundSize = "180%";
}
function iniciarsesion() {
  var nuevaPagina = "paginas/principal.html";
  window.location.href = nuevaPagina;
}

function btncomenzar() {
  var login = document.getElementsByClassName("login-box")[0];
  var completo = document.getElementsByClassName("completo")[0];
  var registro = document.getElementsByClassName("loginRegistro")[0];

  completo.style.display = "none";
  login.style.display = "block";
  login.style.opacity = "100%";
  registro.style.display = "none";
  registro.style.opacity = "0%";
}

function RegPlus() {
  var registro = document.getElementsByClassName("loginRegistro")[0];

  registro.style.display = "block";
  registro.style.opacity = "100%";
}

function registrar() {
  var login = document.getElementsByClassName("login-box")[0];
  var registro = document.getElementsByClassName("login-box")[1];

  login.style.display = "none";
  registro.style.display = "block";
  registro.style.opacity = "100%";
}

function inputIguales() {
  var campo1 = document.getElementById("clave1");
  var campo2 = document.getElementById("clave2");
  var mensaje = document.getElementById("mensaje");

  if (campo2.value !== campo1.value) {
    mensaje.style.display = "block";
  } else {
    mensaje.style.display = "none";
  }
}

function enviar() {
  var campo1 = document.getElementById("clave1");
  var campo2 = document.getElementById("clave2");
  var elemento = document.getElementById("submit");
  var mensaje = document.getElementById("mensaje2");
  if (campo2.value === campo1.value && campo2.value.length >= 8) {
    elemento.type = "submit";
  } else {
    mensaje.style.display = "block";
  }
}

function rutinadias(elemento) {
  const contenidopag = document.getElementsByClassName("contenidoGym")[0];
  contenidopag.innerHTML = "";
  let dia = elemento.textContent;
  console.log(dia);

  switch (dia) {
    case "lunes":
      break;

    case "martes":
      break;
    case "miercoles":
      break;
    case "jueves":
      break;
    case "viernes":
      break;
    case "sabado":
      break;
    case "domingo":
      break;
  }
}

function cambiarhidden() {
  var scroll = document.getElementById("flecha");
  var hidden = document.getElementById("scroll");

  //scroll.style.overflow="auto";
  //hidden.style.overflow="hidden";

  hidden.style.overflow = "auto";
}
