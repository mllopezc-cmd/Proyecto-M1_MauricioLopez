# 🤖 Documentación del uso de IA

## Proyecto

Generador de paletas de colores

## Objetivo

Se utilizó inteligencia artificial como apoyo durante el desarrollo,
revisión, mejora y documentación del proyecto.

La IA se utilizó como herramienta de orientación y revisión.
Las modificaciones fueron revisadas e incorporadas al proyecto
manualmente.

---

# 1. Revisión inicial

## Prompt

Se solicitó revisar los archivos HTML, CSS y JavaScript del proyecto,
priorizando que el botón principal y la generación de paletas
funcionaran correctamente.

También se solicitó revisar:

- responsive;
- accesibilidad;
- errores;
- estructura del proyecto;
- mejoras sencillas para principiantes.

## Resultado

Se revisó la estructura de HTML, CSS y JavaScript y se identificaron
posibles mejoras manteniendo la aplicación sencilla.

---

# 2. Mejora del botón de bloqueo

## Prompt

Se solicitó mejorar la visualización del texto "Desbloqueado"
cuando se generaban 9 colores y el espacio disponible era reducido.

## Resultado

Se modificó `.lock-button` para permitir que el texto se adapte
al espacio disponible.

Se utilizaron:

```css
text-align: center;
white-space: normal;
overflow-wrap: anywhere;

---

# 3. Mensaje "Copiar"

## Prompt

Se solicitó agregar un mensaje instructivo que apareciera al pasar
el mouse sobre el código de color.

## Resultado

Se agregó mediante CSS:

.color-code::after

El mensaje mostrado es:

Copiar

También se agregó:

.color-code:hover::after

para mostrarlo al pasar el mouse.

Posteriormente se agregó:

.color-code:focus-visible::after

para mejorar el comportamiento al utilizar el teclado.

---

# 4. Revisión del README

## Prompt

Se solicitó organizar la documentación del proyecto y explicar:

- cómo utilizar la aplicación;
- cómo ejecutar el proyecto;
- cómo desplegarlo;
- cómo documentar los commits;
- cómo organizar las evidencias.

## Resultado

Se estructuró el README con:

- descripción;
- objetivo;
- tecnologías;
- estructura;
- funcionamiento;
- generación de colores;
- bloqueo;
- copia;
- guardado;
- historial;
- accesibilidad;
- responsive;
- almacenamiento;
- mejoras;
- flujo;
- ejecución;
- despliegue;
- pruebas;
- commits;
- autor.

---

# 5. Organización de la documentación

## Prompt

Se solicitó crear una estructura de documentación adicional
al README que incluyera capturas, GIF y documentación del uso de IA.

## Resultado

Se propuso crear la carpeta:

docs/

con:

capturas/
gifs/
ia/

Esto permite separar el código fuente de las evidencias y
documentación complementaria.

# 6. Resultado general del uso de IA

La IA fue utilizada como apoyo para:

1. revisar código;
2. detectar posibles problemas;
3. explicar conceptos;
4. proponer mejoras sencillas;
5. mejorar accesibilidad;
6. organizar documentación;
7. estructurar el README;
8. preparar evidencias del proyecto.

La implementación final fue revisada y adaptada al proyecto.

---
```
