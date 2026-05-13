# 🌐 HTML Intermedio

Cuando entiendes HTML básico, dejas de “poner etiquetas” y empiezas a construir documentos web reales.

Aquí es donde HTML deja de ser:

```txt
"h1 + p + img"
```

y empieza a convertirse en:

- estructura profesional
- accesibilidad
- SEO
- formularios reales
- multimedia
- semántica
- optimización

Porque sí, eventualmente descubrirás que hacer una web no era solo centrar un div durante tres horas.

---

# 🧠 Comentarios HTML

Los comentarios son fragmentos que:

- el navegador ignora
- el usuario no ve
- sirven para desarrolladores

---

# 📄 Sintaxis

```html id="comment01"
<!-- Esto es un comentario -->
```

---

# 🧠 Usos comunes

- documentar código
- separar secciones
- dejar notas
- desactivar temporalmente elementos

---

# ⚠️ Mala práctica

No abuses comentarios inútiles.

❌ Horrible:

```html
<!-- Este es un párrafo -->
<p>Hola</p>
```

Si necesitas explicar cada línea trivial, probablemente el código ya está gritando por ayuda estructural.

---

# 🧩 Meta Tags

Las meta tags son etiquetas especiales dentro de:

```html
<head></head>
```

El usuario normalmente no las ve directamente.

Pero:

- navegadores
- buscadores
- redes sociales
- sistemas accesibilidad

sí las leen.

---

# 📄 Ejemplo básico

```html id="meta01"
<head>
  <meta charset="UTF-8" />

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
```

---

# 🌍 `lang`

Define idioma principal sitio.

```html id="lang01"
<html lang="es"></html>
```

---

# 🧠 Importancia

Ayuda a:

- SEO
- lectores pantalla
- traducción automática
- accesibilidad

---

# 🔤 `charset="UTF-8"`

```html id="utf01"
<meta charset="UTF-8" />
```

Permite usar correctamente:

- ñ
- tildes
- emojis
- caracteres especiales

Sin UTF-8 algunos textos parecen mensajes corruptos enviados desde otra dimensión digital.

---

# 📱 Meta Viewport

Fundamental responsive design.

```html id="viewport01"
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

---

# 🧠 ¿Qué hace?

Hace que la web:

- se adapte móviles
- use ancho dispositivo
- no aparezca miniatura absurda en celulares

---

# 🔍 Meta Description

Describe la página.

```html id="description01"
<meta name="description" content="Curso de HTML intermedio" />
```

---

# 🧠 Importancia

Puede aparecer en Google.

Afecta:

- SEO
- clics
- visibilidad

---

# 🏷️ Meta Keywords

```html id="keywords01"
<meta name="keywords" content="HTML, CSS, web" />
```

---

# ⚠️ Importante

Actualmente Google casi no usa keywords.

Históricamente la gente abusó tanto del sistema que terminó siendo inútil. Un clásico humano.

---

# 👤 Meta Author

```html id="author01"
<meta name="author" content="Santiago" />
```

Define autor documento.

---

# 🤖 Meta Robots

Controla indexación buscadores.

```html id="robots01"
<meta name="robots" content="index, follow" />
```

---

# 🧩 Valores comunes

| Valor      | Función           |
| ---------- | ----------------- |
| `index`    | Permite indexar   |
| `noindex`  | No indexar        |
| `follow`   | Seguir enlaces    |
| `nofollow` | No seguir enlaces |

---

# 🖼️ Open Graph (OG)

Controla cómo se comparte la web.

Muy usado en:

- WhatsApp
- Discord
- Facebook
- LinkedIn

---

# 📄 Ejemplo

```html id="og01"
<meta property="og:title" content="Mi web" />

<meta property="og:description" content="Curso moderno HTML" />

<meta property="og:image" content="img/banner.png" />

