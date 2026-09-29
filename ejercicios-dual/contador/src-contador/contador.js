export default (function () {

  const botonMenos = document.querySelector('.botonMenos')
  const botonMas = document.querySelector('.botonMas')
  const numero = document.querySelector('.numero')

  let valorActual = 0

  botonMenos.addEventListener('click', () => {
    if (valorActual > 0) {
      valorActual -= 1;
      numero.value = valorActual;
    }
  })

  botonMas.addEventListener('click', () => {
    valorActual += 1;
    numero.value = valorActual;
  })

})();