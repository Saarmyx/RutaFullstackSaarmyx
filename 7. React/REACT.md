# ⚛️ Introducción a React

React es una biblioteca de JavaScript creada para construir interfaces de usuario modernas.

Su objetivo principal es:

- reutilizar UI
- manejar estados dinámicos
- actualizar interfaces eficientemente
- crear aplicaciones escalables

Porque sí, manipular manualmente 300 botones con:

```js
querySelector()
addEventListener()
innerHTML += ...
```

eventualmente se convierte en una experiencia psicológicamente cuestionable.

---

# 🧠 ¿Qué es React?

React es:

- una biblioteca de JavaScript
- declarativa
- basada en componentes
- reactiva
- reutilizable

---

# ⚠️ React NO es

- un framework completo
- un lenguaje
- reemplazo JavaScript

React sigue siendo JavaScript.

Solo que organizado de forma mucho más inteligente.

---

# 🌍 React es universal

Puede ejecutarse:

| Lugar    | Ejemplo      |
| -------- | ------------ |
| Cliente  | Navegador    |
| Servidor | SSR          |
| Mobile   | React Native |

---

# 🧠 Beneficio

Permite:

- reutilizar lógica
- compartir componentes
- renderizar desde servidor
- mejorar rendimiento SEO

---

# 🧩 Problema usando Vanilla JS

---

# 📄 HTML

```html id="vanillahtml01"
<button data-id="123">Me gusta</button>
```

---

# 📄 CSS

```css id="vanillacss01"
button {
  background: #09f;
  color: white;
}
```

---

# 📄 JS

```js id="vanillajs01"
const button = document.querySelector('button')

button.addEventListener('click', () => {
  if (button.classList.contains('liked')) {
    button.classList.remove('liked')

    button.innerText = 'Me gusta'
  } else {
    button.classList.add('liked')

    button.innerText = 'Quitar me gusta'
  }
})
```

---

# ⚠️ Problema real

Funciona...

hasta que necesitas:

- 50 botones
- múltiples estados
- componentes reutilizables
- sincronización UI
- escalabilidad

Entonces empiezas a escribir más lógica para mantener la UI que la funcionalidad misma. Una tradición histórica del frontend.

---

# ⚛️ Filosofía React

React cambia:

```txt
"manipular DOM manualmente"
```

por:

```txt
"describir la UI"
```

---

# 🧠 En React dices:

```txt
"quiero que se vea así"
```

y React actualiza el DOM automáticamente.

---

# 🏗️ ReactDOM

React necesita conectarse al DOM real.

Eso lo hace:

```txt
react-dom
```

---

# 📄 Ejemplo básico

```js id="reactdom01"
import ReactDOM from 'react-dom/client'
```

---

# 🧠 Importante

Tu ejemplo tenía errores:

❌ Incorrecto:

```js
import reactDOM
```

✅ Correcto:

```js
import ReactDOM
```

y:

```js
ReactDOM.createRoot()
```

---

# 🌱 Crear raíz React

---

# 📄 HTML

```html id="roothtml01"
<div id="root"></div>
```

---

# 📄 JS

```js id="rootjs01"
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))
```

---

# 🧠 ¿Qué hace?

Conecta React con:

```html
<div id="root"></div>
```

---

# 🎨 Renderizar contenido

```js id="render01"
root.render('Hola React')
```

---

# ⚠️ Pero React NO trabaja idealmente con strings sueltos.

Trabaja con:

# elementos React

---

# 🧩 React.createElement

Crea elementos React manualmente.

---

# 📄 Ejemplo

```js id="create01"
const button = React.createElement('button', null, 'Me gusta')
```

---

# 🧠 Parámetros

| Parámetro | Función   |
| --------- | --------- |
| tipo      | elemento  |
| props     | atributos |
| children  | contenido |

---

# 📄 Renderizado

```js id="create02"
root.render(button)
```

---

# 🧩 Props

Los atributos van dentro objeto.

---

# 📄 Ejemplo

