// ------------------------------
// ELEMENTOS DEL HTML
// ------------------------------

const form = document.querySelector("#palette-form");
const palette = document.querySelector("#palette");
const paletteSize = document.querySelector("#palette-size");
const colorCount = document.querySelector("#color-count");
const toast = document.querySelector("#toast");
const savePaletteButton = document.querySelector("#save-palette-button");
const paletteHistory = document.querySelector("#palette-history");
const STORAGE_KEY = "paletasGuardadas";

// ------------------------------
// NÚMERO ALEATORIO
// ------------------------------

function numeroAleatorio(minimo, maximo) {

  return Math.floor(
    Math.random() * (maximo - minimo + 1)
  ) + minimo;

}

// ------------------------------
// CONVERTIR NÚMERO A HEX
// ------------------------------

function convertirAHex(numero) {

  return numero
    .toString(16)
    .padStart(2, "0")
    .toUpperCase();

}

// ------------------------------
// CREAR COLOR RGB
// ------------------------------

function crearColorRGB() {

  const rojo = numeroAleatorio(0, 255);
  const verde = numeroAleatorio(0, 255);
  const azul = numeroAleatorio(0, 255);

  const rgb =
    `rgb(${rojo}, ${verde}, ${azul})`;

  const hex =
    "#" +
    convertirAHex(rojo) +
    convertirAHex(verde) +
    convertirAHex(azul);

  return {
    css: rgb,
    hex: hex,
    codigo: rgb
  };

}

// ------------------------------
// CREAR COLOR HSL
// ------------------------------

function crearColorHSL() {

  const tono = numeroAleatorio(0, 359);
  const saturacion = numeroAleatorio(55, 90);
  const luminosidad = numeroAleatorio(35, 70);

  const hsl =
    `hsl(${tono}, ${saturacion}%, ${luminosidad}%)`;

  const hex = convertirHSLaHex(
    tono,
    saturacion,
    luminosidad
  );

  return {
    css: hsl,
    hex: hex,
    codigo: hsl
  };

}

// ------------------------------
// ELEGIR EL FORMATO
// ------------------------------

function crearColor(formato) {

  if (formato === "hsl") {
    return crearColorHSL();
  }

  return crearColorRGB();

}

// ------------------------------
// CONVERTIR HSL A HEX
// ------------------------------

function convertirHSLaHex(tono, saturacion, luminosidad) {

  saturacion = saturacion / 100;
  luminosidad = luminosidad / 100;

  const c =(1 - Math.abs(2 * luminosidad - 1)) * saturacion;

  const x = c * (1 - Math.abs((tono / 60) % 2 - 1));

  const m = luminosidad - c / 2;

  let rojo = 0;
  let verde = 0;
  let azul = 0;

  if (tono < 60) {

    rojo = c;
    verde = x;

  } else if (tono < 120) {

    rojo = x;
    verde = c;

  } else if (tono < 180) {

    verde = c;
    azul = x;

  } else if (tono < 240) {

    verde = x;
    azul = c;

  } else if (tono < 300) {

    rojo = x;
    azul = c;

  } else {

    rojo = c;
    azul = x;

  }

  rojo = Math.round((rojo + m) * 255);
  verde = Math.round((verde + m) * 255);
  azul = Math.round((azul + m) * 255);

  return (
    "#" +
    convertirAHex(rojo) +
    convertirAHex(verde) +
    convertirAHex(azul)
  );

}

// ------------------------------
// ELEGIR COLOR DEL TEXTO
// ------------------------------

function elegirColorTexto(hex) {

  const rojo =
    parseInt(hex.substring(1, 3), 16);

  const verde =
    parseInt(hex.substring(3, 5), 16);

  const azul =
    parseInt(hex.substring(5, 7), 16);

  const brillo = (
    rojo * 299 +
    verde * 587 +
    azul * 114
  ) / 1000;

  if (brillo > 150) {return "#111111";
  }

  return "#ffffff";

}

// ------------------------------
// MOSTRAR MENSAJE
// ------------------------------

function mostrarMensaje(mensaje) {

  clearTimeout(window.mensajeTiempo);

  toast.textContent = mensaje;

  toast.classList.add("visible");


  window.mensajeTiempo = setTimeout(() => {

    toast.classList.remove("visible");

  }, 3000);

}

// ------------------------------
// COPIAR CÓDIGO
// ------------------------------

async function copiarCodigo(codigo) {

  try {

    await navigator.clipboard.writeText(codigo);

    mostrarMensaje(`${codigo} copiado al portapapeles`);

  } catch {

    mostrarMensaje(`No se pudo copiar. Código: ${codigo}`);

  }

}

// ------------------------------
// CREAR UNA TARJETA
// ------------------------------

