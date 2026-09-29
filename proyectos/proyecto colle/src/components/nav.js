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
      nav {
        display: flex;
        align-items: center;
        gap: 15rem;
      }

      nav ul {
        display: flex;
        list-style: none;
        gap: 1.8rem;
      }

      nav a {
        color: hsl(40, 37%, 92%);
        text-decoration: none;
      }

      nav a:hover {
        color: hsl(38, 54%, 54%);
      }

      .cuenta {
        display: flex;
        gap: 0.8rem;
      }

      .cuenta button {
        padding: 0.5rem 1.2rem;
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
      }

      .registrate button {
        background-color: hsl(38, 54%, 54%);
        color: hsl(352, 63%, 18%);
      }

      .iniciar-sesion button {
        background-color: transparent;
        color: hsl(40, 37%, 92%);
        border: 1px solid hsl(40, 37%, 92%);
      }

    </style>

   <nav>
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#club">El Club</a></li>
        <li><a href="#categorias">Categorías</a></li>
        <li><a href="#horarios">Horarios</a></li>
        <li><a href="#partidos">Partidos</a></li>
        <li><a href="#noticias">Noticias</a></li>
        <li><a href="#entrenadores">Entrenadores</a></li>
      </ul>

      <div class="cuenta">
        <div class="registrate"><button>Registrate</button></div>
        <div class="iniciar-sesion"><button>Iniciar sesión</button></div>
      </div>
    </nav>
    `
  }
}

customElements.define('nav-component', Nav);