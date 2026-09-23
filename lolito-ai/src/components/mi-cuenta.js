class MiCuenta extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    console.log("mi cuenta cargado")
    this.render()
  }

  render() {
    this.shadow.innerHTML =
      /*html*/`
    <style>
      .mi-cuenta {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .mi-cuenta p {
        font-size: 1rem;
      }
      
      .svg svg{
        width: 1.5rem;
        height: 1.5rem;
        fill: hsl(0, 0%, 100%);
        border-radius: 50%;
        background-color: hsl(0, 0%, 100%);
        padding: 0.3rem;
      }
      
    </style>

   <div class="mi-cuenta">
      <div class="svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>account</title>
          <path
            d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
        </svg>
      </div>
      <p>Aarón</p>
    </div>
    `
  }
}

customElements.define('mi-cuenta-component', MiCuenta);