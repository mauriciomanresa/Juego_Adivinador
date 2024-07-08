// Selecciona un número al azar
let numeroAzar = Math.floor(Math.random() * 100) + 1;

// Defino variables
let numeroEntrada = document.getElementById("numeroEntrada");
let mensaje = document.getElementById("mensaje");
let intentoLabel = document.querySelector("#intentos-container span");
let intento = document.getElementById("intento");
let intentos = 0;
let boton = document.querySelector("button");
let magoImagen = document.getElementById("mago");

// Verificar el número ingresado
function chequear() {
  intentos++;
  intento.textContent = intentos;

  let numeroIngresado = parseInt(numeroEntrada.value);

  if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
    mensaje.textContent = "Introduce un número entre 1 y 100";
    return;
  }

  if (numeroIngresado === numeroAzar) {
    mensaje.textContent = '¡GANASTE...! "Has adivinado el número"';
    mensaje.style.color = "yellow";
    intentoLabel.style.color = "yellow";
    intento.style.color = "yellow";
    numeroEntrada.disabled = true;
    document.body.style.backgroundImage = 'url("./img/fuegos.jpg")';
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";

    // Ocultar elementos cuando ganas
    magoImagen.style.display = "none";
    document.querySelector(".juego h1").style.display = "none";
    document.querySelector(".juego p").style.display = "none";
    document.querySelector(".juego input").style.display = "none";

    // Mostrar el mensaje de ganador y el botón centrado
    mensaje.style.display = "block";
    mensaje.style.margin = "0 auto";
    boton.style.display = "block";
    boton.style.margin = "20px auto";

    // Efecto del botón
    boton.classList.add("button-clicked");

    // Cambiar texto del botón y añadir evento para reiniciar juego
    boton.textContent = "Nuevo Juego...";
    boton.removeEventListener("click", chequear);
    boton.addEventListener("click", reiniciarJuego);
  } else if (numeroIngresado < numeroAzar) {
    mensaje.textContent = `"Más Alto, el número es mayor que ${numeroIngresado}"`;
  } else {
    mensaje.textContent = `"Más Bajo, el número es menor que ${numeroIngresado}"`;
  }
}

// Reiniciar el juego
function reiniciarJuego() {
  window.location.reload();
}

// Limpiar Campo numérico
function limpiar() {
  numeroEntrada.value = "";
}

// Manejo de la tecla "Enter"
function handleEnter(event) {
  if (event.key === "Enter") {
    chequear();
    limpiar();
  }
}
