class PageHeading extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.shadow.innerHTML = /*html*/`
      <style>
        :host { display: block; }
        * { box-sizing: border-box; }
        section { background: linear-gradient(110deg, #14264d, #751d2a); color: white; }
        .content { max-width: 1440px; margin: auto; padding: 3.5rem clamp(1rem, 4vw, 4rem); }
        a { display: inline-block; margin-bottom: 1.5rem; color: #d9e1ef; text-decoration: none; font-size: .875rem; }
        a:hover { color: var(--dorado); text-decoration: underline; }
        a:focus-visible { outline: 3px solid var(--dorado); outline-offset: 5px; }
        ::slotted(h1) { margin: 0; font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.1; letter-spacing: -.04em; }
        ::slotted(p) { max-width: 650px; color: #d9e1ef; line-height: 1.75; margin: 1.25rem 0 0; }
      </style>
      <section>
        <div class="content">
          <a href="./furbo.html">← Volver al inicio</a>
          <slot name="title"></slot>
          <slot name="description"></slot>
        </div>
      </section>
    `
  }
}

customElements.define('page-heading-component', PageHeading);
