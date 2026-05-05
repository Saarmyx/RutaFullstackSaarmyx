# Capitulo 1

- Js es un lenguaje de programacion
- Es un lenguaje intepretado, los compilados antes de ejutarse debe pasar por un programa para que funciones uno interpretado no pasa por un compilador, solo pasa por el interprete del navegador y se ejecuta linea por linea
- Es un lenguaje orientado a objetos
- Es imperativo, quiere decir que se ejecuta paso por paso o linea por linea
- Es un lenguaje case sensitive, quiere decir que tiene diferencia entre mayusulas y minisculas
- Es basado en prototipos/inttancias/classles, quiere decir que creamos en base a prototipos de js
- Es de tipado debil, quiere decir que se puede cambiar los tipos de datos en base a se escribe
- Es un lenguaje dinamico, quiere decir que la variable se ajusta al dato
- Ecmascript

## Editor de texto

Se pueden usar muchos, pero de preferido es: [Vscode](https://code.visualstudio.com/)

## Manera de enlazar js

Como contenido:

```html
<sript type="text/javascript">
alert("Hola")
</script>
```

En archivo externo:

```html
<sript src="archivo.js"></script>
```

## Variables

Es un espacio que se guarda en memoria
Ejemplo: Si tengo un vaso y guardo un papel, puedo ponerle nombre al vaso y le puedo poner un valor al paper

```js
recipiente = 'papel'
alert(recipiente)
```

Podemos inicializar una variable de 3 maneras distintas:

- var = goblal
- let = Local
- const = No cambia
  y lo mostramos con alert

```js
const nombre = 'Saarmyx'
nombre = 'Hola' // Eso no se puede hacer
alert(nombre)

// No se puede inicialiar despues que se separa
const numero // No se puede
numero = 2
alert(numero)
```

```js
let numero // Se puede definir en otra linea

numero = 95

alert(numero)
```

### Tipos de datos

String = "cadena de texto"
Number = Numero
Boolean = Si/No

### Casos especiales

Undefines = Indefinido
Null = Si tiene un valor, que es nada
Nan = No es un numero

El scope es que las varibles funcionan en base a fragamentos

El hoisting habla de las fases de creacion

La concatenacion es la suma de 2 strings

# Pruebas con prompt

```js
prompt('Hola rancio') // Esto nos devuelve un valor que sera lo que nosotros decimos

// Para guardalo lo metemos en una variabble
let nombre = prompt('Cual es tu nombre')
```

# Operadores en js

Operadores de asignacion
Se asgina un valor mediante el valor de la izquierda a la derecha

```js
let numero = 10

numero += 5 // Esto le suma 5
numero -= 5 // Esto le resta 5
numero *= 5 // Esto le multiplica 5
numero /= 5 // Esto le divide 5
numero &= 5 // Esto le modula 5

document.write(numero) // El document.write nos muestra el resultado en pantallas
```

Operadores aritmeticos

```js
let numero = 10
let numero2 = 5

numero-- // De esta manera se le resta 1 al numero seleccionado

document.write(numero) // El document.write nos muestra el resultado en pantallas
```

# Concatenacion

```js
let saludo = 'Hola'
let pregunta = 'Como estas'

let frase = saludo + '' + pregunta

let frase = saludo.concat(pregunta) // Esta es otra manera de concatenar

let nombre = 'saarmyx'
let frase = `Soy ${nombre} y estoy caminando` // Esta la menra que se recomienda para concatenar

document.write(frase)
```

# Backtiksc

Estos nos permiten hacer una mejor concatenacion y hasta mostrar html

```js
let nombre = 'saarmyx'
let frase = `Soy ${nombre} y estoy caminando` // Esta la menra que se recomienda para concatenar

document.write(frase)
```

## Escape de comillas

```js
nombre = 'saarmyx'
frase = "mi nombre es 'saarmyx' y soy pro"
frase2 = "mi nombre es "saarmyx" y soy pro" // Esto no se puede
// Se debe abrir con unas comillas diferentes si queremos poner comillas dentro del string

document.write(frase)
```

# Operadores

De comparacion
Logicos = se basan en los de comparacion

```js
let num = 2
let num2 = 5

// Este verifica si es igual a otro
result = num == num2

// Este verifica si es diferenete a otro
result = num != num2

// Este verifica si es estrictamente igual a otro
result = num === num2

// Este verifica si es estrictamente difente a otro
result = num !== num2

// Este verifica si es mayor a otro
result = num > num2

// Este verifica si es mayor o igual a otro
result = num >= num2

// Este verifica si es menor a otro
result = num < num2

// Este verifica si es menor o igual a otro
result = num <= num2
```

```js
let valor = true
let valor2 = true

let num = 21
let num2 = 12

// Operador AND (&&), valida que
let result = valor && valor2 // Si las 2 se cumplen da True, sino da False

// Operador OR (||)
let result = valor || valor2 // Si al menos 1 se cumplen da True, sino da False

// Operador NOT (!)
let result = !valor2 // Cambia el valor de la afirmacion

let result = num < num2 || num == num2 // Aqui se aplica todo
```

# Condicionales

Es una sentencia que nos permite validar algo

```js
let nombre = 'Saarmyx'
// If condicion inicial, sino se cumple pasa a else if y si no es ninguna pasa a else

// Se ejecuta si la condicion en true
if (nombre == 'Santiago') {
  alert(`Tu nombre es ${nombre}`)
} else if (nombre == 'Thiago') {
  alert(`Tu nombre es ${nombre}`)
} else {
  alert(`Tu nombre es ${nombre}`)
}
```
