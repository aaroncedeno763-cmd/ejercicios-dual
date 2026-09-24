export default (() => {

  const pestañas = document.querySelectorAll(".pestaña");
  const contenidos = document.querySelectorAll(".contenido-tab");

  pestañas.forEach(pestaña => {

    pestaña.addEventListener("click", () => {
      pestañas.forEach(pestaña => {
        pestaña.classList.remove("active");
      });

      contenidos.forEach(contenido => {
        contenido.classList.remove("active");
      });
      pestaña.classList.add("active");

      const contenido = document.querySelectorAll(`.contenido-tab[data-content="${pestaña.dataset.tab}"]`);

      contenido.forEach(contenido => {
        contenido.classList.add("active");
      });
    });
  });

})();
