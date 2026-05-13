# Que es?

Es una bibliote de js creada para construir interfaces de usuarios, es declarativo y se basa en componentes

Es una biblioteca universal, se puede ejecutar tanto en el cliente como en el servidor y de esa manera hacer una sola app

Para hacer por ejemplo un boton con solo vanilla Js se haria de esta manera

```html
<button data-id="123">Me gusta</button>
```

```css
button {
  background: #09f;
  color: #fff;
  border: 0;
  padding: 4px 8px;
  font-size: 18px;
  cursor: pointer;
}

body {
  background: #222;
}
```

```js
// Primero recuperamos el boton

const button = document.querySelector('button')

// Luego al hacer click en el boton, ejecutamos una funcion

button.addEventListener('click', function () {
  // Despues recuperamos el id del atributo HTML
  const id = button.getAtributte('data-id')

  // Luego llamamos a un servicio para actualizar si me gusta

  if (button.classList.contains('liked')) {
    button.classList.remove('liked')

    button.innerText = 'Me gusta'
  } else {
    button.classList.add('liked')
    button.innrText = 'Quitar me gusta'
  }
})
```

Si quiero duplicar codigo se me haria super tedioso, porque tendria que cambair el codigo para recuperar todos los botones, mediante un forEach y ademas que no es escalable ya que al pasar el codigo o el boton a otro sitio tendriamos que volver a hacerlo

Usando react lo podriamos hacer de la siguiente manera:

```html
// Primero creamos el "cuerpo" de la app

<div id="app"></div>
```

```js
//  Primero importamos reactDOM
import reactDOM from 'https://esm.sh/react-dom@18.2.0/client'

// Luego importamos el elemento de DOM app

const appDomElement = document.getElementById('app')

// Aqui le decimos que cree la raiz en el elemento del dom que nosotros especificamos
const root = ReactDom.createRoot(appDomElement)

// Ahora le decimos que debemos renderizar en el root
root.render('Hola React')
```

React no puede renderizar html de por si, lo que necesita es crear un elemento en React, lo haremos de esta manera

```js
const button = React.createElement('button', null, 'Me gusta')
// Ahora si renderizamos nuestro primer elemento
root.render(button)
```

En el null, es donde podemos poner una clase, un id, etc

```js
const button = React.createElement('button', { 'data-id': 123 }, 'Button 1')
const button2 = React.createElement('button', { 'data-id': 456 }, 'Button 2')
const button3 = React.createElement('button', { 'data-id': 789 }, 'Button 3')

// Los botones por si solo no se muestran, ya que necesitan que algo los contenga, en esta caso podemos poner un div
const div = React.createElement('div', null, [button, button2, button3])

// Y aqui renderizamos el div
root.render(div)
```

react tiene una manera de renderizacion

```js
const app = React.createElement(React.Fragment, null, [button, button2, button3])}

root.render(app)
```

jsx es una extension, que nos ayuda a crear los elementos de una manera mas declarativa

en jsx lo podemos crear de esta manera

```jsx
<React.Fragment>
  <button data-id="123">Button 1</button>
  <button data-id="123">Button 1</button>
  <button data-id="123">Button 1</button>
</React.Fragment>
```

Para trabajar con React, usaremos un empaquetador de apps webs como Create react app , Vite (la mas usada), entre otras

Para crear la app, hacemos lo sigiente

```bash
npm create vite@latest

# elegimos, react, js + react compiler y listo
```

Luego de crear nos indexara varios archivos, como el .gitignore que es todo lo que git no va a cargar en el html que estara el div con el id root y el scritp

Tambien el packege.json que es donde estaran todas las dependecias

El vite.config es la condfiguracion que hizo vite

Al irnos al main.jsx veremos algo asi

```jsx
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

De aca editaremos y empezaremos eliminando archivos que no sirven y ademas creando un boton

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<button>Hola Mundo</button>)
```

Si ponemos 2 elementos, petara y debemos hacerlo de la misma manera con el react fragment y si queremos agregar un icono en svg quqedaria demasiado grande el codigo, la idea es repetir el boton sin volver a ahacerlo desde 0 para esto crearemos un componente para reusarlo

Por ahora podemos hacerlo mediante una funcion

```jsx
const createButton = ({ text }) => {
  return <button>{text}</button>
}

root.render(
  <React.Fragment>
    {createButton({ text: 'Hola Mundo' })}
    {createButton({ text: 'Hola World' })}
    {createButton({ text: 'Hola y Chao' })}
  </React.Fragment>,
)
```

Esa no seria la mejor manera de hacerlo y los componenetes deben ser creados con PascalCase

Voy a copiar la UI de X