function crearTarjetaColor(color) {

  const tarjeta = document.createElement("article");

  tarjeta.className = "color-card";

  tarjeta.style.backgroundColor = color.css;

  // La tarjeta comienza desbloqueada.

  tarjeta.dataset.bloqueado = "false";

  tarjeta.dataset.codigo = color.codigo;

  tarjeta.dataset.css = color.css;

  tarjeta.dataset.hex = color.hex;

  // Elegimos blanco o negro
  // para facilitar la lectura.

  const colorTexto = elegirColorTexto(color.hex);

  tarjeta.style.setProperty("--texto-color", colorTexto);

  tarjeta.style.setProperty(
    "--fondo-codigo",
    colorTexto === "#ffffff"
      ? "rgba(0, 0, 0, 0.25)"
      : "rgba(255, 255, 255, 0.6)"
  );

  // ------------------------------
  // CÓDIGO DEL COLOR
  // ------------------------------

  const codigo = document.createElement("button");

  codigo.type = "button";

  codigo.className = "color-code";

  codigo.textContent = color.codigo;

  codigo.setAttribute("aria-label", `Copiar el código ${color.codigo}`);

  codigo.addEventListener("click", () => {

    // Tomamos el código actual de la tarjeta.

    copiarCodigo(tarjeta.dataset.codigo);

  });

  tarjeta.appendChild(codigo);

  // ------------------------------
  // BOTÓN DE BLOQUEO
  // ------------------------------

  const botonBloqueo = document.createElement("button");

  botonBloqueo.type = "button";

  botonBloqueo.className = "lock-button";

  botonBloqueo.textContent ="🔓 Desbloqueado";

  botonBloqueo.setAttribute("aria-label", "Bloquear este color");

  botonBloqueo.setAttribute("aria-pressed", "false");

  botonBloqueo.addEventListener("click", () => {

    bloquearColor(tarjeta, botonBloqueo);

  });

  tarjeta.appendChild(botonBloqueo);

  return tarjeta;

}

// ------------------------------
// BLOQUEAR O DESBLOQUEAR
// ------------------------------

function bloquearColor(tarjeta, boton) {

  const estaBloqueado =
    tarjeta.dataset.bloqueado === "true";

  if (estaBloqueado) {

    tarjeta.dataset.bloqueado = "false";

    tarjeta.classList.remove("bloqueado");

    boton.textContent = "🔓 Desbloqueado";
    boton.setAttribute("aria-pressed", "false");
    boton.setAttribute(
      "aria-label",
      "Bloquear este color"
    );

    mostrarMensaje("Color desbloqueado");

  } else {

    tarjeta.dataset.bloqueado = "true";

    tarjeta.classList.add("bloqueado");

    boton.textContent = "🔒 Bloqueado";
    boton.setAttribute("aria-pressed", "true");
    boton.setAttribute(
      "aria-label",
      "Desbloquear este color"
    );

    mostrarMensaje("Color bloqueado");
  }
}

// ------------------------------
// ACTUALIZAR UNA TARJETA
// ------------------------------

function actualizarTarjeta(tarjeta, color) {

  tarjeta.style.backgroundColor = color.css;

  tarjeta.dataset.codigo = color.codigo;
  
  tarjeta.dataset.css = color.css;

  tarjeta.dataset.hex = color.hex;

  const colorTexto = elegirColorTexto(color.hex);


  tarjeta.style.setProperty("--texto-color", colorTexto);


  tarjeta.style.setProperty(
    "--fondo-codigo",
    colorTexto === "#ffffff"
      ? "rgba(0, 0, 0, 0.25)"
      : "rgba(255, 255, 255, 0.6)"
  );

  const codigo =
    tarjeta.querySelector(".color-code");

  codigo.textContent = color.codigo;

  codigo.setAttribute("aria-label", `Copiar el código ${color.codigo}`);

}

// ------------------------------
// OBTENER PALETAS GUARDADAS
// ------------------------------

function obtenerPaletasGuardadas() {

  const datos = localStorage.getItem(STORAGE_KEY);

  if (!datos) {
    return [];
  }

  try {
    const paletas = JSON.parse(datos);

    if (!Array.isArray(paletas)) {
      return [];
    }

    return paletas;

  } catch {
    return [];
  }
}

// ------------------------------
// MOSTRAR HISTORIAL
// ------------------------------

function mostrarHistorial() {

  paletteHistory.innerHTML = "";

  const paletasGuardadas = obtenerPaletasGuardadas();

  for (let numero = 0; numero < paletasGuardadas.length; numero++) {

    crearPaletaHistorial( paletasGuardadas[numero], numero);

  }

}

// ------------------------------
// CREAR PALETA DEL HISTORIAL
// ------------------------------

