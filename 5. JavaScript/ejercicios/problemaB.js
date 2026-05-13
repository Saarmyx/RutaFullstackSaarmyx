let entradaGratis = false

function validadEntrada(tiempo) {
  let edad = prompt('Cual es tu edad?')
  if (edad >= 18) {
    if (tiempo >= 2 && tiempo <= 7 && entradaGratis === false) {
      alert('Puedes entrar gratis')
      entradaGratis = true
    } else {
      alert('Tienes que pagar la entrada')
    }
  } else {
    console.log('Eres menor de edad, no puedes entrar')
  }
}

validadEntrada(16)
validadEntrada(19)
validadEntrada(23)
validadEntrada(1)
validadEntrada(3)
validadEntrada(3.5)
validadEntrada(5)
validadEntrada(8)
