// Colaboradores publicados en https://udcollerense.inxenio.com/colaboradores/.
const colaboradores = [
  { name: 'Air Europa', image: 'aireuropa' },
  { name: 'Ca Na Paulina', image: 'canapaulina' },
  { name: 'FAN Mallorca Shopping', image: 'fan-mallorca' },
  { name: 'RFEF', image: 'rfef' },
  { name: 'Mallorcasa', image: 'mallorcasa' },
  { name: 'Hawaii Ciudad Jardín', image: 'hawaii' },
  { name: 'La Dolores', image: 'la-dolores' },
  { name: 'Esports IB', image: 'esports-ib' },
  { name: '971 Print', image: '971-print' }
]

class Colaboradores extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.shadow.innerHTML = /*html*/`
      <style>
        :host { display: block; }
        *, *::before, *::after { box-sizing: border-box; }
        .content { max-width: 1440px; margin: auto; padding: 3rem clamp(1rem, 4vw, 4rem); }
        ul { margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.5rem; }
        li { display: flex; flex-direction: column; overflow: hidden; background: white; border: 1px solid #e2e5ea; border-radius: 12px; }
        .logo { min-height: 180px; padding: 2rem; display: grid; place-items: center; background: white; border-bottom: 1px solid #e2e5ea; }
        img { display: block; max-width: 100%; width: 210px; height: 110px; object-fit: contain; }
        h2 { color: var(--azul); text-align: center; margin: 0; padding: 1.25rem; font-size: 1.1rem; }
        .invitation { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1.5rem; margin-top: 3rem; padding: 2rem; background: var(--azul); color: white; border-radius: 12px; }
        .invitation h2 { color: white; padding: 0; text-align: left; font-size: 1.4rem; }
        p { color: #d9e1ef; margin: .75rem 0 0; line-height: 1.6; }
        a { display: inline-flex; align-items: center; min-height: 44px; padding: .8rem 1.2rem; border-radius: 6px; background: var(--rojo); color: white; font-size: .875rem; font-weight: 700; text-decoration: none; }
        a:hover { background: #b72236; }
        a:focus-visible { outline: 3px solid var(--dorado); outline-offset: 4px; }
        @media (max-width: 900px) { ul { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 560px) { ul { grid-template-columns: 1fr; } .content { padding-block: 2rem; } .invitation { padding: 1.5rem; } }
      </style>
      <div class="content">
        <ul aria-label="Colaboradores del club">
          ${colaboradores.map(item => /*html*/`
            <li>
              <div class="logo"><img src="./imagenes/colaboradores/${item.image}.png" alt="${item.name}" width="210" height="110" loading="lazy"></div>
              <h2>${item.name}</h2>
            </li>
          `).join('')}
        </ul>
        <section class="invitation" aria-labelledby="invitation-title">
          <div>
            <h2 id="invitation-title">¿Quieres colaborar con el club?</h2>
            <p>Forma parte de la familia del Collerense.</p>
          </div>
          <a href="./contacto.html">Contactar con el club →</a>
        </section>
      </div>
    `
  }
}

customElements.define('colaboradores-component', Colaboradores);
