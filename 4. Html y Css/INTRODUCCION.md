Se entiende la idea… pero está en modo “resumen de cerebro a las 2 a.m.”. Te lo ordeno, lo explico mejor y le añado lo que realmente necesitas para no quedarte corto cuando avances.

---

# 🌐 Entendiendo la Web

La web existe con un objetivo simple:
hacer que la información sea **accesible desde cualquier lugar del mundo**.

Para lograrlo se creó la **World Wide Web (WWW)**, un sistema que conecta documentos a través de internet.

---

## 🖥️ ¿Dónde vive una página web?

Las páginas no están “en el aire”.
Están almacenadas en **servidores** (computadoras potentes que están encendidas 24/7).

Funciones de un servidor:

- Almacenar archivos (HTML, CSS, JS, imágenes, etc.)
- Procesar solicitudes
- Enviar respuestas a los usuarios

---

## 🔁 Cómo funciona la web (modelo básico)

Todo funciona bajo un ciclo muy simple:

```text
Cliente (navegador) → Solicitud (Request) → Servidor → Respuesta (Response)
```

### Ejemplo:

1. Escribes una URL en el navegador
2. El navegador envía una solicitud al servidor
3. El servidor responde con archivos
4. El navegador interpreta y muestra la página

---

## 🌍 Cliente vs Servidor

### 🧑‍💻 Cliente

Es tu dispositivo + navegador

#### Ejemplos:

- Chrome
- Firefox
- Edge

#### 🖥️ Servidor

Es quien entrega los datos

---

## 📡 Protocolos (cómo se comunican)

El más importante:

- `HTTP / HTTPS`
- `HTTPS` = `HTTP` + seguridad (cifrado)

Siempre que puedas, usa `HTTPS`.

---

## 📁 Tipos de archivos y programas

Cada archivo necesita un programa que lo interprete:

### Archivo = Programa que lo abre

- `imagen.png`= Visor de imágenes
- `texto.txt` = Editor de texto
- `pagina.html`= Navegador web

---

## 🧱 Entendiendo HTML, CSS y Markdown

### 🌐 HTML

HTML (HyperText Markup Language)

#### ¿Qué hace?

Define la estructura de la página web.

```html
<h1>Título</h1>
<p>Contenido</p>
```

---

### 🎨 CSS

CSS (Cascading Style Sheets)

#### ¿Qué hace?

Define el diseño visual:

- Colores
- Tamaños
- Espaciado
- Layout

```css
p {
  color: blue;
  font-size: 16px;
}
```

---

### 🧾 Markdown

Lenguaje de marcado ligero.

#### ¿Para qué sirve?

- Documentación
- README
- Notas

No se usa para crear páginas web completas, pero sí para escribir contenido rápido.

---

## 🧠 Cómo trabajan juntos

- **HTML** → estructura
- **CSS** → apariencia
- **JavaScript** → comportamiento

(**JavaScript.** No es opcional si quieres hacer algo serio.)

---

## ⚙️ Editor de código (IDE)

Un editor de código es la herramienta donde escribes todo esto.

### El más usado:

- [Visual Studio Code](https://code.visualstudio.com/)

### Ventajas:

- Extensible
- Ligero
- Soporta múltiples lenguajes
- Integración con **Git**

### 🔗 Recurso relacionado

Ver guía de [VSCode](/2.%20VSCode/VSCODE.md)

---

## 🧠 Conceptos clave que no deberías ignorar

### 🌍 Dominio

Es el nombre de tu web:

**Ejemplo:**

- `https://code.visualstudio.com/`
- `https://youtube.com/`
- `https://google.com/`

---

### 🧭 Hosting

Es el servicio donde se almacenan tus archivos.

---

### 🧠 DNS (Domain Name System)

Traduce nombres de dominio a direcciones **IP**:

`google.com` `→` 142.250.190.78

---

## ⚡ Frontend vs Backend

### Frontend

Lo que el usuario ve:

- HTML
- CSS
- JavaScript

### Backend

Lo que no ves:

- Servidor
- Base de datos
- Lógica

---

## 🧠 Resumen mental rápido

```

Usuario → Navegador → Internet → Servidor → Respuesta → Pantalla

```

---

## 🧩 Buenas prácticas

- Entiende el flujo cliente-servidor (no es opcional)
- Aprende HTTP básico
- Usa HTTPS siempre
- No confundas HTML con programación
- Piensa en estructura antes que diseño
