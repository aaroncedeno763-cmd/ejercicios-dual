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
        align-items: flex-start;
        justify-content: space-between;
        padding: 1.5rem 4rem;
        max-height: 92vh;
      
      }
    </style>

    <main>
      <slot></slot>
    </main>
     `
  }
}

customElements.define('main-component', Main);