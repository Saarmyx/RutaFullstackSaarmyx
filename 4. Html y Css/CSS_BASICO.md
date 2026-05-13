# 🎨 CSS Básico

CSS significa:

## Cascading Style Sheets

Es el lenguaje encargado de:

- diseño
- apariencia
- layout
- animaciones
- responsive design

HTML estructura.  
CSS convierte esa estructura en algo visualmente usable.

Sin CSS, internet se vería como documentos legales abandonados en una terminal gubernamental de 1998.

---

# 🧠 ¿Qué hace CSS?

CSS controla:

- colores
- tamaños
- márgenes
- tipografías
- posiciones
- sombras
- animaciones
- responsive design

---

# ⚙️ Cómo funciona CSS

CSS selecciona elementos HTML y les aplica estilos.

---

# 📄 Sintaxis básica

```css id="csssyntax01"
selector {
  propiedad: valor;
}
```

---

# 📦 Ejemplo

```css id="csssyntax02"
p {
  color: blue;
}
```

---

# 🧩 Partes

| Parte   | Función   |
| ------- | --------- |
| `p`     | Selector  |
| `color` | Propiedad |
| `blue`  | Valor     |

---

# 🔗 Cómo integrar CSS

---

# ❌ 1. Inline CSS

CSS directamente dentro del HTML.

```html id="inline01"
<p style="color: red;">Texto rojo</p>
```

---

# ⚠️ Problemas

- Mezcla responsabilidades
- Difícil mantenimiento
- Nada escalable
- Código desordenado

---

# ⚠️ 2. Etiqueta `<style>`

CSS dentro del HTML.

```html id="style01"
<style>
  p {
    color: red;
  }
</style>
```

---

# 🧠 Cuándo usarlo

Útil para:

- pruebas rápidas
- demos pequeñas

No ideal para proyectos reales.

---

# ✅ 3. Archivo externo

Método recomendado.

```html id="link01"
<link rel="stylesheet" href="style.css" />
```

---

# 🧠 Ventajas

- Código limpio
- Reutilizable
- Escalable
- Mejor mantenimiento

---

# 🎯 Selectores

Los selectores indican QUÉ elemento estilizar.

---

# 🔹 Selector por etiqueta

```css id="sel01"
p {
  color: blue;
}
```

Aplica a TODOS los:

```html
<p></p>
```

---

# 🔹 Selector por clase

HTML:

```html id="classhtml01"
<p class="texto">Hola</p>
```

CSS:

```css id="classcss01"
.texto {
  color: red;
}
```

---

# 🧠 El punto (`.`)

Indica clase.

```css
.clase
```

---

# 🔹 Selector por ID

HTML:

```html id="idhtml01"
<p id="titulo">Hola</p>
```

CSS:

```css id="idcss01"
#titulo {
  color: blue;
}
```

---

# 🧠 El símbolo (`#`)

Indica ID.

```css
#id
```

---

# ⚠️ Buena práctica

Usa:

- clases para estilos
- IDs para JavaScript o anclas

No abuses IDs en CSS.

---

# 🔹 Selector universal

Selecciona TODO.

```css id="universal01"
* {
  margin: 0;
}
```

---

# 🔹 Selectores múltiples

```css id="multi01"
h1,
h2,
p {
  color: black;
}
```

---

# 🔹 Selectores descendientes

```css id="desc01"
div p {
  color: red;
}
```

Selecciona:

- `p`
- dentro de `div`

---

# 🔹 Selector hijo directo

```css id="child01"
div > p {
  color: blue;
}
```

---

# 🧠 Diferencia importante

| Selector  | Función                |
| --------- | ---------------------- |
| `div p`   | Cualquier descendiente |
| `div > p` | Solo hijo directo      |

---

# 🔠 Propiedades de texto

---

# 🎨 Color

```css id="text01"
color: red;
```

---

# 🔤 Fuente

```css id="text02"
font-family: sans-serif;
```

---

# 📏 Tamaño

```css id="text03"
font-size: 16px;
```

---

# ⚖️ Grosor

```css id="text04"
font-weight: 700;
```

---

# ✍️ Estilo

```css id="text05"
font-style: italic;
```

---

# 📍 Alineación

```css id="text06"
text-align: center;
```

---

# 🔡 Transformación

```css id="text07"
text-transform: uppercase;
```

---

# 📏 Espaciado letras

```css id="text08"
letter-spacing: 2px;
```

---

# 📏 Altura línea

```css id="text09"
line-height: 1.5;
```

---

# 🔤 Tipografías externas

Muy común usar:

- Google Fonts

---

# 🌐 Ejemplo

HTML:

```html id="font01"
<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
```

CSS:

```css id="font02"
body {
  font-family: 'Inter', sans-serif;
}
```

---

