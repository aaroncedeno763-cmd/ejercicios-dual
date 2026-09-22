class Historial extends HTMLElement {

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
      a{
        color: hsl(0, 0%, 100%);
        text-decoration: none;
      }

      :host {
        display: block;
        height: 100%;
      }

      .historial {
        color: hsla(0, 0%, 97%, 1.00);
        font-size: 1.3rem;
        height: 90%;
        display: flex;
        flex-direction: column;
        min-height: 0;
      }


      .lista-chats {
        flex: 1;
        min-height: 0;
        overflow-y: auto;
      }

      .lista-chats::-webkit-scrollbar {
        width: 0.5rem;
      }

      .lista-chats::-webkit-scrollbar-track {
        background-color: hsl(0, 3%, 13%);
      }

      .lista-chats::-webkit-scrollbar-thumb {
        background-color: hsl(0, 0%, 29%);
        border-radius: 1rem;
      }

      .historial ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }


      .historial li {
        font-size: 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        position: relative;
      }

    </style>

   <div class="historial">
      <p>historial</p>
      <div class="lista-chats">
        <ul>
          <li><a href="#">¿Qué es la fotosíntesis?</a></li>
          <li><a href="#">¿Cuál es la capital de Australia?</a></li>
          <li><a href="#">¿Qué se puede hacer si te encuentras a un oso?</a></li>
          <li><a href="#">¿Qué es la fotosíntesis?</a></li>
          <li><a href="#">¿Cuál es la capital de Australia?</a></li>
          <li><a href="#">¿Qué se puede hacer si te encuentras a un oso?</a></li>
          <li><a href="#">Enlazar redes sociales HTML</a></li>
          <li><a href="#">Explicar como funciona el header de una página web</a></li>
          <li><a href="#">Lista horizontal en CSS</a></li>
          <li><a href="#">Soluciones para Live Server en Visual Studio Code</a></li>
          <li><a href="#">Soluciones iconos iPhone</a></li>
          <li><a href="#">Cómo crear un canal de YouTube desde cero</a></li>
          <li><a href="#">Notas organizadas para un vídeo</a></li>
          <li><a href="#">Configuración de discos y volumen</a></li>
          <li><a href="#">Error en la ruta del archivo PostgreSQL</a></li>
          <li><a href="#">Todo en minúsculas</a></li>
          <li><a href="#">Cambio de clave SSH</a></li>
          <li><a href="#">Configuración LVM RAID MySQL</a></li>
          <li><a href="#">Problemas de conexión SSH</a></li>
          <li><a href="#">Cómo enlazar HTML con CSS</a></li>
          <li><a href="#">Cómo utilizar Flexbox</a></li>
          <li><a href="#">Cómo centrar un div</a></li>
          <li><a href="#">Qué es position fixed en CSS</a></li>
          <li><a href="#">Diferencias entre padding y margin</a></li>
          <li><a href="#">Cómo cambiar el fondo con CSS</a></li>
          <li><a href="#">Cómo hacer botones redondos</a></li>
          <li><a href="#">Cómo crear una página web responsive</a></li>
          <li><a href="#">Ejercicio de HTML para el examen</a></li>
          <li><a href="#">Repaso de etiquetas HTML</a></li>
          <li><a href="#">Repaso de propiedades CSS</a></li>
          <li><a href="#">Cómo funciona display flex</a></li>
          <li><a href="#">Cómo hacer una barra lateral</a></li>
          <li><a href="#">Cómo crear un menú desplegable</a></li>
        </ul>
      </div>
    </div>

    `

  }
}

customElements.define('historial-component', Historial);