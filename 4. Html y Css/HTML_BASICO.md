# 🌐 HTML Básico

HTML significa:

## HyperText Markup Language

Es el lenguaje que define la **estructura** de una página web.

HTML no:

- Diseña interfaces (CSS)
- Programa lógica (JavaScript)
- Maneja bases de datos

HTML organiza contenido.

Piensa en él como el esqueleto de una web.  
Sin él, tendrías estilos flotando en el vacío y JavaScript intentando manipular la nada. Una metáfora accidentalmente filosófica.

---

# 🧠 ¿Qué hace HTML realmente?

HTML le dice al navegador:

- qué es un título
- qué es un párrafo
- qué es una imagen
- qué es un formulario
- qué es navegación
- qué contenido es importante

---

# 📁 Archivos HTML

Normalmente el archivo principal se llama:

```txt
index.html
```

---

# 🧩 ¿Por qué "index"?

Porque muchos servidores buscan automáticamente un archivo llamado:

```txt
index.html
```

cuando visitas un sitio.

Ejemplo:

```txt
https://midominio.com/
```

El servidor suele responder:

```txt
/index.html
```

---

# 📄 Extensión `.html`

Indica que el archivo contiene HTML.

---

# 🧱 Etiquetas HTML

HTML funciona mediante etiquetas.

---

# 📦 Estructura básica

```html id="tag01"
<etiqueta>Contenido</etiqueta>
```

---

# 🧩 Partes

| Parte         | Función     |
| ------------- | ----------- |
| `<etiqueta>`  | Apertura    |
| `Contenido`   | Información |
| `</etiqueta>` | Cierre      |

---

# 📄 Ejemplo

```html id="tag02"
<p>Hola mundo</p>
```

---

# 🧠 Anidación

Las etiquetas pueden contener otras etiquetas.

```html id="tag03"
<div>
  <p>Texto</p>
</div>
```

---

# ⚠️ Regla importante

Las etiquetas deben cerrarse correctamente.

❌ Incorrecto:

```html id="bad01"
<div>
  <p>Texto</p>
</div>
```

✅ Correcto:

```html id="good01"
<div>
  <p>Texto</p>
</div>
```

Los navegadores intentan corregir errores automáticamente.  
No significa que debas convertir tu HTML en arqueología digital incomprensible.

---

# 🔒 Etiquetas autocerradas

No necesitan cierre tradicional.

---

# 📄 Ejemplos

```html id="self01"
<img />
<br />
<hr />
<input />
<meta />
<link />
```

---

# 🧠 ¿Por qué?

Porque no contienen contenido interno.

---

# 🧬 Estructura básica de una página HTML

```html id="basic01"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Mi página</title>
  </head>

  <body>
    <h1>Hola mundo</h1>
  </body>
</html>
```

---

# 🧩 Explicación completa

---

# `<!DOCTYPE html>`

Define que el documento usa:

## HTML5

Ayuda al navegador a interpretar correctamente el archivo.

---

# `<html>`

Es la raíz del documento.

Todo el contenido HTML vive dentro.

---

# `lang="es"`

Indica idioma principal.

Muy importante para:

- SEO
- Accesibilidad
- Lectores de pantalla

---

# `<head>`

Contiene información NO visible directamente.

---

# 🧠 Incluye normalmente

- título
- metadatos
- CSS
- scripts
- favicon
- SEO

---

# `<meta charset="UTF-8">`

Define codificación de caracteres.

Permite usar:

- tildes
- ñ
- símbolos
- emojis

Sin UTF-8 algunos textos terminan pareciendo mensajes interceptados de una civilización rota.

---

# `<title>`

Título mostrado en:

- pestaña navegador
- buscadores
- favoritos

---

# `<body>`

Contiene todo lo visible.

---

# 🌳 Jerarquía HTML

HTML funciona como árbol.

```txt
html
├── head
│   └── title
└── body
    └── h1
```

---

# 🧠 Relaciones

| Relación | Ejemplo               |
| -------- | --------------------- |
| Padre    | `body`                |
| Hijo     | `h1`                  |
| Hermano  | `section` y `article` |

---

# 🔠 Encabezados

Definen títulos y jerarquías.

---

# 📄 Niveles

```html id="head01"
<h1>Título principal</h1>
<h2>Subtítulo</h2>
<h3>Sección</h3>
```

---

# 🧠 Importancia

