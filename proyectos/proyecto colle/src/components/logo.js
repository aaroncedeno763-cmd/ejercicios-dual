class Logo extends HTMLElement {

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
      *{
        margin: 0;
      }
      .logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: hsl(208, 100%, 97%);
      }

      .logo-escudo {
        width: 5rem;
        height: 5rem;
      }

      .title h1 {
        font-size: 2rem;
        font-weight: 800;
      }

      .title p {
        font-size: 0.8rem;
        font-weight: 300;
        text-align: center;
      }
    </style>

    <div class="logo">
      <img src="./imagenes/logo.png" alt="Escudo del Collerense" class="logo-escudo">

      <div class="title">
        <p>Club de Fútbol · Mallorca</p>
        <h1>COLLERENSE</h1>
      </div>
    </div>
    `
  }
}

customElements.define('logo-component', Logo);