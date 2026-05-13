# 🎯 Selectores Avanzados en CSS

Cuando empiezas con CSS normalmente haces esto:

```css
p {
  color: red;
}
```

Y funciona.

Hasta que tu proyecto crece, aparecen 400 elementos similares y descubres que seleccionar correctamente elementos es básicamente cirugía de precisión visual.

Los selectores avanzados permiten:

- seleccionar elementos específicos
- evitar código innecesario
- crear estilos inteligentes
- reducir clases absurdas

---

# 🧠 ¿Qué es un selector?

Es la forma en la que CSS encuentra elementos HTML.

```css
selector {
  propiedad: valor;
}
```

---

# 🧩 Selectores de atributos

Permiten seleccionar elementos según atributos HTML.

---

# 📄 Ejemplo básico

```css id="attr01"
img[src='img.png'] {
  width: 100%;
}
```

---

# 🧠 ¿Qué hace?

Selecciona:

```html
<img src="img.png" />
```

y SOLO ese elemento.

---

# 🔍 Selector por extensión

```css id="attr02"
img[src$='.png'] {
  width: 100%;
}
```

---

# 🧠 `$=`

Significa:

## "termina en"

---

# 📄 Coincidencias

```txt
foto.png ✅
imagen.png ✅
banner.jpg ❌
```

---

# 🧩 Otros operadores útiles

---

# 🔹 `^=` comienza con

```css id="attr03"
a[href^='https'] {
  color: green;
}
```

---

# 🧠 Coincidencias

```txt
https://google.com ✅
https://youtube.com ✅
http://sitio.com ❌
```

---

# 🔹 `*=` contiene

```css id="attr04"
img[src*='profile'] {
  border-radius: 50%;
}
```

---

# 🧠 Coincidencias

```txt
profile.png ✅
user-profile.jpg ✅
image.png ❌
```

---

# 🌳 Selectores descendientes

Seleccionan elementos dentro de otros.

---

# 📄 Ejemplo

```css id="desc01"
ul li {
  color: blue;
}
```

---

# 🧠 ¿Qué significa?

Selecciona TODOS los:

```html
<li></li>
```

que estén dentro de:

```html
<ul></ul>
```

sin importar profundidad.

---

# 📄 Ejemplo HTML

```html id="deschtml01"
<ul>
  <li>Elemento</li>

  <div>
    <li>Otro elemento</li>
  </div>
</ul>
```

Ambos serán seleccionados.

---

# 🌿 Selector descendiente general

```css id="desc02"
ul strong {
  color: red;
}
```

---

# 🧠 Significado

Cualquier:

```html
<strong></strong>
```

dentro de:

```html
<ul></ul>
```

---

# 👶 Selector hijo directo (`>`)

```css id="child01"
ul > li {
  color: blue;
}
```

---

# 🧠 Diferencia importante

## `ul li`

Selecciona:

- hijos
- nietos
- cualquier descendiente

---

## `ul > li`

Selecciona SOLO hijos directos.

---

# 📄 Ejemplo

```html id="childhtml01"
<ul>
  <li>Directo ✅</li>

  <div>
    <li>No directo ❌</li>
  </div>
</ul>
```

---

# ➕ Selector hermano adyacente (`+`)

Selecciona el elemento inmediatamente después.

---

# 📄 Ejemplo

```css id="adj01"
h1 + p {
  color: gray;
}
```

---

# 🧠 Significado

Selecciona:

- el primer `p`
- inmediatamente después de `h1`

---

# 📄 HTML

```html id="adjhtml01"
<h1>Título</h1>

<p>Este sí</p>

<p>Este no</p>
```

---

# 🌐 Selector hermanos generales (`~`)

Selecciona TODOS los hermanos posteriores.

---

# 📄 Ejemplo

```css id="gen01"
h1 ~ p {
  color: gray;
}
```

---

# 🧠 Resultado

Todos los:

```html
<p></p>
```

después del:

```html
<h1></h1>
```

serán seleccionados.

---

# 📄 HTML

```html id="genhtml01"
<h1>Título</h1>

<p>Uno ✅</p>
<p>Dos ✅</p>
<p>Tres ✅</p>
```

---

# ⛓️ Encadenamiento selectores

```css id="chain01"
h1 + p + p {
  color: blue;
}
```

---

# 🧠 ¿Qué hace?

Selecciona:

- un `p`
- después de otro `p`
- después de un `h1`

---

# 📄 HTML

```html id="chainhtml01"
<h1>Título</h1>

<p>Primero</p>

<p>Segundo ✅</p>
```

---

# 🧬 Herencia en CSS

Algunas propiedades se heredan automáticamente.

---

# 📄 Ejemplo

```css id="inherit01"
body {
  color: blue;
}
```

---

# 🧠 Resultado

Muchos elementos internos heredarán:

```css
color: blue;
```

---

# 📦 Propiedades que suelen heredarse

| Propiedad     | Hereda |
| ------------- | ------ |
| `color`       | ✅     |
| `font-family` | ✅     |
| `font-size`   | ✅     |
| `background`  | ❌     |
| `margin`      | ❌     |
| `padding`     | ❌     |

---

# 🔹 `inherit`

Fuerza herencia.

```css id="inherit02"
h1 {
  color: inherit;
}
```