<meta property="og:url" content="https://miweb.com" />
```

---

# 🧠 Resultado

Define:

- título compartido
- imagen previa
- descripción
- enlace

---

# 🎨 Favicon

Icono pestaña navegador.

---

# 📄 Ejemplo

```html id="favicon01"
<link rel="icon" href="favicon.png" type="image/png" />
```

---

# 🧠 Buena práctica

Usa:

- `.png`
- `.ico`
- tamaños pequeños

---

# ✍️ Textarea

Permite escribir texto largo.

---

# 📄 Ejemplo

```html id="textarea01"
<textarea></textarea>
```

---

# 🧩 Uso típico

- comentarios
- mensajes
- descripciones
- formularios largos

---

# 📏 Rows y Cols

```html id="textarea02"
<textarea rows="5" cols="30"></textarea>
```

---

# 🧠 Significado

| Atributo | Función            |
| -------- | ------------------ |
| `rows`   | Altura visible     |
| `cols`   | Anchura caracteres |

---

# 🔒 Readonly

Solo lectura.

```html id="readonly01"
<textarea readonly>
Texto bloqueado
</textarea>
```

---

# ⚠️ Diferencia importante

## `readonly`

- se puede seleccionar
- sí se envía formulario

---

## `disabled`

- deshabilitado
- NO se envía

```html id="disabled01"
<textarea disabled>
Bloqueado
</textarea>
```

---

# 📏 Resize

Controla redimensionamiento.

```css id="resize01"
textarea {
  resize: none;
}
```

---

# 🧠 Valores comunes

| Valor        | Función         |
| ------------ | --------------- |
| `none`       | Desactiva       |
| `vertical`   | Solo vertical   |
| `horizontal` | Solo horizontal |

---

# ⚡ `maxlength` y `minlength`

```html id="length01"
<textarea minlength="10" maxlength="100"></textarea>
```

---

# 🏷️ Labels

Relacionan texto con inputs.

---

# ✅ Forma correcta

```html id="label01"
<label for="user"> Usuario </label>

<input id="user" type="text" />
```

---

# 🧠 Beneficios

- accesibilidad
- mejor UX
- clic más cómodo

---

# 🧩 Alternativa válida

```html id="label02"
<label>
  Usuario
  <input type="text" />
</label>
```

---

# 📋 Selects

Listas desplegables.

---

# 📄 Ejemplo

```html id="select01"
<select name="user-type">
  <option value="admin">Admin</option>

  <option value="user">Usuario</option>
</select>
```

---

# 🧠 Importante

## `value`

Es lo que realmente se envía.

---

# 🔍 Datalist

Input con sugerencias.

---

# 📄 Ejemplo

```html id="datalist01"
<input list="users" />

<datalist id="users">
  <option value="Santiago"></option>

  <option value="Rosie"></option>
</datalist>
```

---

# 🧠 Diferencia

| Elemento   | Función                |
| ---------- | ---------------------- |
| `select`   | Opciones cerradas      |
| `datalist` | Usuario puede escribir |

---

# 🧱 Fieldset y Legend

Agrupan formularios.

---

# 📄 Ejemplo

```html id="fieldset01"
<fieldset>
  <legend>Información usuario</legend>

  <input type="email" />
</fieldset>
```

---

# 🧠 Beneficios

- organización
- accesibilidad
- agrupación lógica

---

# 📂 Details y Summary

Dropdown nativo HTML.

---

# 📄 Ejemplo

```html id="details01"
<details>
  <summary>Ver más</summary>

  <p>Contenido oculto</p>
</details>
```

---

# 🧠 Ventajas

- accesible
- sin JavaScript
- nativo navegador

---

# 🎨 Estado abierto

```css id="detailscss01"
details[open] {
  background: #eee;
}
```

---

# 🔗 Enlaces avanzados

---

# 📍 Anclas internas

Permiten navegar secciones.

---

# 📄 Ejemplo correcto

```html id="anchor01"
<a href="#contacto"> Ir contacto </a>

<section id="contacto">Contacto</section>
```

---

# ⚠️ Importante

Debe incluir:

```txt
#
```

en `href`.

---

# 📥 Descargar archivos

```html id="download01"
<a href="archivo.pdf" download> Descargar PDF </a>
```

---

# 📧 Enviar email

```html id="mailto01"
<a href="mailto:correo@gmail.com"> Enviar correo </a>
```

---

# 📞 Llamadas telefónicas

```html id="tel01"
<a href="tel:+573001234567"> Llamar </a>
```

---

# 🔒 Seguridad target blank

---

# ❌ Incorrecto

```html
<a href="https://google.com" target="_blank"></a>
```

---

# ✅ Correcto

```html id="security01"
<a href="https://google.com" target="_blank" rel="noopener noreferrer"></a>
```

---

# 🧠 ¿Por qué?

Evita:

- acceso peligroso ventana original
- phishing
- manipulación navegador

---

# 📊 Tablas

Organizan información filas/columnas.

---

# 🧱 Estructura

```html id="table01"
<table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Edad</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Santiago</td>
      <td>18</td>
    </tr>
  </tbody>
