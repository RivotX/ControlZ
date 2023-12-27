
//
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
