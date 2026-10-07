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
      :host { display: block; }
      *, *::before, *::after { box-sizing: border-box; }
      a, button { -webkit-tap-highlight-color: transparent; }
      button { font: inherit; cursor: pointer; }
      a:focus-visible, button:focus-visible { outline: 3px solid #efbd69; outline-offset: 5px; }

      .logo { display: flex; align-items: center; gap: .9rem; color: white; }
      .logo-escudo { width: 58px; height: 66px; object-fit: contain; flex-shrink: 0; }
      h1 { font-size: clamp(1.3rem, 2vw, 1.6rem); letter-spacing: .06em; line-height: 1.1; margin: .3rem 0 0; }
      p { margin: 0; font-size: .7rem; color: #c1cbe0; letter-spacing: .1em; text-transform: uppercase; }
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