# 🧠 Fallback fonts

```css
font-family: 'Inter', sans-serif;
```

Si falla:

- Inter
- usa sans-serif

Porque internet eventualmente falla. Siempre.

---

# 🧩 `@font-face`

Permite cargar fuentes personalizadas.

```css id="font03"
@font-face {
  font-family: 'Custom';
  src: url('fonts/custom.woff2');
}
```

---

# 📦 Box Model

TODO elemento HTML es una caja.

---

# 🧠 Capas

```txt
Margin
Border
Padding
Content
```

---

# 📄 Visualización mental

```txt
┌───────────────┐
│    Margin     │
│ ┌───────────┐ │
│ │  Border   │ │
│ │ ┌───────┐ │ │
│ │ │Padding│ │ │
│ │ │Content│ │ │
│ │ └───────┘ │ │
│ └───────────┘ │
└───────────────┘
```

---

# 📏 Width & Height

```css id="size01"
div {
  width: 300px;
  height: 100px;
}
```

---

# ⚠️ Importante

Muchos elementos crecen automáticamente según contenido.

---

# 📦 Padding

Espacio interno.

```css id="padding01"
padding: 20px;
```

---

# 📦 Margin

Espacio externo.

```css id="margin01"
margin: 20px;
```

---

# 🧠 Shorthand

```css id="short01"
margin: top right bottom left;
```

---

# 📄 Ejemplo

```css id="short02"
margin: 10px 20px 30px 40px;
```

---

# 🧠 Orden reloj

```txt
Top
Right
Bottom
Left
```

---

# ⚠️ Margin Collapse

Los márgenes verticales pueden fusionarse.

El navegador toma el mayor valor.

---

# 📏 Border

```css id="border01"
border: 2px solid black;
```

---

# 🧩 Partes

| Parte   | Función |
| ------- | ------- |
| `2px`   | Grosor  |
| `solid` | Tipo    |
| `black` | Color   |

---

# 🔲 Border Radius

```css id="radius01"
border-radius: 10px;
```

---

# 🧠 Valores comunes

| Valor  | Resultado  |
| ------ | ---------- |
| `0`    | Recto      |
| `10px` | Redondeado |
| `50%`  | Círculo    |

---

# 📏 Box Sizing

Muy importante.

```css id="boxsize01"
box-sizing: border-box;
```

---

# 🧠 Diferencia

## `content-box`

Suma:

- padding
- border

al tamaño.

---

## `border-box`

Incluye todo dentro tamaño definido.

---

# ✅ Recomendación universal

```css id="boxsize02"
* {
  box-sizing: border-box;
}
```

---

# 🎨 Colores

---

# 🔴 RGB

```css id="color01"
color: rgb(255, 0, 0);
```

---

# 🟥 HEX

```css id="color02"
color: #ff0000;
```

---

# 🌈 HSL

```css id="color03"
color: hsl(0, 100%, 50%);
```

---

# 🌫️ Transparencia

```css id="color04"
color: rgba(255, 0, 0, 0.5);
```

---

# 📏 Unidades

---

# 🔹 px

Valor fijo.

```css
font-size: 16px;
```

---

# 🔹 %

Relativo al contenedor.

---

# 🔹 em

Relativo al padre.

---

# 🔹 rem

Relativo al elemento raíz (`html`).

---

# 🔹 vh / vw

Relativos al viewport.

---

# 🧠 Recomendaciones modernas

| Uso       | Unidad          |
| --------- | --------------- |
| Texto     | `rem`           |
| Layout    | `%`, `vw`, `vh` |
| Precisión | `px`            |

---

# 🖼️ Fondos

---

# 🎨 Color fondo

```css id="bg01"
background: red;
```

---

# 🖼️ Imagen fondo

```css id="bg02"
background-image: url('img.jpg');
```

---

# 📏 Ajuste

```css id="bg03"
background-size: cover;
```

---

# 📍 Posición

```css id="bg04"
background-position: center;
```

---

# 🚫 Repetición

```css id="bg05"
background-repeat: no-repeat;
```

---

# 🎨 Gradientes

---

# 🌈 Linear Gradient

```css id="grad01"
background: linear-gradient(to right, red, blue);
```

---

# 🌌 Radial Gradient

```css id="grad02"
background: radial-gradient(circle, red, blue);
```

---

# 🌪️ Conic Gradient

```css id="grad03"
background: conic-gradient(red, blue);
```

---

# 🌫️ Sombras

---

# 📦 Box Shadow

```css id="shadow01"
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
```

---

# 🔤 Text Shadow

```css id="shadow02"
text-shadow: 1px 1px 2px black;
```

---

# 🧠 Estructura box-shadow

```txt
x y blur color
```

---

# 📐 Display

Define comportamiento del elemento.

---

