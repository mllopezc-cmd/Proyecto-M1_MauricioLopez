# Bitácora de desarrollo — Generador de paletas

## 1. Información general

**Proyecto:** Generador de paletas de colores  
**Autor:** Mauricio Leonardo Lopez Cruz  
**Tecnologías:** HTML, CSS y JavaScript  
**Repositorio:** Proyecto-M1_MauricioLopez  
**Estado actual:** Finalizado y funcional

---

## 2. Objetivo del proyecto

El objetivo del proyecto es desarrollar una aplicación web sencilla que permita generar paletas de colores aleatorias.

El usuario puede:

- Seleccionar la cantidad de colores.
- Elegir entre HSL y RGB/HEX.
- Generar una nueva paleta.
- Copiar el código de cada color.
- Bloquear colores para conservarlos al generar nuevamente.
- Guardar paletas.
- Consultar el historial de paletas guardadas.
- Eliminar paletas del historial.

---

# 3. Bitácora general del desarrollo

## Etapa 1 — Estructura inicial del proyecto

### Estado

**Completada**

### Objetivo

Crear la estructura básica de la aplicación utilizando HTML, CSS y JavaScript.

### Archivos principales

```text
index.html
styles.css
app.js

## Decisiones técnicas

Se decidió utilizar HTML, CSS y JavaScript sin frameworks ni librerías externas.

Esto permitió mantener el proyecto sencillo y facilitar el aprendizaje de los conceptos fundamentales del desarrollo web.

## Aprendizaje

Durante esta etapa se reforzó el uso de:

✓ Estructura semántica HTML.
✓ Formularios.
✓ Botones.
✓ Selectores CSS.
✓ Funciones JavaScript.
✓ Manipulación del DOM.

---

# 4. Etapa 2 — Generación de colores

## Estado

Completada

## Objetivo

Permitir que la aplicación genere colores aleatorios.

Se implementaron dos formatos:

✓ HSL.
✓ RGB con conversión a HEX.

## Decisión técnica

Se creó una función principal:

✓ function crearColor(formato)

Esta función determina qué tipo de color generar según la opción seleccionada por el usuario.

## Aprendizaje

Se comprendió cómo:

✓ Generar números aleatorios.
✓ Trabajar con RGB.
✓ Trabajar con HSL.
✓ Convertir valores numéricos a hexadecimal.
✓ Crear objetos JavaScript para almacenar información de los colores.

# 5. Etapa 3 — Generación de la cantidad seleccionada

## Estado

Completada

## Objetivo

Permitir al usuario seleccionar diferentes cantidades de colores.

Las opciones implementadas son:

6 colores
8 colores
9 colores

## Decisión técnica

El valor seleccionado se obtiene desde el elemento:

const cantidad = Number(paletteSize.value);

Posteriormente JavaScript genera las tarjetas necesarias.

## Aprendizaje

Se reforzó el uso de:

✓ querySelector.
✓ value.
✓ Number().
✓ Bucles for y while.
✓ Creación dinámica de elementos HTML.

# 6. Etapa 4 — Bloqueo de colores

## Estado

Completada

## Objetivo

Permitir que el usuario conserve un color mientras genera una nueva paleta.

## Decisión técnica

Cada tarjeta utiliza un atributo data:

✓ tarjeta.dataset.bloqueado

Cuando el color está bloqueado se establece:

✓ tarjeta.dataset.bloqueado = "true";

Al generar una nueva paleta, JavaScript comprueba este estado antes de cambiar el color.

## Resultado

Los colores bloqueados permanecen iguales mientras los demás colores se regeneran.

## Aprendizaje

Esta etapa permitió comprender mejor:

✓ dataset.
✓ Estados de elementos.
✓ Eventos click.
✓ Condicionales.
✓ Manipulación de clases CSS.

# 7. Etapa 5 — Copiar códigos de colores

## Estado

Completada

## Objetivo

Permitir que el usuario copie fácilmente el código del color.

## Decisión técnica

Se utilizó:

✓ navigator.clipboard.writeText(codigo);

El código se copia mediante el botón que contiene el valor RGB, HSL o HEX correspondiente.

## Resultado

Al hacer clic sobre el código se copia al portapapeles y aparece un mensaje de confirmación.

## Aprendizaje

Se aprendió a utilizar:

✓ API Clipboard.
✓ Funciones async.
✓ await.
✓ Manejo de errores mediante try/catch.

# 8. Etapa 6 — Mensajes al usuario

## Estado

Completada

## Objetivo

Informar al usuario cuando realiza determinadas acciones.

## Mensajes implementados

✓ ¡Nueva paleta generada!
✓ Color bloqueado
✓ Color desbloqueado
✓ ¡Paleta guardada!
✓ Paleta eliminada
✓ Código copiado al portapapeles
✓ Decisión técnica

Se creó una función reutilizable:

✓ function mostrarMensaje(mensaje)

Esta función controla el elemento:

✓ <p id="toast"></p>

## Aprendizaje

Se aprendió a crear una función reutilizable para diferentes acciones en lugar de repetir código.

# 9. Etapa 7 — Indicador "Copiar"

## Estado

Completada

## Objetivo

Mejorar la experiencia del usuario indicando que el código de color puede seleccionarse.

## Decisión técnica

Se utilizó un pseudo-elemento CSS:

✓ .color-code::after

con el contenido:

content: "Copiar";

El mensaje aparece cuando el usuario pasa el mouse sobre el código.

## Resultado

El usuario visualiza:

Copiar

antes de hacer clic.

## Aprendizaje

Se aprendió a utilizar:

✓ ::after.
✓ content.
✓ opacity.
✓ :hover.
✓ position: absolute.
✓ position: relative.

# 10. Etapa 8 — Mejora de accesibilidad

## Estado

Completada

## Objetivo

Permitir que las funciones principales también sean comprensibles mediante navegación con teclado.

## Decisión técnica

Se agregó:

✓ .color-code:focus-visible::after {opacity: 1;}

También se mantuvieron indicadores visuales de foco:

button:focus-visible,
select:focus-visible,
input:focus-visible {
  outline: 3px solid var(--color-foco);
}

## Resultado

La indicación "Copiar" no depende únicamente del mouse.

## Aprendizaje

Se comprendió la importancia de:

✓ focus-visible.
✓ Contraste visual.
✓ Indicadores de foco.
✓ Atributos ARIA.
✓ Navegación mediante teclado.

# 11. Etapa 9 — Corrección del botón "Desbloqueado"

## Estado

Completada

## Problema detectado

Al generar 9 colores, el texto:

🔓 Desbloqueado

podía superar el espacio disponible de algunas tarjetas.

## Solución

Se modificó .lock-button:

.lock-button {
  text-align: center;
  white-space: normal;
  overflow-wrap: anywhere;
}

## Resultado

El texto puede adaptarse al ancho disponible sin salirse de la tarjeta.

## Aprendizaje

Se reforzó el uso de CSS para resolver problemas de diseño responsive sin necesidad de modificar la lógica JavaScript.

# 12. Etapa 10 — Guardado de paletas

## Estado

Completada

## Objetivo

Permitir conservar una paleta para consultarla posteriormente.

## Decisión técnica

Se utilizó: localStorage.

La clave utilizada es:

const STORAGE_KEY = "paletasGuardadas";

Las paletas se convierten a JSON antes de almacenarse:

JSON.stringify(paletasGuardadas)

Para recuperarlas:

JSON.parse(datos)

## Resultado

Las paletas guardadas permanecen disponibles en el navegador incluso después de actualizar la página.

## Aprendizaje

Se aprendió a utilizar:

✓ localStorage.
✓ JSON.
✓ JSON.stringify().
✓ JSON.parse().
✓ Persistencia de datos en el navegador.

# 13. Etapa 11 — Historial y eliminación

## Estado

Completada

## Objetivo

Mostrar las paletas guardadas y permitir eliminarlas.

## Decisión técnica

Se creó dinámicamente una sección para cada paleta guardada.

La eliminación utiliza:

paletasGuardadas.splice(indice, 1);

Después se actualiza nuevamente localStorage.

## Resultado

El usuario puede:

✓ Guardar una paleta.
✓ Verla en el historial.
✓ Eliminarla cuando ya no la necesita.

## Aprendizaje

Se reforzó la manipulación de arrays y la actualización dinámica del DOM.

# 14. Etapa 12 — Diseño responsive

## Estado

Completada

## Objetivo

Adaptar la aplicación a diferentes tamaños de pantalla.

## Decisión técnica

Se utilizaron media queries:

@media (max-width: 900px)

y:

@media (max-width: 600px)

## Resultado

La aplicación se adapta a:

✓ Computadoras.
✓ Tablets.
✓ Teléfonos móviles.

## Aprendizaje

Se reforzó el uso de:

✓ CSS Grid.
✓ Media queries.
✓ Unidades relativas.
✓ Diseño adaptable.

# 15. Etapa 13 — Revisión final

## Estado

Completada

## Verificaciones realizadas

Se revisaron las funciones principales:

✓ Generar paleta.
✓ Seleccionar cantidad.
✓ Seleccionar HSL.
✓ Seleccionar RGB/HEX.
✓ Copiar códigos.
✓ Bloquear colores.
✓ Desbloquear colores.
✓ Guardar paletas.
✓ Mostrar historial.
✓ Eliminar paletas.
✓ Mostrar mensajes.
✓ Responsive.
✓ Accesibilidad básica.

# 16. Decisiones técnicas generales

Durante el desarrollo se tomaron las siguientes decisiones:

## HTML

Se utilizó HTML semántico para organizar la aplicación.

Se utilizaron elementos como:

✓ header
✓ main
✓ section
✓ form
✓ fieldset
✓ footer
✓ nav
✓ button

Esto permite mantener una estructura clara y accesible.

## CSS

Se utilizó CSS puro para evitar dependencias externas.

Se implementaron:

✓ Variables CSS.
✓ CSS Grid.
✓ Media queries.
✓ Estados hover.
✓ Estados focus-visible.
✓ Transiciones.
✓ Pseudo-elementos.
✓ JavaScript

Se utilizó JavaScript puro para controlar toda la lógica.

No se utilizaron frameworks ni librerías externas.

## Persistencia

Se utilizó:

localStorage

porque el proyecto no necesita un servidor ni una base de datos para guardar las paletas.

# 17. Proceso de aprendizaje

El desarrollo permitió avanzar progresivamente desde conceptos básicos hacia funcionalidades más completas.

## Al inicio

El objetivo principal era conseguir que funcionara:

Seleccionar → Generar → Mostrar colores

## Después

Se incorporaron funcionalidades:

✓ Copiar
✓ Bloquear
✓ Guardar
✓ Historial
✓ Eliminar

## Finalmente

Se trabajó sobre la experiencia del usuario:

✓ Responsive
✓ Accesibilidad
✓ Indicador "Copiar"
✓ Mensajes
✓ Mejor adaptación de botones

El proyecto permitió comprender que primero es importante conseguir una funcionalidad básica estable y después agregar mejoras progresivamente.

# 18. Uso de inteligencia artificial

Durante el desarrollo se utilizó IA como herramienta de apoyo para:

✓ Revisar el código.
✓ Detectar posibles problemas.
✓ Explicar conceptos de HTML, CSS y JavaScript.
✓ Proponer mejoras de usabilidad.
✓ Revisar responsive.
✓ Revisar accesibilidad.
✓ Ayudar con la documentación.
✓ Organizar la bitácora del proyecto.

Las decisiones finales fueron revisadas y aplicadas al proyecto de acuerdo con las necesidades de la aplicación.

La IA fue utilizada principalmente como herramienta de aprendizaje y apoyo, no como sustituto de la comprensión del código.

# 19. Estado final del proyecto

## Estado: FINALIZADO

La aplicación cuenta actualmente con:

✓ Generación de paletas
✓ HSL
✓ RGB / HEX
✓ 6, 8 y 9 colores
✓ Bloqueo de colores
✓ Copiar códigos
✓ Indicador "Copiar"
✓ Mensajes al usuario
✓ Guardado de paletas
✓ Historial
✓ Eliminación de paletas
✓ Responsive
✓ Accesibilidad básica
✓ Persistencia mediante localStorage
✓ Documentación

# 20. Próximas mejoras posibles

Aunque el proyecto se encuentra funcional, podrían incorporarse posteriormente:

✓ Más formatos de color.
✓ Exportación de paletas.
✓ Descarga de la paleta como imagen.
✓ Nombres personalizados para las paletas.
✓ Eliminación de todo el historial.
✓ Más opciones de cantidad de colores.
✓ Selector de colores.
✓ Copiar automáticamente HEX además de RGB/HSL.
✓ Mejoras visuales adicionales.

Estas mejoras quedan fuera del alcance de la versión actual.

# 21. Conclusión

El proyecto comenzó como un generador sencillo de colores y fue evolucionando mediante pequeñas mejoras.

El desarrollo se realizó priorizando primero el funcionamiento principal y posteriormente la experiencia del usuario.

La estructura final permite demostrar conocimientos de:

✓ HTML.
✓ CSS.
✓ JavaScript.
✓ DOM.
✓ Eventos.
✓ Arrays.
✓ LocalStorage.
✓ Responsive Design.
✓ Accesibilidad.
✓ Documentación.
✓ Control de versiones mediante Git.
```
