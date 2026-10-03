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
<<<<<<< HEAD
        width: 100%;
=======
        width:100%;
        box-sizing: border-box;
>>>>>>> 50184bc963bfcd3b8356b35a13f4d2c82001ac28
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
        background-color: hsl(352, 63%, 18%);
      }

      header section a {
        color: hsl(40, 37%, 92%);
        text-decoration: none;
        font-size: 0.85rem;
      }

      header section a:hover {
        color: hsl(38, 54%, 54%);
      }

      header section ul {
        display: flex;
        list-style: none;
        gap: 1.5rem;
      }
      @media (max-width:1150px) {
        header {
          padding:0.5rem 2rem;
        }

        header section {
          padding:0.5rem 2rem;
        }
      }
      @media (max-width: 900px) {
        header {
          padding: 0.5rem 1.5rem;
        }
        header section {
          padding: 0.5rem 1.5rem;
        }
      }

      @media (max-width: 768px) {
        header {
          padding: 0.5rem 1rem;
        }
        header section {
          padding: 0.5rem 1rem;
        }
      }

      @media (max-width:600px) {
        header {
          flex-wrap:wrap;
          padding:0.5rem 1rem;
        }

        header section {
          padding:0.5rem 1rem;
        }
      }
    </style>

    <header>
      <slot></slot>
    </header>
     `
  }
}

customElements.define('header-component', Header);