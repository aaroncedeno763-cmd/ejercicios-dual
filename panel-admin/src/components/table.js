class Table extends HTMLElement {

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
       .table {
          width: 100%;
          padding: 1rem 3rem;
        }

        .paginacion {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          height: 2.5rem;
          padding: 0.5rem 0;
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
          margin:0;
          border: 0.15rem solid hsl(200, 50%, 50%);
          padding: 0 1rem;
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
          <li><strong>Nombre:</strong> Aaron Cedeno</li>
          <li><strong>Email:</strong> aaroncedeno0292@hotmail.com</li>
          <li><strong>Fecha de creacion:</strong> 10/12/2023</li>
          <li><strong>Fecha de actualizacion:</strong> 10/12/2023</li>
        </ul>
      </div>
      `
  }
}

customElements.define('table-component', Table)