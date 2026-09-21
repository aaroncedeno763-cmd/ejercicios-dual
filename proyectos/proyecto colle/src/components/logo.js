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
      .logo {
        color: hsl(208, 100%, 97%);
      }
    </style>

    <div class="logo">
      <h1>COLLERENSE</h1>
      <p>Club de Fútbol · Mallorca</p>
    </div>
    `

    this.shadow.querySelector('.title').addEventListener('click', () => {
      this.alertMessage()
    })
  }

  alertMessage() {
    alert(this.message)
  }
}

customElements.define('logo-component', Logo);