</table>
```

---

# 🧩 Etiquetas importantes

| Etiqueta | Función          |
| -------- | ---------------- |
| `table`  | Tabla            |
| `tr`     | Fila             |
| `th`     | Encabezado       |
| `td`     | Celda            |
| `thead`  | Encabezado tabla |
| `tbody`  | Cuerpo           |
| `tfoot`  | Pie tabla        |

---

# 🎥 Video

---

# 📄 Ejemplo

```html id="video01"
<video controls autoplay muted loop src="video.mp4">Tu navegador no soporta video</video>
```

---

# 🧩 Atributos

| Atributo   | Función                 |
| ---------- | ----------------------- |
| `controls` | Controles               |
| `autoplay` | Reproducción automática |
| `muted`    | Silenciado              |
| `loop`     | Repetición              |

---

# ⚠️ Importante

Muchos navegadores SOLO permiten autoplay si el video está muted.

---

# 🔊 Audio

```html id="audio01"
<audio controls loop src="audio.mp3">Tu navegador no soporta audio</audio>
```

---

# 📝 Subtítulos

```html id="track01"
<track src="subtitulos.vtt" kind="captions" srclang="es" label="Español" default />
```

---

# 🧩 Atributos importantes

| Atributo  | Función          |
| --------- | ---------------- |
| `kind`    | Tipo subtítulo   |
| `srclang` | Idioma           |
| `label`   | Nombre visible   |
| `default` | Activado defecto |

---

# ⚡ Carga diferida (Lazy Loading)

Optimización carga imágenes.

---

# 📄 Ejemplo

```html id="lazy01"
<img src="foto.jpg" loading="lazy" alt="Paisaje" />
```

---

# 🧠 Beneficios

- menos consumo
- carga rápida
- mejor rendimiento

Las páginas modernas intentan no descargar 400 imágenes innecesarias apenas entras. Una idea revolucionaria para algunos sitios, aparentemente.

---

# ☠️ HTML Obsoleto

Etiquetas antiguas que NO debes usar.

---

# ❌ Obsoletas

```html
<font>
  <center>
    <big> <blink></blink></big></center
></font>
```

---

# ✅ Reemplazos modernos

| Obsoleto | Moderno     |
| -------- | ----------- |
| `font`   | CSS         |
| `center` | CSS         |
| `big`    | CSS         |
| `strike` | `del` o CSS |

---

# 🧠 HTML Semántico

Usar etiquetas según propósito.

---

# 📄 Ejemplo

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

# 🧠 Beneficios

- SEO
- accesibilidad
- mejor estructura
- mantenimiento

---

# ♿ Accesibilidad Web

Crear sitios utilizables por TODOS.

Incluyendo personas con:

- discapacidad visual
- motora
- auditiva
- cognitiva

---

# 🧠 Cómo funciona realmente

El navegador construye:

# DOM

```txt
HTML → DOM → Renderizado visual
```

---

# 🧩 Tecnologías accesibilidad

Lectores pantalla interpretan DOM.

No “ven” diseño como humanos.

Por eso:

- semántica importa
- labels importan
- alt importa
- estructura importa

---

# 🧠 Buenas prácticas accesibilidad

## ✅ Haz esto

- Usa `alt`
- Usa `label`
- Usa semántica
- Usa buen contraste
- Usa encabezados ordenados

---

## ❌ Evita esto

- divs para todo
- texto sin contraste
- botones sin texto
- inputs sin label

---

# 🏁 Conclusión

HTML intermedio es donde empiezas a entender que la web no solo “se ve”.

También debe:

- funcionar
- ser accesible
- indexarse
- optimizarse
- mantenerse

Porque construir páginas modernas implica pensar en:

- usuarios
- navegadores
- buscadores
- rendimiento
- accesibilidad

Y tristemente también en Internet Explorer heredado en alguna oficina gubernamental olvidada por el tiempo.
