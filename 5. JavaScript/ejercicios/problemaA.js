// Historia de Cofla
// Problema A

let dineroRoberto = parseInt(prompt('Cuanto dinero tienes Roberto?'))
let dineroPedro = parseInt(prompt('Cuanto dinero tienes dineroPedro?'))
let dineroCofla = parseInt(prompt('Cuanto dinero tienes dineroCofla?'))

let heladoAgua = 0.6
let heladoCrema = 1
let heladoHeladix = 1.6
let heladoHeladovich = 1.7
let heladoHelardo = 1.8
let heladoConfites = 2.9
let heladoPote = 2.9

if (dineroRoberto >= heladoAgua && dineroRoberto < heladoCrema) {
  alert('dineroRoberto puedes comprar el helado de agua')
  alert(`y te sobran ${dineroRoberto - heladoAgua} dolares`)
} else if (dineroRoberto >= heladoCrema && dineroRoberto < heladoHeladix) {
  alert('dineroRoberto puedes comprar el helado de crema')
  alert(`y te sobran ${dineroRoberto - heladoCrema} dolares`)
} else if (dineroRoberto >= heladoHeladix && dineroRoberto < heladoHeladovich) {
  alert('dineroRoberto puedes comprar el helado de heladix')
  alert(`y te sobran ${dineroRoberto - heladoHeladix} dolares`)
} else if (dineroRoberto >= heladoHeladovich && dineroRoberto < heladoHelardo) {
  alert('dineroRoberto puedes comprar el helado de heladovich')
  alert(`y te sobran ${dineroRoberto - heladoHeladovich} dolares`)
} else if (dineroRoberto >= heladoHelardo && dineroRoberto < heladoConfites) {
  alert('dineroRoberto puedes comprar el helado de helardo')
  alert(`y te sobran ${dineroRoberto - heladoHelardo} dolares`)
} else if (dineroRoberto >= heladoConfites && dineroRoberto < heladoPote) {
  alert('dineroRoberto puedes comprar el helado de confites')
  alert(`y te sobran ${dineroRoberto - heladoConfites} dolares`)
} else if (dineroRoberto >= heladoPote) {
  alert('dineroRoberto puedes comprar el helado de pote')
  alert(`y te sobran ${dineroRoberto - heladoPote} dolares`)
} else {
  alert('Maldito pobre de mierda')
}

if (dineroPedro >= heladoAgua && dineroPedro < heladoCrema) {
  alert('dineroPedro puedes comprar el helado de agua')
  alert(`y te sobran ${dineroPedro - heladoAgua} dolares`)
} else if (dineroPedro >= heladoCrema && dineroPedro < heladoHeladix) {
  alert('dineroPedro puedes comprar el helado de crema')
  alert(`y te sobran ${dineroPedro - heladoCrema} dolares`)
} else if (dineroPedro >= heladoHeladovich && dineroPedro < heladoHelardo) {
  alert('dineroPedro puedes comprar el helado de heladovich')
  alert(`y te sobran ${dineroPedro - heladoHeladovich} dolares`)
} else if (dineroPedro >= heladoHelardo && dineroPedro < heladoConfites) {
  alert('dineroPedro puedes comprar el helado de helardo')
  alert(`y te sobran ${dineroPedro - heladoHelardo} dolares`)
} else if (dineroPedro >= heladoConfites && dineroPedro < heladoPote) {
  alert('dineroPedro puedes comprar el helado de confites')
  alert(`y te sobran ${dineroPedro - heladoConfites} dolares`)
} else if (dineroPedro >= heladoPote) {
  alert('dineroPedro puedes comprar el helado de pote')
  alert(`y te sobran ${dineroPedro - heladoPote} dolares`)
} else {
  alert('Maldito pobre de mierda')
}

if (dineroCofla >= heladoAgua && dineroCofla < heladoCrema) {
  alert('dineroCofla puedes comprar el helado de agua')
  alert(`y te sobran ${dineroCofla - heladoAgua} dolares`)
} else if (dineroCofla >= heladoCrema && dineroCofla < heladoHeladix) {
  alert('dineroCofla puedes comprar el helado de crema')
  alert(`y te sobran ${dineroCofla - heladoCrema} dolares`)
} else if (dineroCofla >= heladoHeladix && dineroCofla < heladoHeladovich) {
  alert('dineroCofla puedes comprar el helado de heladix')
  alert(`y te sobran ${dineroCofla - heladoHeladix} dolares`)
} else if (dineroCofla >= heladoHeladovich && dineroCofla < heladoHelardo) {
  alert('dineroCofla puedes comprar el helado de heladovich')
  alert(`y te sobran ${dineroCofla - heladoHeladovich} dolares`)
} else if (dineroCofla >= heladoHelardo && dineroCofla < heladoConfites) {
  alert('dineroCofla puedes comprar el helado de helardo')
  alert(`y te sobran ${dineroCofla - heladoHelardo} dolares`)
} else if (dineroCofla >= heladoConfites && dineroCofla < heladoPote) {
  alert('dineroCofla puedes comprar el helado de confites')
  alert(`y te sobran ${dineroCofla - heladoConfites} dolares`)
} else if (dineroCofla >= heladoPote) {
  alert('dineroCofla puedes comprar el helado de pote')
  alert(`y te sobran ${dineroCofla - heladoPote} dolares`)
} else {
  alert('Maldito pobre de mierda')
}
