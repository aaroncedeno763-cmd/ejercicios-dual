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

      @media (max-width:1150px) {
        .logo-escudo {
          width:4.5rem;
          height:4.5rem;
        }

        .title h1 {
          font-size:1.8rem;
        }

        .title p {
          font-size:0.75rem;
        }
      }

      @media (max-width:900px) {
        .logo {
          gap:0.4rem;
        }

        .logo-escudo {
          width:4rem;
          height:4rem;
        }

        .title h1 {
          font-size:1.5rem;
        }

        .title p {
          font-size:0.7rem;
        }
      }

      @media (max-width:768px) {
        .logo {
          gap:0.3rem;
        }

        .logo-escudo {
          width:3.5rem;
          height:3.5rem;
        }

        .title h1 {
          font-size:1.2rem;
        }

        .title p {
          font-size:0.6rem;
        }
      }

      @media (max-width:600px) {
        .logo {
          gap:0.25rem;
        }

        .logo-escudo {
          width:3.5rem;
          height:3.5rem;
        }

        .title h1 {
          font-size:1.1rem;
        }

        .title p {
          font-size:0.6rem;
        }
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