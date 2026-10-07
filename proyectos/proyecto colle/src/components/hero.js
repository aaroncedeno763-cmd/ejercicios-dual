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
      :host { display: block; }
      *, *::before, *::after { box-sizing: border-box; }
      a, button { -webkit-tap-highlight-color: transparent; }
      button { font: inherit; cursor: pointer; }
      a:focus-visible, button:focus-visible { outline: 3px solid #efbd69; outline-offset: 5px; }

      .hero { position: relative; isolation: isolate; overflow: hidden; min-height: 620px; display: flex; align-items: center; background: var(--azul); color: white; }
      .hero-fondo-campo { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: -3; opacity: .4; }
      .hero-overlay { position: absolute; inset: 0; z-index: -2; background: linear-gradient(90deg, #101f3cf2 0%, #101f3cc9 55%, #101f3c66 100%); }
      .hero::after { content: ''; position: absolute; width: 400px; height: 400px; right: -190px; bottom: -210px; border: 55px solid #d8324540; border-radius: 50%; z-index: -1; }
      .hero-llamada-a-la-accion { width: 100%; max-width: 1440px; margin: auto; padding: 5rem clamp(1rem, 4vw, 4rem); }
      .hero-titulo h3 { display: inline-flex; align-items: center; gap: .7rem; margin: 0 0 1.75rem; color: var(--dorado); font-size: .8rem; font-weight: 700; letter-spacing: .22em; }
      .hero-titulo h3::before { content: ''; width: 2rem; height: 2px; background: currentColor; }
      .hero-titulo h2 { max-width: 850px; margin: 0; font-size: clamp(2.4rem, 5.8vw, 5.5rem); font-weight: 900; line-height: 1.04; letter-spacing: -.045em; text-wrap: balance; }
      .hero-descripcion p { max-width: 500px; margin: 1.75rem 0 2rem; color: #d9e1ef; font-size: clamp(1rem, 1.5vw, 1.15rem); line-height: 1.75; }
      .hero-boton button { min-height: 50px; padding: .9rem 1.5rem; border: none; border-radius: 6px; background: var(--rojo); color: white; font-weight: 700; box-shadow: 0 8px 24px #0003; transition: background .2s, transform .2s; }
      .hero-boton button:hover { background: #b72236; transform: translateY(-2px); }
      @media (max-width: 680px) { .hero { min-height: 520px; } .hero-llamada-a-la-accion { padding-top: 3.5rem; padding-bottom: 4rem; } .hero-overlay { background: linear-gradient(90deg, #101f3cf2, #101f3cc9); } }
      @media (prefers-reduced-motion: reduce) { button { transition: none !important; transform: none !important; } }
    </style>

    <section class="hero">
      <img
        src="https://e7dudgsx8ec.exactdn.com/latinoamerica/wp/wp-content/uploads/2020/05/Grama-artificial-para-futbol.jpg?strip=all&lossy=1&sharp=1&ssl=1"
        alt="" aria-hidden="true" class="hero-fondo-campo">
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