---

# 🧠 Significado

Usa valor padre.

---

# 🔹 `initial`

Restaura valor defecto navegador.

```css id="inherit03"
h1 {
  color: initial;
}
```

---

# 🔹 `unset`

Combinación inteligente:

- hereda si puede
- si no, usa initial

```css id="inherit04"
h1 {
  color: unset;
}
```

---

# 🔹 `revert`

Revierte comportamiento a estilos anteriores.

```css id="inherit05"
h1 {
  color: revert;
}
```

---

# ⚠️ Importante

`revert` no significa:

```txt
"usar color usuario"
```

Más exactamente:

## vuelve al origen anterior de cascada.

---

# 🌊 Cascada en CSS

CSS significa literalmente:

# Cascading Style Sheets

La cascada decide:

- qué regla gana
- cuál se aplica
- qué estilo sobrescribe otro

---

# 📄 Ejemplo

```css id="cascade01"
p {
  color: red;
}

p {
  color: blue;
}
```

---

# 🧠 Resultado

```css
color: blue;
```

Porque fue declarada después.

---

# ⚖️ Especificidad

Cuando varias reglas compiten, CSS calcula prioridad.

---

# 🧠 Sistema simplificado

```txt
inline > id > clase > etiqueta
```

---

# 📊 Valores aproximados

| Selector | Valor |
| -------- | ----- |
| Inline   | 1000  |
| ID       | 100   |
| Clase    | 10    |
| Etiqueta | 1     |

---

# 📄 Ejemplos

---

# 🔹 Etiqueta

```css id="spec01"
h1 {
  color: white;
}
```

Especificidad:

```txt
0,0,1
```

---

# 🔹 Clase

```css id="spec02"
.titulo {
  color: white;
}
```

Especificidad:

```txt
0,1,0
```

---

# 🔹 ID

```css id="spec03"
#titulo {
  color: white;
}
```

Especificidad:

```txt
1,0,0
```

---

# ⚠️ Resultado importante

Si existen TODOS:

```css
h1 {
}
.titulo {
}
#titulo {
}
```

gana:

```css
#titulo
```

---

# 🧠 Inline Styles

Mayor prioridad normal.

```html id="inline01"
<h1 style="color:red;"></h1>
```

---

# ☠️ `!important`

Fuerza prioridad extrema.

```css id="important01"
p {
  color: red !important;
}
```

---

# ⚠️ Problema

Rompe cascada natural.

---

# 🧠 Úsalo SOLO cuando:

- debas sobrescribir librerías
- exista caso excepcional
- no haya alternativa limpia

---

# ❌ Mala práctica

```css
* {
  color: red !important;
}
```

Eso no es CSS. Es una declaración de guerra al mantenimiento futuro.

---

# 🧩 Orden real cascada

Simplificado:

```txt
1. Estilos navegador
2. Estilos usuario
3. CSS autor
4. Inline styles
5. !important
```

---

# 🎯 Pseudoclases

Seleccionan estados especiales.

---

# 📄 Hover

```css id="pseudo01"
button:hover {
  background: black;
}
```

---

# 📄 Focus

```css id="pseudo02"
input:focus {
  border: 2px solid blue;
}
```

---

# 📄 First Child

```css id="pseudo03"
li:first-child {
  color: red;
}
```

---

# 📄 Last Child

```css id="pseudo04"
li:last-child {
  color: blue;
}
```

---

# 📄 nth-child

```css id="pseudo05"
li:nth-child(2) {
  color: green;
}
```

---

# 🧠 Potencia real

```css
li:nth-child(even)
li:nth-child(odd)
li:nth-child(3n)
```

---

# 🧩 Pseudoelementos

Permiten estilizar partes virtuales.

---

# 📄 Before

```css id="pseudoel01"
p::before {
  content: '🔥 ';
}
```

---

# 📄 After

```css id="pseudoel02"
p::after {
  content: ' ✔';
}
```

---

# 📄 Selection

```css id="pseudoel03"
::selection {
  background: black;
  color: white;
}
```

---

# 📄 Placeholder

```css id="pseudoel04"
input::placeholder {
  color: gray;
}
```

---

# 🧠 DevTools y debugging

Cuando CSS falla:

# usa DevTools.

```txt
F12
```

---

# 🧩 Permite

- ver especificidad
- detectar reglas sobrescritas
- analizar herencia
- probar cambios en vivo

---

# 🧠 Buenas prácticas

## ✅ Haz esto

- usa clases
- mantén especificidad baja
- evita IDs para diseño
- organiza selectores
- aprovecha herencia

---

## ❌ Evita esto

- selectores absurdamente largos
- abusar `!important`
- CSS imposible mantener
- especificidad nuclear

---

# ❌ Ejemplo horrible

```css
body div main section article ul li a span {
  color: red;
}
```

Si necesitas invocar medio árbol DOM para seleccionar algo, el problema probablemente no es el selector. Es la estructura.

---

# 🏁 Conclusión

Los selectores avanzados son lo que convierte CSS en una herramienta precisa.

Entender:

- herencia
- cascada
- especificidad
- relaciones DOM

es la diferencia entre:

```txt
"CSS que funciona"
```

y

```txt
"CSS que puedes mantener sin perder la cordura"
```
