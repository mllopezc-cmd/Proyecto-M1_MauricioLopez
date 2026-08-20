# 🎨 Generador de paletas de colores

(https://mllopezc-cmd.github.io/Proyecto-M1_MauricioLopez/)

---

## 📚 Índice

- [Descripción](#-descripción)
- [Cómo utilizar el proyecto](#-cómo-utilizar-el-proyecto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologías utilizadas](#-tecnologías-utilizadas)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Flujo del proyecto](#-flujo-del-proyecto)
- [Cómo ejecutar localmente](#-cómo-ejecutar-localmente)
- [Cómo desplegar](#-cómo-desplegar)
- [Commits](#-commits)
- [Autor](#-autor)

---

## 🎯 Descripción

Generador sencillo de paletas de colores aleatorias desarrollado con HTML, CSS y JavaScript.

La aplicación permite generar paletas utilizando diferentes cantidades de colores y formatos, copiar los códigos de color, bloquear colores para conservarlos, guardar paletas y consultar un historial.

[⬆️ Volver al inicio](#-generador-de-paletas-de-colores)

---

## ▶️ Cómo utilizar el proyecto

1. Abrir la aplicación.
2. Seleccionar la cantidad de colores.
3. Seleccionar el formato HSL o RGB.
4. Pulsar Generar paleta.
5. Hacer clic sobre el código de un color para copiarlo.
6. Utilizar el botón Bloqueado / Desbloqueado para conservar un color.
7. Pulsar Guardar paleta para almacenarla.

[⬆️ Volver al inicio](#-generador-de-paletas-de-colores)

---

## Funcionalidades

La aplicación comienza generando automáticamente una paleta.

Cuando se pulsa el botón Generar paleta, JavaScript:

1. Obtiene la cantidad seleccionada.
2. Comprueba el formato elegido.
3. Genera colores aleatorios.
4. Crea las tarjetas de colores.
5. Actualiza la información mostrada.

Si un color está bloqueado, permanece igual mientras los demás colores se regeneran.

[⬆️ Volver al inicio](#-generador-de-paletas-de-colores)

---

## 🛠️ Tecnologías utilizadas

El proyecto utiliza tecnologías web básicas:

- HTML5
- CSS3
- JavaScript
- LocalStorage
- Git
- GitHub
- GitHub Pages

[⬆️ Volver al inicio](#-generador-de-paletas-de-colores)

---

## 📁 Estructura del proyecto

```text
generador-paletas/
│
├── index.html
├── styles.css
├── app.js
└── README.md
```

### index.html

Contiene la estructura y los elementos visibles de la aplicación.

### styles.css

Contiene los estilos, diseño responsive, colores, botones, tarjetas y reglas de accesibilidad visual.

### app.js

Contiene toda la lógica del generador:

1. generación de colores;
2. conversión HSL a HEX;
3. selección del color del texto;
4. bloqueo de colores;
5. copia al portapapeles;
6. guardado de paletas;
7. historial;
8. eliminación de paletas.

### README.md

Contiene la documentación del proyecto.

## 🎨 Generación de colores

El proyecto permite generar colores mediante:

### HSL

JavaScript genera:

- tono;
- saturación;
- luminosidad.

Después convierte el resultado a HEX para poder determinar si el texto debe ser claro u oscuro.

### RGB

Se generan valores aleatorios para:

- rojo;
- verde;
- azul.

El resultado se muestra como RGB y también se calcula su equivalente HEX.

## 🔒 Bloqueo de colores

Cada color tiene un botón:

🔓 Desbloqueado

Al pulsarlo cambia a:

🔒 Bloqueado

Cuando un color está bloqueado, no cambia al generar una nueva paleta.

Esto permite conservar un color mientras se prueban diferentes combinaciones.

## 📋 Copiar códigos

Cada código de color funciona como un botón.

Al pasar el mouse aparece el mensaje:

Copiar

Al hacer clic, JavaScript intenta copiar el código al portapapeles.

Por ejemplo:

hsl(210, 70%, 50%)

Después aparece un mensaje indicando que el código fue copiado.

También se contempla el uso mediante teclado utilizando el estado focus-visible.

## 💾 Guardar paletas

El botón:

Guardar paleta

toma los colores actualmente mostrados y los guarda utilizando localStorage.

De esta manera los datos pueden mantenerse aunque se cierre o actualice el navegador.

## Historial

Las paletas guardadas aparecen en la sección:

Historial de paletas

Cada paleta incluye:

- sus colores;
- códigos;
- botón para eliminarla.

Al eliminar una paleta, también se actualiza la información almacenada en localStorage.

## ♿ Accesibilidad

Se incorporaron mejoras básicas de accesibilidad:

- etiquetas para los controles;
- aria-label;
- aria-live;
- aria-pressed;
- estados focus-visible;
- botones reales para acciones;
- textos alternativos mediante atributos ARIA;
- soporte básico para navegación mediante teclado.

También se respeta:

@media (prefers-reduced-motion: reduce)

para reducir las animaciones cuando el usuario así lo configura en su sistema.

## 📱 Responsive

La aplicación se adapta a diferentes tamaños de pantalla.

Se contemplan tres situaciones principales:

### Escritorio

La paleta utiliza varias columnas.

### Tablet

La distribución se reduce para aprovechar mejor el espacio.

### Móvil

La paleta utiliza dos columnas y los controles ocupan el ancho disponible.

También se adapta el tamaño de los botones y espacios.

## 💾 Almacenamiento

Las paletas guardadas utilizan:

localStorage

La información se almacena utilizando la clave:

const STORAGE_KEY = "paletasGuardadas";

El historial se recupera cuando se vuelve a cargar la aplicación.

## ✨ Mejoras realizadas

Durante el desarrollo se realizaron diferentes mejoras.

### 1. Generación automática

La aplicación genera una primera paleta automáticamente al abrirse.

### 2. Generación según cantidad

Se añadieron opciones para generar:

6 colores;
8 colores;
9 colores.

### 3. Formatos de color

Se incorporó la posibilidad de utilizar:

HSL;
RGB.

### 4. Bloqueo de colores

Los colores pueden bloquearse para conservarlos durante una nueva generación.

### 5. Copiar códigos

Los códigos se pueden copiar haciendo clic sobre ellos.

### 6. Mensaje "Copiar"

Se agregó una indicación visual al pasar el mouse sobre el código.

### 7. Accesibilidad del mensaje

También se agregó:

.color-code:focus-visible::after

para mostrar el mensaje al navegar mediante teclado.

### 8. Guardado de paletas

Las paletas pueden almacenarse en el navegador.

### 9. Historial

Se agregó una sección para consultar las paletas guardadas.

### 10. Eliminación

Cada paleta guardada puede eliminarse individualmente.

### 11. Responsive

Se añadieron reglas para escritorio, tablet y móvil.

### 12. Mejor lectura del botón de bloqueo

El texto:

🔓 Desbloqueado

se adapta mejor al espacio disponible mediante:

white-space: normal;
overflow-wrap: anywhere;

Esto evita que el texto se salga de la tarjeta cuando se muestran 9 colores.

[⬆️ Volver al inicio](#-generador-de-paletas-de-colores)

---

## 🔄 Flujo del proyecto

El funcionamiento general puede representarse de la siguiente manera:

                 ┌──────────────────┐
                 │      INICIO      │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │ Cargar HTML/CSS  │
                 │   y JavaScript   │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │ Generar paleta   │
                 │    inicial       │
                 └────────┬─────────┘
                          │
                          ▼
              ┌─────────────────────────┐
              │ Seleccionar configuración│
              │                         │
              │ Cantidad + Formato      │
              └────────────┬────────────┘
                           │
                           ▼
                 ┌──────────────────┐
                 │ Generar colores  │
                 └────────┬─────────┘
                          │
                          ▼
              ┌─────────────────────────┐
              │ Mostrar tarjetas        │
              │ de colores              │
              └────────────┬────────────┘
                           │
             ┌─────────────┼──────────────┐
             │             │              │
             ▼             ▼              ▼
        ┌─────────┐  ┌──────────┐  ┌────────────┐
        │ Copiar  │  │ Bloquear │  │   Guardar  │
        │ código  │  │  color   │  │   paleta   │
        └─────────┘  └──────────┘  └──────┬─────┘
                                          │
                                          ▼
                                  ┌──────────────┐
                                  │ localStorage │
                                  └──────┬───────┘
                                         │
                                         ▼
                                  ┌──────────────┐
                                  │   Historial  │
                                  └──────┬───────┘
                                         │
                                         ▼
                                  ┌──────────────┐
                                  │   Eliminar   │
                                  │    paleta    │
                                  └──────────────┘

[⬆️ Volver al inicio](#-generador-de-paletas-de-colores)

---

## 💻 Cómo ejecutar localmente

Para ejecutar el proyecto en Visual Studio Code:

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Verificar que existan:

index.html
styles.css
app.js
README.md

4. Abrir index.html en el navegador.

También se puede utilizar una extensión como Live Server para visualizar los cambios automáticamente.

[⬆️ Volver al inicio](#-generador-de-paletas-de-colores)

---

## 🚀 Cómo desplegar

El proyecto puede desplegarse utilizando GitHub Pages.

Pasos generales:

1. Subir el proyecto a GitHub.
2. Entrar en:

Settings
→ Pages

3. Seleccionar la rama principal, normalmente:

main

4. Seleccionar la carpeta:

/root

5. Guardar la configuración.
6. Esperar a que GitHub publique el proyecto.
7. Copiar la URL proporcionada por GitHub Pages.
8. Agregarla al inicio de este README.

[⬆️ Volver al inicio](#-generador-de-paletas-de-colores)

---

## 📝 Commits

Se recomienda mantener commits pequeños y descriptivos.

Ejemplos utilizados durante el desarrollo:

- feat: agregar generación de paletas
- feat: agregar bloqueo de colores
- feat: agregar copia de códigos
- feat: agregar mensaje copiar
- feat: agregar guardado de paletas
- feat: agregar historial de paletas
- fix: mejorar texto del botón desbloqueado
- style: mejorar diseño responsive
- docs: actualizar README

[⬆️ Volver al inicio](#-generador-de-paletas-de-colores)

---

## 👤 Autor

### Mauricio Leonardo López Cruz

- LinkedIn
- GitHub

[⬆️ Volver al inicio](#-generador-de-paletas-de-colores)
