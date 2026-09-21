export default (() => {
  const barraLateral = document.querySelector(".barra-lateral");
  const botonCerrar = document.querySelector(".boton-cerrar");
  botonCerrar.addEventListener('click', () => {
    barraLateral.classList.toggle("barra-lateral--cerrar")
  })
})();

