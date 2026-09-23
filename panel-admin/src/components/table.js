class Table extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.loadData()
    this.render()
  }

  loadData() {
    this.data = [
      {
        nombre: "Aarón Cedeno",
        email: "aaroncedeno123@hotmail.com",
        fechaCreacion: "23/09/2026",
        fechaActualizacion: "23/09/2026"
      }
    ]
  }

  render() {
    this.shadow.innerHTML =
      /*html*/`
      <style>
        
        * {
          box-sizing: border-box;
        }

        .table {
          width: 130%;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .paginacion {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          height: 2.5rem;
          padding: 0;
          border-bottom: 0.15rem solid hsl(200, 50%, 50%);
        }

        .paginacion button {
          height: 100%;
          width: 2rem;
          border: none;
          background-color: hsl(200, 50%, 50%);
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
        }

        .paginacion button:hover{
          background-color: hsla(200, 4%, 83%, 1.00);
        }

        .paginacion span {
          padding: 0 1.5rem;
          height: 100%;
          background-color: hsl(200, 50%, 50%);
          font-size: 1.5rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        ul {
          margin: 0;
          border: 0.15rem solid hsl(200, 50%, 50%);
          padding: 1rem;
          list-style: none;
        }

        li {
          padding: 0.2rem 0;
        }
      </style>

      <div class="table">
        <div class="paginacion">
          <button>&lt;</button>
          <span>1/1</span>
          <button>&gt;</button>
        </div>

        <ul>
        </ul>
      </div>
      `


    const ul = this.shadow.querySelector('ul')



    this.data.forEach(element => {
      const li = document.createElement('li')
      li.innerHTML = `
        <strong>Nombre:</strong> ${element.nombre}<br>
        <strong>Email:</strong> ${element.email}<br>
        <strong>Fecha de creacion:</strong> ${element.fechaCreacion}<br>
        <strong>Fecha de actualizacion:</strong> ${element.fechaActualizacion}
      `;
      ul.appendChild(li);
    });
  }
}

customElements.define('table-component', Table)