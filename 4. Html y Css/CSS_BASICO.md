# 🎨 CSS Básico

CSS (_Cascading Style Sheets_) es el lenguaje que usamos para dar **estilo y diseño** a los elementos HTML.

HTML estructura → CSS diseña

---

## 🔗 Cómo integrar CSS

### 1. ❌ Estilos en línea (NO recomendado)

```html
<p style="color: red;">Texto rojo</p>
```

Problema: Mezcla HTML con CSS Difícil de mantener Nada escalable

---

### 2. ⚠️ Etiqueta

```css
<style>
  <style > p {
    color: red;
  }
</style>
```

Mejor que [inline](#1--estilos-en-línea-no-recomendado), pero: Sigue mezclando lenguajes

Poco práctico en proyectos grandes

---

### 3. ✅ Archivo externo (RECOMENDADO)

```html
<link rel="stylesheet" href="style.css" />
```

Ventajas: Código limpio Reutilizable Escalable

---

## 🧱 Estructura de CSS

```css
selector {
  propiedad: valor;
}
```

### Ejemplo:

```css
p {
  color: blue;
}
```

---

### 🎯 Selectores

#### 1. Por etiqueta

```css
li {
  color: red;
}
```

---

#### 2. Por clase

HTML:

```html
<li class="ingrediente-faltante">Harina</li>
```

CSS:

```css
.ingrediente-faltante {
  color: red;
}
```

---

#### 3. Por ID HTML:

```html
<li id="ingrediente-secreto">Aceite</li>
```

CSS:

```css
#ingrediente-secreto {
  color: blue;
}
```

---

## 🔠 Propiedades de texto

- `color` → color del texto
- `font-family` → tipografía
- `font-size` → tamaño
- `font-weight` → grosor (100–900)
- `font-style` → italic, normal
- `text-align` → left, center, right, justify
- `text-decoration` → underline, line-through
- `line-height` → espacio entre líneas
- `letter-spacing` → espacio entre letras
- `text-transform` → uppercase, lowercase, capitalize

---

## 🔤 Tipografías externas Google Fonts

HTML:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
```

CSS:

```css
body {
  font-family: 'Inter', sans-serif;
}
```

---

## Tipografía personalizada

```css
@font-face {
  font-family: 'Custom';
  src: url('fonts/custom.woff2') format('woff2');
  font-weight: 400;
}
```

---

## 📦 Box Model

(Modelo de caja) Todo elemento es una caja:

```
Contenido → Padding → Border → Margin Content → contenido Padding → espacio interno Border → borde Margin → espacio externo
```

---

### 📏 Width & Height

```css
div {
  width: 300px;
  height: 100px;
}
```

> Sin altura o contenido, el fondo puede no verse. No es magia, es CSS.

---

### 📐 Unidades relativas

```css
input {
  width: 90%;
} /* Se adapta al contenedor padre. */
```

---

### 📦Padding & Margin

```css
padding: 10px;
margin: 10px;
```

#### Shorthand (sentido del reloj):

```css
padding: top right bottom left;
padding: 10px 20px;
```

---

## ⚠️ Margin Collapse

Los márgenes verticales se fusionan. Se
respeta el mayor valor.

---

## 📏 Box Sizing

```css
box-sizing: border-box;
```

- `content-box` → suma padding y
  border
- `border-box` → todo se ajusta al tamaño definido

> Usa border-box siempre.

---

## 🎨 Colores

- RGB: rgb(255, 0, 0);
- HEX: #ff0000;
- HSL: hsl(0, 100%, 50%);
- Alpha (transparencia): rgba(255, 0, 0, 0.5);

---

## 📏 Unidades de medida

- `px` → fijo % → relativo
- `em` → relativo al padre
- `rem` → relativo al root
- `vh / vw`→ viewport

### Uso recomendado:

- Texto → `rem `
- Layout → `%, vh, vw`
- Precisión → `px`

---

## 🖼️ Fondos

- `background: red;`
- `background-image: url("img.jpg");`
- `background-size: cover;`
- `background-position: center;`
- `background-repeat: no-repeat;`

---

## 🎨 Gradientes

`background: linear-gradient(to right, red, blue);`

### Otros:

- `radial-gradient`
- `conic-gradient`

--- 🌫️
Sombras box-shadow: 0 0 10px rgba(0,0,0,0.5); text-shadow: 1px 1px 2px black;

---

## 🔲 Bordes

```css
border: 2px solid black;
border-radius: 10px;
```

---

## 🧠 Mini ejercicio (mejorado)

### HTML

```html
<div class="card">
  <img src="img.webp" alt="Perfil" class="card_img" />
  <h1 class="card_title">Santiago</h1>
  <h2 class="card_subtitle">Genio, millonario, playboy, filántropo</h2>
  <p class="card_content">Texto de ejemplo para la tarjeta.</p>
</div>
```

---

### CSS

```css
* {
  box-sizing: border-box;
}
body {
  background: #fff;
  font-family: sans-serif;
  color: #111;
}
.card {
  width: 300px;
  margin: 20px auto;
  padding: 20px;
  background: #ff9f87;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}
.card_img {
  width: 100px;
  border-radius: 50%;
}
.card_title {
  margin: 10px 0;
  font-size: 22px;
}
.card_subtitle {
  font-size: 12px;
  font-weight: 300;
}
.card_content {
  font-size: 14px;
  text-align: justify;
}
```

---

## 🧠 Buenas prácticas

- Usa clases, evita IDs para estilos
- Separa responsabilidades (HTML vs CSS)
- Usa box-sizing:
- border-box
- Mantén consistencia en unidades
- No sobrecargues con estilos innecesarios
- Nombra clases de forma clara (card_title, no titulo2_final_v3)
