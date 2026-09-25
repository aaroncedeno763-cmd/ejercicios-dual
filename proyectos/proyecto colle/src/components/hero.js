class Hero extends HTMLElement {

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
     .hero {
        position: relative;
        width: 100%;
        min-height: 90vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        box-sizing: border-box;
        overflow: hidden;
      }

      .hero-fondo-campo {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
      }

      .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(hsla(0, 0%, 0%, 0.42));
        z-index: 1;
      }

      .hero-llamada-a-la-accion {
        position: relative;
        background: transparent;
        padding: 3rem 2rem;
        max-width: 800px;
        text-align: center;
        color: hsl(0, 0%, 100%);
        z-index: 2;
      }

      .hero-titulo h3 {
        font-family: 'Arial', sans-serif;
        font-size: 1rem;
        font-weight: 800;
        margin: 0 0 1rem 0;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        text-shadow: 2px 2px 4px hsla(0, 0%, 0%, 0.5);
      }

      .hero-titulo h2 {
        font-family: 'Arial', sans-serif;
        font-size: 2.5rem;
        font-weight: 800;
        margin: 0 0 1rem 0;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        text-shadow: 2px 2px 4px hsla(0, 0%, 0%, 0.5);
      }

      .hero-descripcion p {
        font-size: 1.3rem;
        line-height: 1.6;
        margin-bottom: 2.5rem;
        color: hsl(0, 0%, 89%);
        font-weight: 300;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }

      .hero-boton button {
        background-color: transparent;
        color: hsl(0, 0%, 100%);
        border: 2px solid hsl(48, 100%, 50%);
        padding: 0.5rem 1.5rem;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .hero-boton button:hover {
        background-color: hsl(48, 100%, 50%);
        color: hsl(347, 70%, 17%);
        box-shadow: 0 0 20px hsl(38, 54%, 54%);
      }
    </style>

    <section class="hero">
      <img
        src="https://e7dudgsx8ec.exactdn.com/latinoamerica/wp/wp-content/uploads/2020/05/Grama-artificial-para-futbol.jpg?strip=all&lossy=1&sharp=1&ssl=1"
        alt="Campo de fútbol" class="hero-fondo-campo">
      <div class="hero-overlay"></div>
      <div class="hero-llamada-a-la-accion">
        <div class="hero-titulo">
          <h3>DESDE 1967</h3>
          <h2>ORGULL DEL COLL D'EN REBASSA</h2>
        </div>
        <div class="hero-descripcion">
          <p>Más que un club, una familia. Hazte socio y vive el Collerense desde dentro.</p>
        </div>
        <div class="hero-boton">
          <button>Únete al club</button>
        </div>
      </div>
    </section>
    `

  }
}

customElements.define('hero-component', Hero);