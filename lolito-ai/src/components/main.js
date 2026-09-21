class Main extends HTMLElement {

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
      main {
        position: absolute;
        left: 20%;
        width: 80%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    </style>

    <main>
      <slot name="titulo"></slot>
      <slot name="prompt"></slot>
    </main>
     `
  }
}

customElements.define('main-component', Main);