```js id="props01"
const button = React.createElement('button', { 'data-id': 123 }, 'Botón')
```

---

# 🧠 Equivale a

```html
<button data-id="123">Botón</button>
```

---

# ⚠️ Problema

Esto se vuelve muy incómodo rápido.

---

# 📄 Ejemplo horrible

```js
React.createElement(
  'div',
  null,
  React.createElement(...)
)
```

Parece más una invocación arcana que una interfaz moderna.

---

# 🧩 React Fragment

Permite agrupar elementos sin crear HTML extra.

---

# 📄 Ejemplo

```js id="fragment01"
const app = React.createElement(React.Fragment, null, [button1, button2])
```

---

# 🧠 Resultado

NO crea:

```html
<div></div>
```

innecesarios.

---

# ⚡ JSX

JSX es sintaxis especial para escribir React más fácilmente.

---

# ❌ Sin JSX

```js
React.createElement(...)
```

---

# ✅ Con JSX

```jsx id="jsx01"
<button>Me gusta</button>
```

---

# 🧠 Importante

JSX NO es HTML.

Es:

```txt
JavaScript + sintaxis parecida HTML
```

---

# ⚠️ JSX necesita compilación

Por eso usamos herramientas como:

- Vite
- Webpack
- Parcel

---

# 🚀 Vite

Actualmente el empaquetador más usado para React moderno.

---

# 📄 Crear proyecto

```bash id="vite01"
npm create vite@latest
```

---

# 🧠 Luego eliges

- React
- JavaScript o TypeScript

---

# 📁 Archivos importantes

---

# 📄 `package.json`

Contiene:

- dependencias
- scripts
- configuración proyecto

---

# 📄 `vite.config.js`

Configuración Vite.

---

# 📄 `.gitignore`

Archivos ignorados Git.

---

# 📄 `main.jsx`

Punto entrada aplicación.

---

# 📄 Ejemplo real

