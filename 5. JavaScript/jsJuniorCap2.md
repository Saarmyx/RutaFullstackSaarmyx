# Capitulo 2

Hablaremos de los arrays, que es

## Arrays

Estos nos permiten agregar multiples objetos o datos

```js
let array = [1, 'thiago', true]

let frutas = ['banana', 'manzana', 'pera']

// Como accedemos a este array?

// Si solo mostramos 1 elemento, lo hacemos de la siguiente manera:
frutas[1] // Los datos no definidos se marcan como undefined

// Debemos tener en cuenta la posicion y el numero de elementos
```

## Arrays Asociativos (objetos)

Es como un array que tiene un valor asociado esto se hace de la siguiente manera

```js
let pc1 = {
  nombre: 'Asus',
  procesador: 'Intel Core I5',
  ram: 16,
  espacio: 1,
}

let pc2 = ['Asus', 'Intel Core I5', 16, 1000]

document.write(pc2[2]) // Para llamar a algun elemento del arrya lo hacemos de la siguiente manera

document.write(pc1['nombre']) // Para llamar a algun elemento del objeto lo hacemos de la siguiente manera

// Tambien se puede hacer de otras maneras
document.write(pc1.nombre)

// Y se puede hacer algo asi

let nombre = pc1.nombre
let cpu = pc1.procesador
let ram = pc1.ram
let disco = pc1.espacio

frase = `El nombre del pc es ${nombre} tiene un ${cpu} ademas de ${ram} gb de ram y aparte ${espacion} tb de disco`
```

## Bucles e Iteracion

Es parecido a los condicionales, con la diferencia que es algo que no termina y seguira preguntando por las eternidades sino lo detenemos

### while

```js
let numeroParaSumar = 0

if (numeroParaSumar < 10) {
  document.write('Es menor que 10')
}

let numero = 0
while (numero < 10) {
  numero++
  document.write(numero + '<br>')
}
```

### do while

Primero ejecutamos, luego preguntamos

```js
let numero = 0

do {
  numero++
  document.write(numero + '<br>')
} while (numero < 10)
```

### break

```js
let numero = 0

while (numero < 1000) {
  numero++
  document.write(numero)
  if (numero == 10) {
    break
  }
}
```

### for

primero se declaran e inicializan luego la condicion y despues la iteracion

```js
for (let i = 0; i <= 6; i++) {
  document.write(i + '<br>')
}

let i
for (i = 0; i <= 6; i++) {
  document.write(i + '<br>')
}

document.write(i)

for (let i = 6; i >= 0; i--) {
  document.write(i + '<br>')
}
```

### continue

Hace lo mismo que el break, solo que salta a lo que nosotros le digamos

```js
for (let i = 1; i <= 5; i++) {
  if (i == 4) {
    continue
  }

  document.write(i + '<br>')
}
```

### for in / of

```js
let animales = ['gato', 'perro']

for (animal in animales) {
  document.write(animal)
}
// Toma el indice de los elementos

for (animal of animales) {
  document.write(animal)
}
// Toma el valor de los elementos
```

### for ?

```js
let array1 = ['maria', 'juan']
let array2 = ['jose', 'sebastian', array1, 'matilda']

forRancio: for (let array in array2) {
  if (array == 2) {
    for (let array of array1) {
      document.write(array + '<br>')
      break forRancio
    }
  } else {
    document.write(array2[array])
  }
}
```

## Funciones

Es una porcion de codigo que ejecuta algo

```js
function saludar() {
  let pregunta = prompt('Como estas?')

  if (pregunta == 'bien') {
    console.log('Me alegra')
  } else {
    console.log('Que mal')
  }
}

saludar()

// Otra manera de crear funciones

saludar = function () {
  let pregunta = prompt('Como estas?')

  if (pregunta == 'bien') {
    console.log('Me alegra')
  } else {
    console.log('Que mal')
  }
}
```

### return

Hace que un bloque de codigo nos devuelva un valor

```js
function saludar() {
  alert('hola')
  return 'Se ejecuto correctamente'
}

let saludo = saludar()

console.log(saludo)
```

### parametros

```js
let num1 = 32
let num2 = 12

let res = num1 + num2

alert(res)

// Funcion
function suma(num1, num2) {
  let res = num1 + num2
  return res
}

let result = suma(32, 12)

alert(result)

function saludar(nombre) {
  let frase = `hola ${nombre}, como estas?`
  alert(frase)
}

saludar('Thiago')
```

# funcion flecha

```js
const saludar = (nombre) => {
  let frase = `hola ${nombre}, como estas?`
  alert(frase)
}
saludar('Thiago')
```
