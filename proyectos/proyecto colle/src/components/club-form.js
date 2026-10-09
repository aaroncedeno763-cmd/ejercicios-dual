class ClubForm extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.openForm = () => {
      if (!this.dialog.open) this.dialog.showModal()
    }
  }

  connectedCallback() {
    this.render()
    document.addEventListener('club-join', this.openForm)
  }

  disconnectedCallback() {
    document.removeEventListener('club-join', this.openForm)
  }

  render() {
    this.shadow.innerHTML = /*html*/`
      <style>
        :host { display: block; }
        *, *::before, *::after { box-sizing: border-box; }
        dialog { width: min(480px, calc(100% - 2rem)); max-height: calc(100dvh - 2rem); margin: auto; padding: 0; overflow: auto; border: 0; border-radius: 16px; background: white; color: var(--azul, #101f3c); box-shadow: 0 24px 80px #0005; }
        dialog::backdrop { background: #101f3cb3; }
        .heading { position: relative; padding: 2rem; background: var(--degradado-club, linear-gradient(45deg, #223b7d, #e52421)); color: white; }
        .eyebrow { margin: 0 0 .65rem; font-size: .7rem; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; }
        h2 { margin: 0; font-size: 1.8rem; letter-spacing: -.03em; }
        .close { position: absolute; top: .65rem; right: .65rem; width: 44px; height: 44px; padding: 0; border: 0; border-radius: 50%; background: #ffffff18; color: white; font-size: 1.5rem; }
        .close:hover { background: #ffffff30; }
        .content { padding: 1.5rem 2rem 2rem; }
        button, input, textarea { font: inherit; }
        button { cursor: pointer; }
        button:focus-visible, a:focus-visible { outline: 3px solid var(--dorado, #efbd69); outline-offset: 3px; }
        form { display: grid; gap: 1rem; }
        label { display: grid; gap: .5rem; font-size: .875rem; font-weight: 700; }
        input, textarea { width: 100%; min-height: 46px; padding: .75rem; color: var(--azul, #101f3c); border: 1px solid #ccd4df; border-radius: 6px; background: #fafbfc; font-size: 1rem; }
        textarea { min-height: 92px; resize: vertical; }
        input:focus, textarea:focus { outline: 2px solid #223b7d; outline-offset: 2px; }
        .availability { margin: .25rem 0 0; color: #526078; font-size: .875rem; line-height: 1.6; }
        .submit { min-height: 48px; border: 0; border-radius: 6px; background: #e8edf4; color: #526078; font-weight: 700; }
        .submit:disabled { cursor: not-allowed; }
        .contact { margin: 1.25rem 0 0; text-align: center; font-size: .875rem; line-height: 1.6; }
        .contact a { color: var(--azul, #101f3c); text-underline-offset: 3px; }
        @media (max-width: 480px) { .heading { padding: 1.75rem 1.25rem; } .content { padding: 1.25rem; } h2 { font-size: 1.6rem; } }
      </style>
      <dialog aria-labelledby="club-form-title" aria-describedby="availability">
        <div class="heading">
          <p class="eyebrow">Collerense · Más que un club</p>
          <h2 id="club-form-title">Hazte socio del Collerense</h2>
          <button type="button" class="close" aria-label="Cerrar formulario">×</button>
        </div>
        <div class="content">
          <form id="membership-form">
            <label>Nombre completo
              <input name="name" autocomplete="name" required>
            </label>
            <label>Correo electrónico
              <input type="email" name="email" autocomplete="email" required>
            </label>
            <label>Teléfono (opcional)
              <input type="tel" name="phone" autocomplete="tel">
            </label>
            <label>Mensaje (opcional)
              <textarea name="message" rows="3" maxlength="1000"></textarea>
            </label>
            <p class="availability" id="availability">Las solicitudes online estarán disponibles próximamente. Por ahora, puedes contactar con el club.</p>
            <button class="submit" type="submit" disabled>Enviar solicitud · Próximamente</button>
          </form>
          <p class="contact"><a href="./contacto.html">Contactar con el club</a></p>
        </div>
      </dialog>
    `

    this.dialog = this.shadow.querySelector('dialog')
    this.form = this.shadow.querySelector('form')
    this.shadow.querySelector('.close').addEventListener('click', () => this.dialog.close())
    this.dialog.addEventListener('click', event => {
      const bounds = this.dialog.getBoundingClientRect()
      if (event.target === this.dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) {
        this.dialog.close()
      }
    })
    this.dialog.addEventListener('close', () => {
      this.form.reset()
    })
    // El formulario no envía datos hasta conectar la recepción de solicitudes.
    this.form.addEventListener('submit', event => event.preventDefault())
  }

}

customElements.define('club-form-component', ClubForm);
