class Nav extends HTMLElement {

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

      nav { display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; }
      ul { display: flex; flex-wrap: wrap; align-items: center; gap: .35rem 1rem; list-style: none; margin: 0; padding: 0; }
      a { display: inline-block; color: #e8edf7; text-decoration: none; font-size: .85rem; font-weight: 600; padding: .65rem 0; transition: color .2s; }
      a[aria-current="page"] { color: var(--dorado); text-decoration: underline; text-underline-offset: 6px; }
      a:hover { color: var(--dorado); }
      @media (max-width: 680px) { nav { align-items: stretch; flex-direction: column; gap: .8rem; } ul { gap: .2rem 1rem; } a { font-size: .875rem; } }
    </style>

   <nav aria-label="Navegación principal">
      <ul>
        <li><a href="./furbo.html#inicio">Inicio</a></li>
        <li><a href="./furbo.html#club">El Club</a></li>
        <li><a href="./furbo.html#categorias">Categorías</a></li>
        <li><a href="./furbo.html#horarios">Horarios</a></li>
        <li><a href="./furbo.html#partidos">Partidos</a></li>
        <li><a href="./furbo.html#noticias">Noticias</a></li>
        <li><a href="./furbo.html#entrenadores">Entrenadores</a></li>
        <li><a href="./colaboradores.html">Colaboradores</a></li>
        <li><a href="./contacto.html">Contacto</a></li>
      </ul>

    </nav>
    `
    this.shadow.querySelectorAll('a').forEach(link => {
      const target = new URL(link.href)
      if (!target.hash && target.pathname === window.location.pathname) {
        link.setAttribute('aria-current', 'page')
      }
    })
  }
}

customElements.define('nav-component', Nav);