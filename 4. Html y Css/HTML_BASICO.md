# 🌐 HTML Básico

HTML (_HyperText Markup Language_) es el lenguaje que define la **estructura** de una página web.
No diseña (eso es CSS) ni programa lógica (eso es JavaScript). Organiza el contenido.

---

## 📁 Archivos HTML

El archivo principal casi siempre se llama:

```text
index.html

index → Es el archivo que los servidores buscan por defecto

.html → Es la extensión del documento
```

---

## 🧱 Etiquetas

Estructura básica:

```html
<etiqueta>Contenido</etiqueta>
```

Apertura → `<etiqueta>`

Contenido → texto u otras etiquetas

Cierre → `</etiqueta>`

## 🔒 Etiquetas autocerradas

No necesitan cierre:

- `<img />`
- `<input />`
- `<br />`

---

## ⚠️ Buenas prácticas

No usar etiquetas obsoletas (como `<font>`, `<center>`)

### Separar:

- `HTML` → estructura
- `CSS` → estilos
- `JS` → lógica

Usar etiquetas semánticas para mejorar SEO y accesibilidad

---

## 🧠 Estructura básica de HTML

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Mi página</title>
  </head>
  <body>
    Contenido visible
  </body>
</html>
```

### Explicación:

- `<!DOCTYPE html>` → Define HTML5
- `<html>` → Raíz del documento
- `<head>` → Información no visible
- `<body>` → Contenido visible

### 🧬 Jerarquía

`HTML` funciona como un árbol:

- `<html>` → padre
- `<head>` y `<body>` → hijos
- `<title>` → hijo de `<head>`

---

## 🔠 Encabezados y párrafos

- `<h1>Título principal</h1>`
- `<p>Esto es un párrafo</p>`

### Niveles:

- `<h1>` → Principal (solo uno por página)
- `<h2>` a `<h6>` → Subniveles

---

## 📋 Listas

### Lista no ordenada:

```html
<ul>
  <li>Elemento</li>
</ul>
```

### Lista ordenada:

```html
<ol>
  <li>Elemento</li>
</ol>
```

---

## 🔗 Enlaces (Anclas)

```html
<a href="https://google.com">Ir a Google</a>
```

### Atributos importantes:

- `href` → destino
- `target="_blank"` → abre en nueva pestaña
- `title` → descripción adicional

### Ejemplo completo:

```html
<a href="https://google.com" target="_blank" title="Buscar en Google"> Google </a>
```

---

## 🖼️ Imágenes

```html
<img src="imagen.png" alt="Descripción de la imagen" />
```

- `src` → ruta
- `alt` → accesibilidad y SEO

---

## 🧭 Rutas

### Absolutas

- `https://youtube.com`

### Relativas

```bash
./archivo.html
../archivo.html
carpeta/archivo.js
```

- `./` → misma carpeta
- `../` → carpeta anterior

---

## 🧾 Formularios

```html
<form>
  <input type="text" name="username" placeholder="Saarmyx" required />
</form>
```

### Tipos de input:

- `text`
- `password`
- `email`
- `number`
- `date`
- `file`
- `checkbox`
- `radio`
- `submit`
- `color`

---

### Atributos importantes:

- `required` → obligatorio
- `name` → nombre del campo
- `placeholder` → texto guía
- `value` → valor por defecto

---

### 🧠 Inputs más completos

```html
<form>
  <label for="user">Usuario:</label>
  <input id="user" type="text" name="username" required />

  <label for="pass">Contraseña:</label>
  <input id="pass" type="password" name="password" required />

  <input type="submit" value="Enviar" />
</form>
```

---

## 🧩 Etiquetas semánticas (MUY importantes)

Ayudan al SEO y a la estructura:

- `<header></header>`
- `<nav></nav>`
- `<main></main>`
- `<section></section>`
- `<article></article>`
- `<aside></aside>`
- `<footer></footer>`

---

## 🧠 Comentarios

```html
<!-- Esto es un comentario -->
```

---

## ⚡ Extras útiles

- Saltos de línea
  - `<br />`

- Línea horizontal
  - `<hr />`

---

## 🧠 Buenas prácticas clave

- Usa solo un `<h1>` por página
- Siempre incluye alt en imágenes
- Usa etiquetas semánticas
- Mantén código limpio y ordenado
- Evita estilos en HTML `(style="")`
- Nombres claros en archivos y variables

---

## 🧩 Ejemplo completo

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Mi primera web</title>
  </head>
  <body>
    <header>
      <h1>Bienvenido</h1>
    </header>

    <main>
      <p>Esta es mi primera página web</p>

      <a href="https://google.com" target="_blank">Buscar</a>

      <img src="imagen.png" alt="Imagen de ejemplo" />
    </main>

    <footer>
      <p>© 2026</p>
    </footer>
  </body>
</html>
```
