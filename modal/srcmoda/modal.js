export default (() => {

  const openButton = document.querySelector('.open-button')
  const closeButton = document.querySelector('.close-button')
  const submitButton = document.querySelector('.submit-button')

  openButton.addEventListener('click', () => {
    let caja = document.querySelector(".box");
    caja.classList.remove("box-hidden");
  })

  closeButton.addEventListener('click', () => {
    let caja = document.querySelector(".box");
    caja.classList.add("box-hidden");
  })

  submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    let caja = document.querySelector(".box");
    caja.classList.add("box-hidden");

    alert("enviado");
  })


})();