```jsx id="main01"
import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

---

# 🧠 `StrictMode`

Ayuda detectar problemas desarrollo.

Solo afecta desarrollo.

---

# ⚠️ Importante

Tu ejemplo tenía error:

❌

```js
ReactDom
```

✅

```js
ReactDOM
```

---

# ⚛️ Componentes

El corazón React.

---

# 🧠 ¿Qué es un componente?

Una pieza reutilizable UI.

---

# 📄 Ejemplo

```jsx id="component01"
function Button() {
  return <button>Click</button>
}
```

---

# ⚠️ Regla importante

Componentes deben empezar con:

# PascalCase

---

# ✅ Correcto

```js
Button
UserCard
Navbar
```

---

# ❌ Incorrecto

```js
button
card
navbar
```

---

# 🧩 Renderizar componente

```jsx id="rendercomponent01"
root.render(<Button />)
```

---

# ⚠️ Componentes deben retornar UN elemento raíz

---

# ❌ Incorrecto

```jsx
return (
  <h1>Hola</h1>
  <p>Mundo</p>
)
```

---

# ✅ Correcto

```jsx id="oneroot01"
return (
  <>
    <h1>Hola</h1>
    <p>Mundo</p>
  </>
)
```

---

# 🧠 `<> </>`

Es sintaxis corta Fragment.

---

# 🧩 Props

Permiten pasar datos componentes.

---

# 📄 Componente

```jsx id="propscomponent01"
function Button({ text }) {
  return <button>{text}</button>
}
```

---

# 📄 Uso

```jsx id="propsuse01"
<Button text="Hola" />
```

---

# 🧠 Resultado

```html
<button>Hola</button>
```

---

# ⚠️ Props son solo lectura

NO deben modificarse.

---

# 🎨 className

En React NO usamos:

```html
class=""
```

---

# ✅ Usamos

```jsx id="classname01"
className = ''
```

---

# 🧠 Porque `class` es palabra reservada JS.

---

# 🎨 Estilos inline

---

# ❌ HTML normal

```html
style="color:red"
```

---

# ✅ React

```jsx id="style01"
style={{ color: 'red' }}
```

---

# 🧠 Importante

Es un:

# objeto JavaScript

---

# 📄 Varias propiedades

```jsx id="style02"
style={{
  display: 'flex',
  gap: '10px'
}}
```

---

# ⚠️ CamelCase obligatorio

---

# ❌ Incorrecto

```js
font - size
```

---

# ✅ Correcto

```js
fontSize
```

---

# 🧩 Componente reutilizable

---

# 📄 Ejemplo

```jsx id="follow01"
export function XFollowCard({ name, username }) {
  const avatarUrl = `https://unavatar.io/${username}`

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={avatarUrl} alt={`Avatar de ${name}`} />

        <div>
          <strong>{name}</strong>

          <span>@{username}</span>
        </div>
      </header>

      <aside>
        <button>Seguir</button>
      </aside>
    </article>
  )
}
```

---

# ⚠️ Corrección importante

Tu URL estaba incorrecta:

❌

```txt
unaavatar.com
```

✅

```txt
unavatar.io
```

---

# 📦 Importar componente

```jsx id="import01"
import { XFollowCard } from './XFollowCard'
```

---

# 📄 Uso

```jsx id="usage01"
<XFollowCard name="Saarmyx" username="Saarmyx" />
```

---

# 🧠 React reutiliza componente automáticamente.

---

# 🔘 Boolean Props

---

# ✅ Forma completa

```jsx id="bool01"
<XFollowCard isFollowing={true} />
```

---

# ✅ Forma corta

```jsx id="bool02"
<XFollowCard isFollowing />
```

---

# 🧩 Pasar funciones

---

# 📄 Ejemplo

```jsx id="funcprops01"
<Button onClick={handleClick} />
```

---

# 🧠 Esto permite:

- eventos
- comunicación
- interacción

---

# ⚠️ Diferencia importante

---

# ❌ Incorrecto

```jsx
onClick={handleClick()}
```

---

# ✅ Correcto

```jsx
onClick = { handleClick }
```

---

# 🧠 Porque NO queremos ejecutar inmediatamente.

Solo pasar referencia.

---

# 📦 Children

React puede recibir contenido interno.

---

# 📄 Componente

```jsx id="children01"
function Card({ children }) {
  return <section>{children}</section>
}
```

---

# 📄 Uso

```jsx id="children02"
<Card>
  <h1>Hola</h1>
</Card>
```

---

# 🧠 `children`

Es una prop especial automática.

---

# 🧹 Organización componentes

---

# 📁 Buena estructura

```txt
src/

components/
pages/
hooks/
styles/
assets/
```

---

# ⚠️ Evita

```txt
Todo.js
FinalFinalAhoraSi.js
ComponenteBueno2.jsx
```

El caos de nombres termina llegando antes de lo que la gente cree.

---

# 🧠 Buenas prácticas

## ✅ Haz esto

- usa componentes reutilizables
- usa PascalCase
- separa lógica/UI
- usa props claras
- mantén componentes pequeños

---

## ❌ Evita esto

- componentes gigantes
- repetir código
- inline styles excesivos
- lógica enorme dentro JSX

---

# ❌ Ejemplo malo

```jsx
function App() {
  return (
    <div>
      <button>Uno</button>
      <button>Dos</button>
      <button>Tres</button>
    </div>
  )
}
```

---

# ✅ Mejor

```jsx id="goodreact01"
function Button({ text }) {
  return <button>{text}</button>
}
```

---

# 🏁 Conclusión

React cambia completamente la manera de construir interfaces.

La idea central es simple:

```txt
UI = Componentes + Estado + Props
```

Cuando entiendes eso, empiezas a construir:

- apps escalables
- interfaces reutilizables
- sistemas mantenibles

y dejas atrás la era oscura de:

```txt
document.querySelector('.btn-42')
```

esparcido en 19 archivos distintos como ritual antiguo de sufrimiento frontend.
