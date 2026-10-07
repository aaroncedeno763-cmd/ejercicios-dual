class Contacto extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.shadow.innerHTML = /*html*/`
      <style>
        :host { display: block; }
        *, *::before, *::after { box-sizing: border-box; }
        .content { display: grid; grid-template-columns: .85fr 1.3fr; gap: 2rem; max-width: 1440px; margin: auto; padding: 3rem clamp(1rem, 4vw, 4rem); align-items: start; }
        aside, .form-card { padding: clamp(1.5rem, 3vw, 2.5rem); border: 1px solid #e2e5ea; border-radius: 12px; background: white; }
        aside { background: var(--azul); color: white; }
        h2 { margin: 0 0 1rem; font-size: 1.5rem; letter-spacing: -.025em; }
        h3 { margin: 2rem 0 .75rem; font-size: 1rem; color: var(--dorado); }
        p { line-height: 1.7; margin: 0 0 1.25rem; color: #526078; }
        aside p { color: #d9e1ef; }
        aside a { display: inline-block; color: white; text-underline-offset: 4px; padding-block: .5rem; }
        aside a:hover { color: var(--dorado); }
        .external-icon { width: 12px; height: 12px; vertical-align: middle; }
        .social { display: flex; flex-wrap: wrap; gap: 1rem; }
        form { display: grid; gap: 1rem; }
        label { display: grid; gap: .5rem; color: var(--azul); font-size: .875rem; font-weight: 700; }
        input, select, textarea, button { font: inherit; }
        input, select, textarea { min-width: 0; width: 100%; min-height: 46px; padding: .75rem; color: var(--azul); background: #fafbfc; border: 1px solid #ccd4df; border-radius: 6px; font-size: 1rem; }
        textarea { min-height: 130px; resize: vertical; }
        input:focus, select:focus, textarea:focus { outline: 2px solid #223b7d; outline-offset: 2px; }
        a:focus-visible { outline: 3px solid var(--dorado); outline-offset: 4px; }
        .availability { margin: 0; font-size: .875rem; }
        button { min-height: 48px; border: 0; border-radius: 6px; background: #e8edf4; color: #526078; font-weight: 700; }
        button:disabled { cursor: not-allowed; }
        @media (max-width: 760px) { .content { grid-template-columns: 1fr; padding-block: 2rem; gap: 1rem; } }
      </style>
      <div class="content">
        <aside aria-labelledby="club-contact-title">
          <h2 id="club-contact-title">Hablemos de fútbol</h2>
          <p>Información para socios, propuestas de colaboración y consultas sobre el club.</p>
          <h3>Encuéntranos</h3>
          <p>Coll d’en Rebassa<br>Palma, Mallorca</p>
          <a href="https://www.google.com/maps/search/?api=1&query=39.54780221594749%2C2.6965424156879894">Ver ubicación en el mapa <svg class="external-icon" aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 3h8v8M13 3 3 13"/></svg></a>
          <h3>Sigue al Collerense</h3>
          <div class="social">
            <a href="https://www.instagram.com/udcollerense/">Instagram</a>
            <a href="https://www.facebook.com/udcollerenseoficial">Facebook</a>
          </div>
        </aside>
        <section class="form-card" aria-labelledby="contact-form-title">
          <h2 id="contact-form-title">Cuéntanos en qué podemos ayudarte</h2>
          <form aria-describedby="contact-availability">
            <label>Nombre completo<input name="name" autocomplete="name" required></label>
            <label>Correo electrónico<input type="email" name="email" autocomplete="email" required></label>
            <label>Teléfono (opcional)<input type="tel" name="phone" autocomplete="tel"></label>
            <label>Motivo de la consulta
              <select name="subject" required>
                <option value="">Selecciona un motivo</option>
                <option>Hacerme socio</option>
                <option>Colaborar con el club</option>
                <option>Información general</option>
              </select>
            </label>
            <label>Mensaje<textarea name="message" rows="5" maxlength="2000" required></textarea></label>
            <p class="availability" id="contact-availability">El envío de consultas online estará disponible próximamente. Mientras tanto, puedes contactar con el club por sus redes sociales.</p>
            <button type="submit" disabled>Enviar consulta · Próximamente</button>
          </form>
        </section>
      </div>
    `
    // Pendiente de conectar un servicio propio para recibir consultas.
    this.shadow.querySelector('form').addEventListener('submit', event => event.preventDefault())
  }
}

customElements.define('contacto-component', Contacto);
