# 🎨 Generador de paletas

Aplicación web sencilla para generar paletas de colores aleatorias utilizando los formatos **HSL** y **RGB**.

El usuario puede elegir la cantidad de colores, generar nuevas paletas, bloquear colores para conservarlos, copiar sus códigos, guardar paletas y consultar un historial de paletas guardadas.

## 🚀 Funcionalidades

- Generación aleatoria de paletas.
- Selección de 6, 8 o 9 colores.
- Generación de colores en formato HSL.
- Generación de colores en formato RGB.
- Conversión de HSL a HEX para calcular la legibilidad del texto.
- Bloqueo y desbloqueo de colores.
- Copia del código del color al portapapeles.
- Guardado de paletas mediante `localStorage`.
- Historial de paletas guardadas.
- Eliminación de paletas del historial.
- Mensajes de confirmación para las acciones principales.
- Diseño responsive para escritorio, tablet y móvil.
- Consideraciones básicas de accesibilidad.

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- LocalStorage
- API Clipboard

No se utilizan frameworks ni librerías externas.

## 📁 Estructura del proyecto

```text
generador-paletas/
│
├── index.html
├── styles.css
├── app.js
└── README.md