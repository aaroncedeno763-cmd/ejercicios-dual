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
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 3rem;
        background: linear-gradient(45deg, #223b7d 0%, #e52421 100%);
        position: sticky;
        z-index: 10;
        top: 0;
        left: 0;
      }

      header section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        padding: 0.5rem 3rem;
        background-color: var(--granate-oscuro);
      }

      header section a {
        color: var(--papel);
        text-decoration: none;
        font-size: 0.85rem;
      }

      header section a:hover {
        color: var(--dorado);
      }

      header section ul {
        display: flex;
        list-style: none;
        gap: 1.5rem;
      }
    </style>

    <header>
      <slot></slot>
    </header>
     `
  }
}

customElements.define('header-component', Header);