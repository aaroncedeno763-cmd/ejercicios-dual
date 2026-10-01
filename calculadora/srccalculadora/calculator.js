export default (() => {

  const pantalla = document.querySelector('.pantalla')
  const botones = document.querySelectorAll('.botones button')
  const borrarButton = document.querySelector('.borrar')
  const calcularButton = document.querySelector('.calcular')

  const signos = ['+', '-', '*', '/']

  botones.forEach((boton) => {

    boton.addEventListener('click', () => {
      let valor = boton.dataset.valor

      if (valor) {
        let ultimoCaracter = pantalla.value.slice(-1)

        // Si el último carácter es un signo Y el nuevo valor también es un signo,
        // reemplazamos el último en vez de añadir otro
        if (signos.includes(ultimoCaracter) && signos.includes(valor)) {
          pantalla.value = pantalla.value.slice(0, -1) + valor
        } else {
          pantalla.value += valor
        }
      }

    })

  })

  borrarButton.addEventListener('click', () => {
    pantalla.value = ''
  })

  calcularButton.addEventListener('click', () => {

    try {
      pantalla.value = eval(pantalla.value)
    } catch {
      pantalla.value = 'Error'
    }

  })

})();