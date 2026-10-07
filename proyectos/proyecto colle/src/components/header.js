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
      :host { display: block; }
      *, *::before, *::after { box-sizing: border-box; }
      a, button { -webkit-tap-highlight-color: transparent; }
      button { font: inherit; cursor: pointer; }
      a:focus-visible, button:focus-visible { outline: 3px solid #efbd69; outline-offset: 5px; }

      :host { position: relative; z-index: 10; background: var(--degradado-club); border-bottom: 1px solid #ffffff20; }
      header { max-width: 1440px; margin: auto; display: flex; align-items: center; justify-content: space-between; gap: 2rem; padding: 1.25rem clamp(1rem, 4vw, 4rem); }
      ::slotted(nav-component) { min-width: 0; }
      @media (max-width: 1180px) { header { flex-direction: column; align-items: stretch; gap: 1.25rem; } }
    </style>

    <header>
      <slot></slot>
    </header>
     `
  }
}

customElements.define('header-component', Header);