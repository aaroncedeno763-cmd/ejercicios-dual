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
          width: 20rem;
        }

        h1 {
          margin: 0;
          color: white;

        }
      </style>

      <div class="logo">
        <h1>lolito.ai - usuarios</h1>
      </div>
      `
  }
}

customElements.define('logo-component', Logo)