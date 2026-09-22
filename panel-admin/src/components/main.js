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
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 4rem;
        max-height: 92vh;
      
      }
    </style>

    <main>
      <slot name="table"></slot>
      <slot name="form"></slot>
    </main>
     `
  }
}

customElements.define('main-component', Main);