| Etiqueta | Uso              |
| -------- | ---------------- |
| `h1`     | Título principal |
| `h2`     | Secciones        |
| `h3-h6`  | Subniveles       |

---

# ⚠️ Buena práctica

Usa solo un:

```html
<h1></h1>
```

por página.

---

# 📄 Párrafos

```html id="p01"
<p>Esto es un párrafo</p>
```

---

# 🧠 Párrafos automáticamente agregan:

- márgenes
- separación
- estructura textual

---

# 📋 Listas

---

# 🔹 Lista no ordenada

```html id="list01"
<ul>
  <li>HTML</li>
  <li>CSS</li>
</ul>
```

Resultado conceptual:

- HTML
- CSS

---

# 🔢 Lista ordenada

```html id="list02"
<ol>
  <li>Paso 1</li>
  <li>Paso 2</li>
</ol>
```

Resultado conceptual:

1. Paso 1
2. Paso 2

---

# 🧠 Diferencia

| Etiqueta | Uso              |
| -------- | ---------------- |
| `ul`     | Orden no importa |
| `ol`     | Orden sí importa |

---

# 🔗 Enlaces

Los enlaces conectan páginas.

HTML literalmente nació para esto.

---

# 📄 Ejemplo

```html id="a01"
<a href="https://google.com">Ir a Google</a>
```

---

# 🧩 Atributos importantes

| Atributo | Función           |
| -------- | ----------------- |
| `href`   | Destino           |
| `target` | Cómo abrir        |
| `title`  | Información extra |

---

# 🌐 Nueva pestaña

```html id="a02"
<a href="https://google.com" target="_blank"> Google </a>
```

---

# ⚠️ Seguridad importante

Cuando uses:

```html
target="_blank"
```

agrega:

```html
rel="noopener noreferrer"
```

Ejemplo:

```html id="a03"
<a href="https://google.com" target="_blank" rel="noopener noreferrer"> Google </a>
```

---

# 🖼️ Imágenes

```html id="img01"
<img src="imagen.png" alt="Descripción" />
```

---

# 🧩 Atributos

| Atributo | Función           |
| -------- | ----------------- |
| `src`    | Ruta imagen       |
| `alt`    | Texto alternativo |

---

# 🧠 ¿Por qué `alt` es tan importante?

Ayuda a:

- accesibilidad
- SEO
- lectores pantalla
- errores carga

---

# ❌ Mal ejemplo

```html id="imgbad"
<img src="foto.png" />
```

---

# ✅ Buen ejemplo

```html id="imggood"
<img src="foto.png" alt="Persona usando laptop" />
```

---

# 🧭 Rutas

Las rutas indican ubicación archivos.

---

# 🌍 Absolutas

```txt
https://youtube.com
```

---

# 📂 Relativas

```txt
./archivo.html
../styles/main.css
/assets/img/logo.png
```

---

# 🧠 Explicación

| Ruta  | Significado      |
| ----- | ---------------- |
| `./`  | Carpeta actual   |
| `../` | Carpeta anterior |
| `/`   | Raíz proyecto    |

---

# 🧾 Formularios

Permiten enviar información.

---

# 📄 Ejemplo básico

```html id="form01"
<form>
  <input type="text" />
</form>
```

---

# 🧩 Inputs comunes

| Tipo       | Función      |
| ---------- | ------------ |
| `text`     | Texto        |
| `password` | Contraseña   |
| `email`    | Correo       |
| `number`   | Números      |
| `date`     | Fecha        |
| `checkbox` | Casilla      |
| `radio`    | Opción única |
| `file`     | Archivos     |

---

# 🧠 Ejemplo completo

```html id="form02"
<form>
  <label for="user">Usuario</label>

  <input id="user" type="text" name="username" placeholder="Saarmyx" required />

  <button type="submit">Enviar</button>
</form>
```

---

# 🧩 Atributos importantes

| Atributo      | Función       |
| ------------- | ------------- |
| `required`    | Obligatorio   |
| `placeholder` | Texto guía    |
| `name`        | Nombre dato   |
| `value`       | Valor inicial |
| `id`          | Identificador |

---

# 🏷️ Labels

Relacionan texto con inputs.

Muy importantes para accesibilidad.

---

# 📄 Ejemplo

```html id="label01"
<label for="email">Correo</label>

<input id="email" type="email" />
```

---

