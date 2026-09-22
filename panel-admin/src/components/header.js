class Header extends HTMLElement {

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
      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: hsl(200, 50%, 50%);
        height: 8vh;
        padding: 0 3rem;
      }
    </style>

    <header>
      <slot name="logo"></slot>
      <slot name="menu"></slot>
    </header>
     `
  }
}

customElements.define('header-component', Header);