# 🔹 Block

```css id="display01"
display: block;
```

Ocupa ancho completo.

---

# 🔹 Inline

```css id="display02"
display: inline;
```

No rompe línea.

---

# 🔹 Inline-block

```css id="display03"
display: inline-block;
```

Mezcla ambos.

---

# 🔹 None

```css id="display04"
display: none;
```

Oculta elemento.

---

# ⚡ Flexbox

Sistema moderno layout.

---

# 📄 Activar flex

```css id="flex01"
display: flex;
```

---

# 🧩 Propiedades importantes

---

# 📍 Dirección

```css id="flex02"
flex-direction: row;
```

---

# 📍 Centrado horizontal

```css id="flex03"
justify-content: center;
```

---

# 📍 Centrado vertical

```css id="flex04"
align-items: center;
```

---

# 🧠 Centrado perfecto

```css id="flex05"
display: flex;
justify-content: center;
align-items: center;
```

CSS pasó años convirtiendo centrar elementos en una experiencia espiritual dolorosa hasta que apareció Flexbox.

---

# 🧱 Grid

Sistema avanzado bidimensional.

---

# 📄 Activar grid

```css id="grid01"
display: grid;
```

---

# 📐 Columnas

```css id="grid02"
grid-template-columns: 1fr 1fr 1fr;
```

---

# 📏 Espaciado

```css id="grid03"
gap: 20px;
```

---

# 🎞️ Transiciones

Permiten animaciones suaves.

```css id="trans01"
transition: all 0.3s ease;
```

---

# 🖱️ Hover

```css id="hover01"
button:hover {
  background: black;
}
```

---

# 🎬 Animaciones

---

# 📄 Keyframes

```css id="anim01"
@keyframes aparecer {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
```

---

# ▶️ Aplicar animación

```css id="anim02"
div {
  animation: aparecer 1s ease;
}
```

---

# 📱 Responsive Design

Adaptar diseño distintas pantallas.

---

# 📄 Media Query

```css id="media01"
@media (max-width: 768px) {
  body {
    background: black;
  }
}
```

---

# 🧠 Mobile First

Diseña primero para móviles.

Luego escalas.

---

# 🧩 Pseudoclases

Estados especiales.

---

# 📄 Ejemplos

```css id="pseudo01"
a:hover {
}
input:focus {
}
li:first-child {
}
```

---

# 🧩 Pseudoelementos

Partes virtuales.

```css id="pseudo02"
p::before {
}
p::after {
}
```

---

# 🧼 Reset CSS

Los navegadores tienen estilos por defecto.

Muchos desarrolladores usan resets.

---

# 📄 Ejemplo básico

```css id="reset01"
* {
  margin: 0;
  padding: 0;
}
```

---

# 🧠 DevTools

Herramientas navegador.

Acceso:

```txt
F12
```

---

# 🧩 Permiten

- inspeccionar CSS
- probar cambios
- medir tamaños
- analizar layouts

---

# 🧠 Mini proyecto completo

---

# 📄 HTML

```html id="projecthtml01"
<div class="card">
  <img src="img.webp" alt="Perfil" class="card_img" />

  <h1 class="card_title">Santiago</h1>

  <h2 class="card_subtitle">Genio, millonario, playboy, filántropo</h2>

  <p class="card_content">Texto ejemplo tarjeta.</p>
</div>
```

---

# 🎨 CSS

```css id="projectcss01"
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: sans-serif;
  background: #f5f5f5;
}

.card {
  width: 300px;
  margin: 40px auto;
  padding: 20px;

  background: white;

  border-radius: 20px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  text-align: center;
}

.card_img {
  width: 100px;
  height: 100px;

  border-radius: 50%;

  object-fit: cover;
}

.card_title {
  margin: 10px 0;
}

.card_subtitle {
  color: gray;
  font-size: 14px;
}

.card_content {
  line-height: 1.5;
}
```

---

# 🧠 Buenas prácticas

## ✅ Haz esto

- Usa clases
- Usa `border-box`
- Usa Flexbox/Grid
- Mantén consistencia
- Usa nombres claros
- Organiza archivos

---

## ❌ Evita esto

- Styles inline
- IDs para diseño
- CSS gigante desordenado
- Valores mágicos absurdos
- `!important` en todo

`!important` debería sentirse como romper vidrio de emergencia. No como decoración cotidiana.

---

# 🏁 Conclusión

CSS transforma documentos HTML en interfaces modernas.

Dominar CSS no es memorizar propiedades.  
Es entender:

- layout
- flujo visual
- jerarquía
- responsive design
- experiencia usuario

Porque al final, escribir CSS es básicamente negociar visualmente con un navegador hiperliteral que interpreta todo exactamente como le dijiste… incluso cuando claramente no era lo que querías decir.
