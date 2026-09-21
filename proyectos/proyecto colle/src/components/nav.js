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
  gap: 2.5rem;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 1.8rem;
}

nav a {
  color: var(--papel);
  text-decoration: none;
}

nav a:hover {
  color: var(--dorado);
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
  background-color: var(--dorado);
  color: var(--granate-oscuro);
}

.iniciar-sesion button {
  background-color: transparent;
  color: var(--papel);
  border: 1px solid var(--papel);
}

    </style>

   <nav>
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#club">El Club</a></li>
        <li><a href="#equipos">Equipos</a></li>
        <li><a href="#horarios">Horarios</a></li>
        <li><a href="#partidos">Partidos</a></li>
        <li><a href="#noticias">Noticias</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>

      <div class="cuenta">
        <div class="registrate"><button>Únete al club</button></div>
        <div class="iniciar-sesion"><button>Área privada</button></div>
      </div>
    </nav>
    `

    this.shadow.querySelector('.title').addEventListener('click', () => {
      this.alertMessage()
    })
  }

  alertMessage() {
    alert(this.message)
  }
}

customElements.define('nav-component', Nav);