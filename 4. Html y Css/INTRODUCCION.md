# 🌐 Entendiendo la Web

La web existe para resolver un problema muy específico:

> Compartir información entre computadoras de cualquier parte del mundo.

Parece obvio hoy.  
Pero antes internet era básicamente un caos académico lleno de terminales, protocolos extraños y gente enviándose archivos como si fueran pergaminos digitales.

La **World Wide Web (WWW)** simplificó eso.

---

# 🌍 ¿Qué es la World Wide Web?

La **WWW** es un sistema de documentos y recursos conectados mediante enlaces (_hyperlinks_) y accesibles a través de internet.

Fue creada por :contentReference[oaicite:0]{index=0} en 1989.

---

# 🌐 Internet vs Web

Muchos los confunden.  
No son lo mismo.

| Concepto | Qué es                              |
| -------- | ----------------------------------- |
| Internet | Infraestructura global de redes     |
| Web      | Sistema que funciona sobre internet |

---

## 🧠 Analogía simple

| Elemento | Analogía               |
| -------- | ---------------------- |
| Internet | Carreteras             |
| Web      | Vehículos que circulan |

La web necesita internet para funcionar.  
Internet no necesita la web.

---

# 🖥️ ¿Dónde vive una página web?

Las páginas web no “aparecen mágicamente”.

Sus archivos viven en:

- Servidores
- Centros de datos
- Infraestructura conectada permanentemente

---

# 🧠 ¿Qué es un servidor?

Un servidor es una computadora diseñada para:

- Almacenar datos
- Procesar solicitudes
- Enviar respuestas
- Estar disponible constantemente

---

## 📦 Qué almacena

Un servidor puede guardar:

- HTML
- CSS
- JavaScript
- Imágenes
- Videos
- Bases de datos
- APIs

---

# 🔁 Cómo funciona la web

Todo se basa en comunicación entre:

- Cliente
- Servidor

---

# 🧑‍💻 Cliente

El cliente normalmente es:

- Tu navegador
- Tu celular
- Tu computadora

Ejemplos:

- [Google Chrome](https://www.google.com/chrome/?utm_source=chatgpt.com)
- [Mozilla Firefox](https://www.mozilla.org/firefox/?utm_source=chatgpt.com)
- [Microsoft Edge](https://www.microsoft.com/edge?utm_source=chatgpt.com)

---

# 🖥️ Servidor

El servidor recibe solicitudes y responde.

---

# ⚡ Flujo básico

```text
Cliente → Request → Servidor → Response → Cliente
```

---

# 📡 Ejemplo real

Cuando escribes:

```txt
https://google.com
```

ocurre esto:

1. El navegador busca la IP del dominio
2. Se conecta al servidor
3. Envía una solicitud HTTP
4. El servidor responde
5. El navegador interpreta archivos
6. Se renderiza la página

Todo esto sucede en milisegundos.  
La humanidad construyó una red planetaria ultra compleja para terminar viendo memes y discutir con desconocidos. Ingeniería admirable. Prioridades cuestionables.

---

# 🌍 URL (Uniform Resource Locator)

Una URL es la dirección de un recurso.

Ejemplo:

```txt
https://youtube.com/watch?v=123
```

---

# 🧩 Partes de una URL

```txt
https://youtube.com/watch?v=123
```

| Parte         | Función    |
| ------------- | ---------- |
| `https://`    | Protocolo  |
| `youtube.com` | Dominio    |
| `/watch`      | Ruta       |
| `?v=123`      | Parámetros |

---

# 📡 Protocolos

Los protocolos son reglas de comunicación.

---

# 🌐 HTTP

## HyperText Transfer Protocol

Permite intercambio de información web.

Ejemplo:

```http
GET /index.html HTTP/1.1
```

---

# 🔒 HTTPS

Versión segura de HTTP.

Incluye:

- Cifrado
- Seguridad
- Certificados SSL/TLS

---

## 🧠 Diferencia

| HTTP        | HTTPS          |
| ----------- | -------------- |
| No seguro   | Seguro         |
| Sin cifrado | Datos cifrados |
| Vulnerable  | Protegido      |

---

# 🔐 SSL/TLS

Tecnologías que cifran la información.

Protegen:

- Contraseñas
- Tarjetas
- Datos privados

# ⚡ Ejemplo

```txt
google.com
↓
142.250.190.78
```

---

# 🧱 Hosting

Servicio donde se almacenan archivos web.

---

# 🏢 Tipos de hosting

| Tipo             | Uso                |
| ---------------- | ------------------ |
| Shared Hosting   | Proyectos pequeños |
| VPS              | Más control        |
| Cloud Hosting    | Escalable          |
| Dedicated Server | Máximo rendimiento |

---

# 🌐 Frontend vs Backend

---

# 🎨 Frontend

Es lo que el usuario ve e interactúa.

Incluye:

- Diseño
- Botones
- Formularios
- Animaciones

---

## Tecnologías frontend

- HTML
- CSS
- JavaScript

---

# ⚙️ Backend

Es la lógica que ocurre detrás.

Incluye:

- Bases de datos
- Autenticación
- APIs
- Seguridad
- Procesamiento

---

## Tecnologías backend

- Node.js
- Python
- PHP
- Java
- Go

---

# 🧱 HTML

## HyperText Markup Language

Lenguaje de marcado usado para estructurar páginas.

---

# 🧩 ¿Qué define?

HTML define:

- Títulos
- Párrafos
- Imágenes
- Formularios
- Enlaces

---

# 📄 Ejemplo básico

```html id="htmlbas01"
<!DOCTYPE html>
<html>
  <head>
    <title>Mi página</title>
  </head>
  <body>
    <h1>Hola mundo</h1>
    <p>Mi primera web</p>
  </body>
</html>
```

---

# 🧠 HTML NO es programación

HTML:

- No tiene lógica
- No tiene variables
- No tiene condiciones

Describe estructura.

---

# 🎨 CSS

## Cascading Style Sheets

Lenguaje usado para diseño visual.

---

# 🧩 Qué controla

- Colores
- Tamaños
- Espaciado
- Layout
- Animaciones

---

# 📄 Ejemplo

```css id="cssbas01"
h1 {
  color: blue;
  font-size: 32px;
}
```

---

# 🧠 ¿Qué significa "Cascading"?

Las reglas CSS tienen prioridades.

El navegador decide cuál aplicar según:

- Especificidad
- Orden
- Importancia

Sí, CSS puede convertirse en una guerra psicológica entre selectores.

---

# ⚡ JavaScript

Lenguaje de programación de la web.

---

# 🧩 ¿Qué hace?

JavaScript permite:

- Interactividad
- Eventos
- Peticiones HTTP
- Manipular HTML
- Manipular CSS
- Crear aplicaciones completas

---

# 📄 Ejemplo

```js id="jsbas01"
button.addEventListener('click', () => {
  alert('Hola')
})
```

---

# 🧠 HTML + CSS + JS

Trabajan juntos:

| Tecnología | Función        |
| ---------- | -------------- |
| HTML       | Estructura     |
| CSS        | Apariencia     |
| JavaScript | Comportamiento |

---

# 📱 Responsive Design

Las páginas modernas deben adaptarse a:

- Celulares
- Tablets
- PCs
- Pantallas grandes

---

# 📄 Ejemplo CSS Responsive

```css id="resp01"
@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}
```

---

# 🍪 Cookies

Pequeños datos almacenados en el navegador.

Usos comunes:

- Sesiones
- Preferencias
- Autenticación

---

# 🧠 Cache

El navegador guarda archivos temporalmente para acelerar carga.

---

# ⚡ APIs

Una API permite comunicación entre sistemas.

---

# 📦 Ejemplo

Tu frontend puede pedir datos:

```txt
GET /usuarios
```

Y el backend responde:

```json id="api01"
{
  "nombre": "Santiago"
}
```

---

# 🗄️ Bases de datos

Almacenan información organizada.

---

# 📊 Ejemplos

- MySQL
- PostgreSQL
- MongoDB

---

# 🧠 Ciclo completo de una web moderna

```text
Usuario
↓
Navegador
↓
DNS
↓
Servidor
↓
Backend
↓
Base de datos
↓
Respuesta
↓
Frontend renderizado
```

---

# 🧩 Navegadores modernos

Los navegadores interpretan:

- HTML
- CSS
- JavaScript

---

# ⚙️ Motores importantes

| Navegador | Motor  |
| --------- | ------ |
| Chrome    | Blink  |
| Edge      | Blink  |
| Firefox   | Gecko  |
| Safari    | WebKit |

---

# 🧠 Renderizado

El navegador:

1. Descarga archivos
2. Construye DOM
3. Aplica CSS
4. Ejecuta JS
5. Renderiza pantalla

---

# 🧱 DOM

## Document Object Model

Representación estructurada de la página.

JavaScript interactúa con el DOM.

---

# 📄 Ejemplo

```js id="dom01"
document.querySelector('h1').textContent = 'Nuevo título'
```

---

# ⚡ DevTools

Herramientas de desarrollador integradas en navegadores.

Acceso común:

```txt
F12
```

---

# 🧩 Permiten

- Inspeccionar HTML
- Ver CSS
- Analizar red
- Depurar JavaScript
- Medir rendimiento

---

# ⚙️ IDE / Editor de código

Herramientas para programar.

---

# 🧠 El más usado actualmente

[Visual Studio Code](https://code.visualstudio.com?utm_source=chatgpt.com)

---

# 🧩 Ventajas

- Ligero
- Extensible
- Compatible con Git
- Soporte enorme de extensiones
- Multiplataforma

---

# 🌿 Git

Sistema de control de versiones.

Permite:

- Guardar cambios
- Volver atrás
- Trabajar en equipo
- Manejar ramas

---

# 📦 GitHub

Plataforma para alojar repositorios Git.

[GitHub](https://github.com?utm_source=chatgpt.com)

---

# 🧠 Buenas prácticas

## ✅ Haz esto

- Aprende HTTP básico
- Entiende cliente-servidor
- Usa HTTPS
- Aprende DevTools
- Aprende Git temprano
- Piensa primero en estructura

---

## ❌ Evita esto

- Creer que HTML es programación
- Ignorar accesibilidad
- Hacer todo con divs
- Copiar código sin entenderlo
- Aprender frameworks sin bases

Último punto especialmente importante.  
Muchos aprenden React antes de entender HTML. Es como intentar pilotar un avión sin entender qué hace un motor.

---

# 🏁 Resumen mental rápido

```text
Usuario
↓
Navegador
↓
HTTP Request
↓
Servidor
↓
Backend
↓
Base de datos
↓
HTTP Response
↓
HTML + CSS + JS
↓
Pantalla
```

---

# 🚀 Conclusión

La web moderna funciona gracias a múltiples capas trabajando juntas:

- Infraestructura
- Redes
- Protocolos
- Navegadores
- Servidores
- Lenguajes
- Bases de datos

Entender estos fundamentos cambia completamente cómo aprendes desarrollo.

Porque cuando entiendes el sistema completo, dejas de memorizar tutoriales… y empiezas a razonar arquitectura.

---

# 🌍 Dominio

Es el nombre legible de un sitio.

Ejemplos:

- `google.com`
- `youtube.com`
- `github.com`

---

# 🧠 ¿Por qué existen?

Porque memorizar IPs sería ridículo.

Más fácil:

```txt
google.com
```

que:

```txt
142.250.190.78
```

Los humanos apenas recuerdan contraseñas simples. Pedirles memorizar IPv4 masivamente habría terminado con internet en los 90.

---

# 🧠 DNS (Domain Name System)

El DNS traduce dominios a direcciones IP.