# 🧩 Botones

```html id="btn01"
<button>Click</button>
```

---

# 🧠 Tipos comunes

| Tipo     | Función             |
| -------- | ------------------- |
| `button` | Botón normal        |
| `submit` | Envía formulario    |
| `reset`  | Reinicia formulario |

---

# 🧩 Etiquetas semánticas

HTML5 introdujo etiquetas con significado estructural.

---

# 📄 Principales

```html id="semantic01"
<header></header>
<nav></nav>
<main></main>
<section></section>
<article></article>
<aside></aside>
<footer></footer>
```

---

# 🧠 ¿Por qué importan?

Mejoran:

- SEO
- accesibilidad
- organización
- comprensión código

---

# 🏗️ Ejemplo estructural

```html id="semantic02"
<body>
  <header>Logo y navegación</header>

  <main>
    <section>Contenido principal</section>

    <aside>Barra lateral</aside>
  </main>

  <footer>Información final</footer>
</body>
```

---

# 🧠 Comentarios

```html id="comment01"
<!-- Esto es un comentario -->
```

---

# ⚡ Extras útiles

---

# 🔹 Salto línea

```html id="br01"
<br />
```

---

# 🔹 Línea horizontal

```html id="hr01"
<hr />
```

---

# 🔹 Texto importante

```html id="strong01"
<strong>Importante</strong>
```

---

# 🔹 Énfasis

```html id="em01"
<em>Énfasis</em>
```

---

# 🧠 Diferencia importante

| Etiqueta | Significado           |
| -------- | --------------------- |
| `b`      | Visual                |
| `strong` | Importancia semántica |
| `i`      | Visual                |
| `em`     | Énfasis semántico     |

---

# 📦 Divs y spans

---

# 🔲 `div`

Contenedor en bloque.

```html id="div01"
<div>Contenido</div>
```

---

# 🔹 `span`

Contenedor en línea.

```html id="span01"
<span>Texto</span>
```

---

# ⚠️ Error común

Usar `div` para TODO.

HTML semántico existe por algo.

---

# 🧠 Meta tags importantes

---

# 📱 Responsive

```html id="meta01"
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Fundamental para móviles.

---

# 🔍 SEO básico

```html id="meta02"
<meta name="description" content="Mi sitio web" />
```

---

# 🌐 Integrar CSS

```html id="csslink01"
<link rel="stylesheet" href="styles.css" />
```

---

# ⚡ Integrar JavaScript

```html id="jslink01"
<script src="app.js"></script>
```

---

# 🧠 ¿Dónde poner `<script>`?

Normalmente antes de:

```html
</body>
```

para mejorar carga.

---

# 🧪 DevTools

Herramientas desarrollador navegador.

Acceso común:

```txt
F12
```

---

# 🧩 Permiten

- inspeccionar HTML
- editar CSS
- depurar JS
- analizar rendimiento

---

# 🧠 Buenas prácticas

## ✅ Haz esto

- Usa HTML semántico
- Mantén indentación limpia
- Usa `alt`
- Usa `label`
- Usa nombres claros
- Organiza estructura

---

## ❌ Evita esto

- Usar estilos inline
- Abusar divs
- Saltarte jerarquías
- Hacer HTML ilegible
- Copiar código sin entenderlo

La web ya tiene suficiente código traumático heredado de 2009. No contribuyas al ecosistema del horror.

---

# 🏁 Ejemplo completo moderno

```html id="finalhtml01"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <meta name="description" content="Mi primera página web" />

    <title>Mi sitio</title>

    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <header>
      <h1>Bienvenido</h1>

      <nav>
        <a href="/">Inicio</a>
        <a href="/about.html">Acerca</a>
      </nav>
    </header>

    <main>
      <section>
        <h2>Contenido principal</h2>

        <p>Mi primera web moderna.</p>

        <img src="img/photo.png" alt="Imagen ejemplo" />
      </section>
    </main>

    <footer>
      <p>© 2026</p>
    </footer>

    <script src="app.js"></script>
  </body>
</html>
```

---

# 🚀 Conclusión

HTML es la base absoluta de la web.

Todo framework moderno termina generando HTML:

- React
- Vue
- Angular
- Next.js

Todos.

Por eso aprender HTML correctamente no es opcional.  
Es entender el lenguaje nativo del navegador antes de intentar domesticar capas de abstracción encima.
