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


      @media (max-width:1150px) {
        nav {
          gap:1.5rem;
        }

        nav ul {
          gap:1rem;
        }

        nav a {
          font-size:0.8rem;
        }

        .cuenta {
          gap:0.5rem;
        }

        .cuenta button {
          padding:0.4rem 0.8rem;
        }
      }

      @media (max-width:900px) {
        nav {
          gap:1rem;
        }

        nav ul {
          gap:0.7rem;
        }

        nav a {
          font-size:0.75rem;
        }

        .cuenta button {
          padding:0.4rem 0.6rem;
         font-size:0.75rem;
        }
      }

      @media (max-width:768px) {
        nav {
          gap:0.8rem;
        }

        nav ul {
          gap:0.5rem;
        }

        nav a {
          font-size:0.7rem;
        }

        .cuenta {
          gap:0.3rem;
        }

        .cuenta button {
          padding:0.35rem 0.5rem;
          font-size:0.7rem;
        }
      }

      @media (max-width:600px) {
        nav {
          width:100%;
          gap:0.5rem;
          flex-direction:column;
        }

        nav ul {
          width:100%;
          justify-content:center;
          gap:0.6rem;
        }

        nav a {
          font-size:0.65rem;
          white-space:nowrap;
        }

        .cuenta {
          gap:0.4rem;
        }

        .cuenta button {
          padding:0.35rem 0.6rem;
          font-size:0.65rem;
        }
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