# ⚡ JavaScript Básico

JavaScript es el lenguaje que le da:

- comportamiento
- interacción
- lógica

a una página web.

Sin JavaScript, una web sería básicamente un folleto elegante. Muy bonito quizá. Muy inútil también.

---

# 🧠 ¿Qué es JavaScript?

JavaScript es un:

- lenguaje de programación
- interpretado
- dinámico
- orientado a objetos
- basado en prototipos

y es el estándar principal para programación web en navegadores.

---

# 📜 ECMAScript

## ⚠️ Importante

JavaScript y ECMAScript NO son exactamente lo mismo.

---

# 🧠 Diferencia

| Término    | Significado            |
| ---------- | ---------------------- |
| JavaScript | Lenguaje que usamos    |
| ECMAScript | Especificación oficial |

---

# 📄 Ejemplo

Cuando escuchas:

```txt
ES6
ES2020
ESNext
```

hablan de versiones de ECMAScript.

---

# 🧩 Características JavaScript

---

# 🔹 Interpretado

No necesita compilación tradicional.

El navegador:

- lee código
- interpreta
- ejecuta línea por línea

---

# 🧠 Flujo simplificado

```txt
Código JS → Motor navegador → Ejecución
```

---

# 🔹 Imperativo

Se ejecuta paso a paso.

```js id="imperative01"
let numero = 10

numero += 5

console.log(numero)
```

Cada línea ocurre en orden.

---

# 🔹 Case Sensitive

Mayúsculas y minúsculas importan.

```js id="cases01"
let nombre = 'Santiago'

let Nombre = 'Thiago'
```

Son variables distintas.

---

# 🔹 Tipado dinámico

El tipo puede cambiar.

```js id="dynamic01"
let dato = 'Hola'

dato = 25

dato = true
```

---

# ⚠️ Esto es válido

Aunque a veces convertir variables en criaturas mutantes impredecibles tampoco es exactamente una obra maestra arquitectónica.

---

# 🔹 Débilmente tipado

JavaScript intenta convertir tipos automáticamente.

---

# 📄 Ejemplo

```js id="weak01"
'5' + 5
```

Resultado:

```txt
"55"
```

Porque convierte el número en string.

---

# 🔹 Basado en prototipos

Los objetos pueden heredar de otros objetos.

Esto es parte del núcleo de JavaScript moderno.

---

# 🧠 Importante

Aunque hoy usamos:

```txt
class
```

internamente JavaScript sigue funcionando con prototipos.

---

# 💻 Editor de código

El más usado actualmente es:

[Visual Studio Code](https://code.visualstudio.com/?utm_source=chatgpt.com)

---

# 🔗 Cómo enlazar JavaScript

---

# ❌ Inline Script

```html id="inlinejs01"
<script>
  alert('Hola')
</script>
```

---

# ⚠️ Problema

Mezcla HTML y JavaScript.

No escalable.

---

# ✅ Archivo externo

```html id="externaljs01"
<script src="app.js"></script>
```

---

# 🧠 Ventajas

- código limpio
- reutilizable
- mantenible
- profesional

---

# ⚠️ Error común en tu ejemplo

Es:

```html
<script>
```

NO:

```html
<sript></sript>
```

El navegador no perdona errores ortográficos. Bastante grosero de su parte, honestamente.

---

# 📦 Variables

Una variable es un espacio en memoria donde guardamos datos.

---

# 📄 Ejemplo

```js id="var01"
let nombre = 'Santiago'
```

---

# 🧠 Analogía simple

```txt
Caja → nombre → contenido
```

---

# 📌 Declarar vs Inicializar

---

# 🔹 Declarar

```js id="declare01"
let edad
```

---

# 🔹 Inicializar

```js id="init01"
edad = 18
```

---

# 🔹 Ambas juntas

```js id="both01"
let edad = 18
```

---

# 🧩 Tipos de variables

---

# 🔹 `var`

```js id="var02"
var nombre = 'Santiago'
```

---

# ⚠️ Problemas

- scope extraño
- hoisting confuso
- comportamiento antiguo

Hoy casi no se recomienda.

---

# 🔹 `let`

```js id="let01"
let edad = 18
```

---

# 🧠 Características

- puede cambiar
- scope de bloque
- moderna

---

# 🔹 `const`

```js id="const01"
const PI = 3.1416
```

---

# 🧠 Características

- NO puede reasignarse
- requiere valor inicial

---

# ❌ Error

```js id="const02"
const nombre

nombre = 'Santiago'
```

---

# ✅ Correcto

```js id="const03"
const nombre = 'Santiago'
```

---

# ⚠️ Importante

`const` NO vuelve inmutable un objeto.

Solo evita reasignar referencia.

---

# 📄 Ejemplo

```js id="const04"
const usuario = {
  nombre: 'Santiago',
}

usuario.nombre = 'Thiago'
```

Esto sí funciona.

---

# 🧠 Tipos de datos

---

# 🔤 String

Texto.

```js id="types01"
let texto = 'Hola'
```

---

# 🔢 Number

Números.

```js id="types02"
let numero = 25
```

---

# 🔘 Boolean

Verdadero o falso.

```js id="types03"
let activo = true
```

---

# ⚠️ Casos especiales

---

# 🔹 Undefined

Variable sin valor.

```js id="special01"
let dato

console.log(dato)
```

---

# 🔹 Null

Valor intencionalmente vacío.

```js id="special02"
let usuario = null
```

---

# 🔹 NaN

Not a Number.

```js id="special03"
let resultado = 'hola' * 5
```

---

# 🧠 Resultado

```txt
NaN
```

---

# 📚 Scope

Define dónde existe una variable.

---

# 🔹 Scope global

```js id="scope01"
let nombre = 'Santiago'
```

Existe en todo programa.

---

# 🔹 Scope local

```js id="scope02"
if (true) {
  let edad = 18
}
```

Solo existe dentro bloque.

---

# 🚀 Hoisting

JavaScript mueve declaraciones internamente.

---

# 📄 Ejemplo

```js id="hoist01"
console.log(nombre)

var nombre = 'Santiago'
```

---

# ⚠️ Resultado

```txt
undefined
```

---

# 🧠 Porque internamente ocurre:

```js
var nombre

console.log(nombre)

nombre = 'Santiago'
```

---

# ⚠️ Con `let` y `const`

Genera error.

---

# 🔗 Concatenación

Unir textos.

---

# ❌ Forma antigua

```js id="concat01"
let frase = 'Hola ' + 'mundo'
```

---

# ⚠️ Funciona

Pero no es la mejor opción moderna.

---

# ✅ Template Literals

Usan backticks:

```txt
`
```

---

# 📄 Ejemplo

```js id="template01"
let nombre = 'Santiago'

let frase = `Hola ${nombre}`
```

---

# 🧠 Ventajas

- legibilidad
- multilínea
- interpolación

---

# 📄 Multilínea

```js id="template02"
let texto = `
Linea 1
Linea 2
`
```

---

# ⚠️ Backticks ≠ comillas normales

---

# 🔹 Correcto

```js id="quotes01"
let texto = `Hola`
```

---

# 🔹 Incorrecto

```js id="quotes02"
let texto = 'Hola ${nombre}'
```

No interpolará nada.

---

# 🧩 Escape de comillas

---

# ✅ Correcto

```js id="escape01"
let frase = "Mi nombre es 'Santiago'"
```

---

# ❌ Incorrecto

```js id="escape02"
let frase = "Mi nombre es "Santiago""
```

---

# ✅ Alternativa

```js id="escape03"
let frase = 'Mi nombre es "Santiago"'
```

---

# 🪟 Alert, Prompt y Confirm

---

# 🔹 Alert

Muestra mensaje.

```js id="alert01"
alert('Hola')
```

---

# 🔹 Prompt

Pide dato usuario.

```js id="prompt01"
let nombre = prompt('¿Cuál es tu nombre?')
```

---

# ⚠️ Importante

`prompt` devuelve:

```txt
string
```

siempre.

---

# 🔹 Confirm

Devuelve booleano.

```js id="confirm01"
let respuesta = confirm('¿Aceptar?')
```

---

# 🧠 Resultado

```txt
true / false
```

---

# 🖥️ Mostrar datos

---

# ❌ `document.write`

```js id="docwrite01"
document.write('Hola')
```

---

# ⚠️ Problema

Puede reemplazar todo documento.

Hoy casi no se usa profesionalmente.

---

# ✅ Mejor opciones

```js id="console01"
console.log('Hola')
```

o manipular DOM.

---

# ➕ Operadores asignación

---

# 📄 Ejemplo

```js id="assign01"
let numero = 10

numero += 5
```

---

# 🧠 Equivale a

```js
numero = numero + 5
```

---

# 📊 Operadores comunes

| Operador | Función    |
| -------- | ---------- |
| `+=`     | suma       |
| `-=`     | resta      |
| `*=`     | multiplica |
| `/=`     | divide     |
| `%=`     | módulo     |

---

# ⚠️ Error en tus apuntes

No es:

```js
&=
```

Eso es operador bitwise.

El módulo correcto es:

```js
%=
```

---

# ➕ Operadores aritméticos

---

# 📄 Ejemplo

```js id="math01"
let numero = 10

numero++
```

---

# 🧠 Significa

```txt
+1
```

---

# 🔹 Otros

```js
numero--
```

```txt
-1
```

---

# ⚖️ Operadores comparación

Devuelven:

```txt
true / false
```

---

# 📄 Ejemplos

```js id="compare01"
5 == '5'
```

Resultado:

```txt
true
```

---

# ⚠️ Porque convierte tipos

---

# ✅ Igualdad estricta

```js id="compare02"
5 === '5'
```

Resultado:

```txt
false
```

---

# 🧠 Recomendación

Usa SIEMPRE:

```txt
=== y !==
```

---

# 📊 Comparadores

| Operador | Función                 |
| -------- | ----------------------- |
| `==`     | igual                   |
| `===`    | estrictamente igual     |
| `!=`     | diferente               |
| `!==`    | estrictamente diferente |
| `>`      | mayor                   |
| `<`      | menor                   |
| `>=`     | mayor igual             |
| `<=`     | menor igual             |

---

# 🔗 Operadores lógicos

---

# 🔹 AND (`&&`)

```js id="logic01"
true && true
```

Resultado:

```txt
true
```

---

# 🔹 OR (`||`)

```js id="logic02"
true || false
```

Resultado:

```txt
true
```

---

# 🔹 NOT (`!`)

```js id="logic03"
!true
```

Resultado:

```txt
false
```

---

# 🧠 Condicionales

Permiten tomar decisiones.

---

# 📄 Sintaxis

```js id="if01"
if (condicion) {
}
```

---

# 📄 Ejemplo completo

```js id="if02"
let nombre = 'Santiago'

if (nombre === 'Santiago') {
  alert(`Tu nombre es ${nombre}`)
} else if (nombre === 'Thiago') {
  alert(`Tu nombre es ${nombre}`)
} else {
  alert('No te conozco')
}
```

---

# ⚠️ Importante

Usa:

```txt
===
```

en vez de:

```txt
==
```

---

# 🧠 Truthy y Falsy

JavaScript convierte valores automáticamente.

---

# ❌ Falsy

```js
false
0
;('')
null
undefined
NaN
```

---

# ✅ Todo lo demás

Es truthy.

---

# 📄 Ejemplo

```js id="truthy01"
if ('Hola') {
  console.log('Se ejecuta')
}
```

---

# 🧠 Buenas prácticas

## ✅ Haz esto

- usa `const` por defecto
- usa `let` si cambiará
- usa `===`
- usa template literals
- usa `console.log`

---

## ❌ Evita esto

- abusar `var`
- usar `document.write`
- variables ambiguas
- concatenación antigua excesiva

---

# ❌ Mal ejemplo

```js
let a = 5
let b = 10
let c = a + b
```

---

# ✅ Mejor

```js id="good01"
let precio = 5

let impuesto = 10

let total = precio + impuesto
```

---

# 🏁 Conclusión

JavaScript básico parece sencillo hasta que descubres:

- coerción rara
- hoisting
- scope
- tipado dinámico

y otras decisiones históricas tomadas probablemente después de tres cafés y una crisis existencial en 1995.

Pero dominar estos fundamentos es lo que hace que luego entiendas:

- DOM
- eventos
- async
- APIs
- frameworks
- backend con Node.js

Todo empieza aquí.
