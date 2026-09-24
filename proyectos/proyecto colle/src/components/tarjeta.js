class Tarjeta extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadow.innerHTML =
      /*html*/`
    <style>
    .tarjetas {
        display: flex;
        gap: 1.5rem;
        padding: 3rem;
        background-color: var(--papel);
      }

      .tarjeta {
        flex: 1;
        background-color: hsl(0, 0%, 100%);
        border-top: 0.25rem solid var(--dorado);
        padding: 2rem;
        text-align: center;
      }

      .tarjeta-imagen svg {
        width: 6rem;
        height: 6rem;
        fill: var(--granate);
        margin-bottom: 1rem;
      }

      .titulo h2 {
        color: var(--tinta);
        font-size: 1.2rem;
        margin-bottom: 0.8rem;
      }

      .tarjeta-descripcion p {
        color: var(--tinta);
        font-size: 0.95rem;
        margin-bottom: 1.2rem;
      }

      .tarjeta-boton button {
        background-color: var(--granate);
        color: var(--papel);
        border: none;
        padding: 0.6rem 1.2rem;
        border-radius: 0.25rem;
        cursor: pointer;
      }

      .tarjeta-boton button:hover {
        background-color: var(--granate-oscuro);
      }
    </style>

    <section class="tarjetas">

      <div class="tarjeta">
        <div class="tarjeta-imagen">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trophy-variant-outline</title><path d="M17 4V2H7V4H2V11C2 12.1 2.9 13 4 13H7.1C7.5 14.96 9.04 16.5 11 16.9V19.08C8 19.54 8 22 8 22H16C16 22 16 19.54 13 19.08V16.9C14.96 16.5 16.5 14.96 16.9 13H20C21.1 13 22 12.1 22 11V4H17M4 11V6H7V11L4 11M15 12C15 13.65 13.65 15 12 15S9 13.65 9 12V4H15V12M20 11L17 11V6H20L20 11Z" /></svg>
        </div>
        <div class="titulo">
          <h2>Nuestra historia</h2>
        </div>
        <div class="tarjeta-descripcion">
          <p>Conoce los momentos históricos de nuestro club.</p>
        </div>
        <div class="tarjeta-boton">
          <button>Conocer historia</button>
        </div>
      </div>

      <div class="tarjeta">
        <div class="tarjeta-imagen">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>soccer</title><path d="M16.93 17.12L16.13 15.76L17.59 11.39L19 10.92L20 11.67C20 11.7 20 11.75 20 11.81C20 11.88 20.03 11.94 20.03 12C20.03 13.97 19.37 15.71 18.06 17.21L16.93 17.12M9.75 15L8.38 10.97L12 8.43L15.62 10.97L14.25 15H9.75M12 20.03C11.12 20.03 10.29 19.89 9.5 19.61L8.81 18.1L9.47 17H14.58L15.19 18.1L14.5 19.61C13.71 19.89 12.88 20.03 12 20.03M5.94 17.21C5.41 16.59 4.95 15.76 4.56 14.75C4.17 13.73 3.97 12.81 3.97 12C3.97 11.94 4 11.88 4 11.81C4 11.75 4 11.7 4 11.67L5 10.92L6.41 11.39L7.87 15.76L7.07 17.12L5.94 17.21M11 5.29V6.69L7 9.46L5.66 9.04L5.24 7.68C5.68 7 6.33 6.32 7.19 5.66S8.87 4.57 9.65 4.35L11 5.29M14.35 4.35C15.13 4.57 15.95 5 16.81 5.66C17.67 6.32 18.32 7 18.76 7.68L18.34 9.04L17 9.47L13 6.7V5.29L14.35 4.35M4.93 4.93C3 6.89 2 9.25 2 12S3 17.11 4.93 19.07 9.25 22 12 22 17.11 21 19.07 19.07 22 14.75 22 12 21 6.89 19.07 4.93 14.75 2 12 2 6.89 3 4.93 4.93Z" /></svg>
        </div>
        <div class="titulo">
          <h2>Próximos Partidos</h2>
        </div>
        <div class="tarjeta-descripcion">
          <p>Consulta los próximos partidos, rivales, horarios y campos donde jugarán nuestros equipos.</p>
        </div>
        <div class="tarjeta-boton">
          <button>Ver partidos</button>
        </div>
      </div>

      <div class="tarjeta">
        <div class="tarjeta-imagen">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>soccer-field</title><path d="M4,4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4H4M4,6H11V8.13C9.24,8.59 8,10.18 8,12C8,13.82 9.24,15.41 11,15.87V18H4V16H7V8H4V6M13,6H20V8H17V16H20V18H13V15.87C14.76,15.41 16,13.82 16,12C16,10.18 14.76,8.59 13,8.13V6M4,10H5V14H4V10M19,10H20V14H19V10M13,10.27C13.62,10.63 14,11.29 14,12C14,12.71 13.62,13.37 13,13.73V10.27M11,10.27V13.73C10.38,13.37 10,12.71 10,12C10,11.29 10.38,10.63 11,10.27Z" /></svg>
        </div>
        <div class="titulo">
          <h2>Instalaciones</h2>
        </div>
        <div class="tarjeta-descripcion">
          <p>Visita nuestras instalaciones y conoce todos los detalles.</p>
        </div>
        <div class="tarjeta-boton">
          <button>Ver Instalaciones</button>
        </div>
      </div>

    </section>
    `
  }
}

customElements.define('tarjeta-component', Tarjeta);