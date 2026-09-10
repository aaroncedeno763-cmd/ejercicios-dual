export default (() => {

  const pantalla = document.querySelector('.pantalla')
  const botones = document.querySelectorAll('.botones button')
  const borrarButton = document.querySelector('.borrar')
  const calcularButton = document.querySelector('.calcular')

  // "Haz esto con cada uno de los botones."
  botones.forEach((boton) => {

    boton.addEventListener('click', () => {
      // esto es para obtener el valor que pusimos en el html
      let valor = boton.dataset.valor
      // Esto comprueba si el botón tiene un data-valor.
      if (valor) {
        pantalla.value += valor
      }

    })

  })

  borrarButton.addEventListener('click', () => {
    pantalla.value = ''
  })

  calcularButton.addEventListener('click', () => {

    try {
      pantalla.value = eval(pantalla.value)//calcula la operación que está escrita.
    } catch {
      pantalla.value = 'Error'
    }

  })

})();