function crearPaletaHistorial(paletaGuardada, indice) {

  const paletaElemento =
    document.createElement("section");

  paletaElemento.className = "saved-palette";

  const titulo =
    document.createElement("h3");

  titulo.textContent = `Paleta guardada ${indice + 1}`;

  paletaElemento.appendChild(titulo);

  const colores = document.createElement("section");

  colores.className = "saved-colors";

  for (let numero = 0; numero < paletaGuardada.length; numero++) {

    const color = paletaGuardada[numero];

    const tarjeta =
      crearTarjetaGuardada(
        color.codigo,
        color.css,
        color.hex
      );

    colores.appendChild(tarjeta);

  }

  paletaElemento.appendChild(colores);

  const botonEliminar = document.createElement("button");

  botonEliminar.type = "button";

  botonEliminar.className = "delete-palette-button";

  botonEliminar.textContent = "Eliminar";

  botonEliminar.setAttribute(
    "aria-label",
    `Eliminar paleta ${indice + 1}`
  );

  botonEliminar.addEventListener("click", () => {

    eliminarPaleta(indice);

  });

  paletaElemento.appendChild(botonEliminar);

  paletteHistory.appendChild(paletaElemento);

}

// ------------------------------
// ELIMINAR PALETA
// ------------------------------

function eliminarPaleta(indice) {

  const paletasGuardadas = obtenerPaletasGuardadas();

  paletasGuardadas.splice(indice, 1);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(paletasGuardadas)
  );

  mostrarHistorial();

  mostrarMensaje("Paleta eliminada");

}

function crearTarjetaGuardada(codigo, css, hex) {

  const tarjeta = document.createElement("article");

  tarjeta.className = "color-card";

  tarjeta.style.backgroundColor = css;

  const colorTexto = elegirColorTexto(hex);

  tarjeta.style.setProperty(
    "--texto-color",
    colorTexto
  );

  tarjeta.style.setProperty(
    "--fondo-codigo",
    colorTexto === "#ffffff"
      ? "rgba(0, 0, 0, 0.25)"
      : "rgba(255, 255, 255, 0.6)"
  );

  const boton =
    document.createElement("button");

  boton.type = "button";

  boton.className = "color-code";

  boton.textContent = codigo;

  boton.setAttribute(
    "aria-label",
    `Copiar el código ${codigo}`
  );

  boton.addEventListener("click", () => {

    copiarCodigo(codigo);

  });

  tarjeta.appendChild(boton);

  return tarjeta;

}

// ------------------------------
// GENERAR LA PALETA
// ------------------------------

function generarPaleta() {

  const cantidad = Number(paletteSize.value);

  const formatoSeleccionado =
    document.querySelector('input[name="color-format"]:checked');

  if (!formatoSeleccionado) {
    mostrarMensaje("Selecciona un formato de color");
    return;
  }

  const formato = formatoSeleccionado.value;

  // Si la cantidad cambió,
  // creamos una nueva paleta.

  if (palette.children.length !== cantidad) {

    palette.innerHTML = "";

    while (palette.children.length < cantidad) {

      const color = crearColor(formato);

      const tarjeta = crearTarjetaColor(color);

      palette.appendChild(tarjeta);

    }

  } else {

    // Si la cantidad es la misma,
    // cambiamos solo los colores desbloqueados.

    for (
      let numero = 0;
      numero < cantidad;
      numero++
    ) {

      const tarjeta = palette.children[numero];

      const estaBloqueado =
        tarjeta.dataset.bloqueado === "true";

      if (estaBloqueado) {
        continue;
      }

      const color = crearColor(formato);

      actualizarTarjeta(tarjeta, color);

    }

  }

  colorCount.textContent = `${cantidad} colores`;

  mostrarMensaje("¡Nueva paleta generada!");

}

// ------------------------------
// GUARDAR PALETA
// ------------------------------

function guardarPaleta() {

  if (palette.children.length === 0) {
    mostrarMensaje("No hay una paleta para guardar");
    return;
  }

  const paleta = [];

  for (
    let numero = 0;
    numero < palette.children.length;
    numero++
  ) {

    const tarjetaActual = palette.children[numero];

    paleta.push({
      codigo: tarjetaActual.dataset.codigo,
      css: tarjetaActual.dataset.css,
      hex: tarjetaActual.dataset.hex
    });

  }

  const paletasGuardadas = obtenerPaletasGuardadas();

  paletasGuardadas.push(paleta);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(paletasGuardadas)
  );

  mostrarHistorial();

  mostrarMensaje("¡Paleta guardada!");
}

// ------------------------------
// GENERAR AL ABRIR
// ------------------------------

generarPaleta();

// ------------------------------
// CARGAR HISTORIAL AL ABRIR
// ------------------------------

mostrarHistorial();

// ------------------------------
// BOTÓN GENERAR PALETA
// ------------------------------

form.addEventListener("submit", (evento) => {

  evento.preventDefault();

  generarPaleta();

});

// ------------------------------
// BOTÓN GUARDAR PALETA
// ------------------------------

savePaletteButton.addEventListener("click", () => {

  guardarPaleta();

});