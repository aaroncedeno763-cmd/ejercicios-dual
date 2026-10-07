class Footer extends HTMLElement {

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
      :host { display: block; }
      *, *::before, *::after { box-sizing: border-box; }
/* Footer inspirado en la web oficial del club. */
.club-footer {
  background: linear-gradient(115deg, #14264d 0%, #352346 55%, #751d2a 100%);
  color: white;
  border-top: 4px solid var(--dorado);
  padding: 3.5rem clamp(1rem, 4vw, 4rem) 1.5rem;
}
.club-footer a { color: inherit; text-decoration: none; }
.club-footer a:focus-visible { outline: 3px solid var(--dorado); outline-offset: 5px; }
.footer-content, .footer-contact, .footer-bottom { max-width: 1325px; margin-inline: auto; }
.footer-content { display: grid; grid-template-columns: 1fr 1.3fr; gap: 3rem; align-items: center; }
.footer-logo { display: inline-flex; align-items: center; gap: 1rem; }
.footer-logo img { object-fit: contain; flex-shrink: 0; }
.footer-logo strong { display: block; margin-top: .4rem; font-size: clamp(1.3rem, 2vw, 1.8rem); letter-spacing: .06em; }
.footer-eyebrow { color: #d9e1ef; font-size: .7rem; letter-spacing: .1em; text-transform: uppercase; }
.footer-brand p { color: #d9e1ef; line-height: 1.75; margin: 1.25rem 0; }
.footer-external-icon { width: 12px; height: 12px; vertical-align: middle; flex-shrink: 0; }
.footer-social { display: flex; flex-wrap: wrap; gap: 1rem; font-size: .875rem; font-weight: 700; }
.footer-social a:hover, .footer-bottom a:hover { color: var(--dorado); text-decoration: underline; text-underline-offset: 4px; }
.footer-partners { min-width: 0; text-align: center; }
.footer-partners h2 { margin: 0; color: var(--dorado); font-size: .8rem; text-transform: uppercase; letter-spacing: .15em; }
.footer-partner-logos { list-style: none; padding: 0; margin: 2rem 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 2rem; }
.footer-partner-logos li { display: flex; align-items: center; justify-content: center; }
.footer-partner-logos img { display: block; max-width: 100%; object-fit: contain; }
.footer-button { display: inline-flex; justify-content: center; align-items: center; gap: .75rem; min-height: 44px; padding: .75rem 1rem; border: 1px solid #ffffff70; border-radius: 6px; font-size: .875rem; font-weight: 700; transition: background .2s; }
.footer-button:hover { background: #ffffff18; }
.footer-contact { display: flex; justify-content: space-between; align-items: center; gap: 1.5rem; margin-top: 3rem; padding: 1.5rem 0; border-top: 1px solid #ffffff30; }
.footer-contact h2 { font-size: 1.2rem; margin: 0 0 .5rem; }
.footer-contact p { color: #d9e1ef; font-size: .875rem; margin: 0; line-height: 1.6; }
.footer-bottom { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem; padding-top: 1.5rem; border-top: 1px solid #ffffff30; color: #d9e1ef; font-size: .8rem; line-height: 1.6; }
.footer-bottom p { margin: 0; }
.footer-bottom nav { display: flex; flex-wrap: wrap; gap: .5rem 1rem; }
.footer-bottom a { display: inline-block; padding-block: .5rem; }
.footer-top { font-weight: 700; }
@media (max-width: 760px) {
  .club-footer { padding-top: 2.5rem; }
  .footer-content { grid-template-columns: 1fr; gap: 2.5rem; }
  .footer-brand { text-align: center; }
  .footer-social { justify-content: center; }
  .footer-partner-logos { gap: 1.5rem; }
  .footer-contact { flex-direction: column; text-align: center; margin-top: 2.5rem; }
  .footer-bottom { flex-direction: column; text-align: center; }
  .footer-bottom nav { justify-content: center; }
}
@media (prefers-reduced-motion: reduce) { .footer-button { transition: none; } }
    </style>

  <footer class="club-footer">
    <div class="footer-content">
      <div class="footer-brand">
        <a class="footer-logo" href="./furbo.html" aria-label="Collerense, volver al inicio">
          <img src="imagenes/logo.png" alt="" width="64" height="76" loading="lazy">
          <span><span class="footer-eyebrow">Club de Fútbol · Mallorca</span><strong>COLLERENSE</strong></span>
        </a>
        <p>Más que un club, una familia.<br>Orgull del Coll d’en Rebassa.</p>
        <nav class="footer-social" aria-label="Redes sociales del club">
          <a href="https://www.instagram.com/udcollerense/">Instagram <svg class="footer-external-icon" aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 3h8v8M13 3 3 13"/></svg></a>
          <a href="https://www.facebook.com/udcollerenseoficial">Facebook <svg class="footer-external-icon" aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 3h8v8M13 3 3 13"/></svg></a>
        </nav>
      </div>

      <section class="footer-partners" aria-labelledby="footer-partners-title">
        <h2 id="footer-partners-title">Nuestros colaboradores</h2>
        <!-- Logotipos del footer oficial: https://udcollerense.inxenio.com/ -->
        <ul class="footer-partner-logos" aria-label="Colaboradores destacados del club">
          <li><img src="imagenes/logo-fan.png" alt="FAN Mallorca Shopping" width="103" height="85" loading="lazy"></li>
          <li><img src="imagenes/logo-canapaulina.png" alt="Ca Na Paulina" width="76" height="86" loading="lazy"></li>
          <li><img src="imagenes/logo-aireuropa.png" alt="Air Europa" width="160" height="35" loading="lazy"></li>
        </ul>
        <a class="footer-button" href="./colaboradores.html">Ver todos los colaboradores <svg class="footer-external-icon" aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 8h12M9 3l5 5-5 5"/></svg></a>
      </section>
    </div>

    <div class="footer-contact">
      <div>
        <h2>Anúnciate con nosotros</h2>
        <p>Forma parte de la familia del Collerense.</p>
      </div>
      <a class="footer-button" href="./contacto.html">Contactar con el club <svg class="footer-external-icon" aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 8h12M9 3l5 5-5 5"/></svg></a>
    </div>

    <div class="footer-bottom">
      <p>Collerense · Club de Fútbol · Mallorca</p>
      <nav aria-label="Información legal en la web oficial del club">
        <a href="https://udcollerense.inxenio.com/privacidad/">Política de privacidad</a>
        <a href="https://udcollerense.inxenio.com/cookies/">Cookies</a>
        <a href="https://udcollerense.inxenio.com/aviso-legal/">Aviso legal</a>
      </nav>
      <a class="footer-top" href="#inicio">Volver arriba ↑</a>
    </div>
  </footer>
    `
  }
}

customElements.define('footer-component', Footer);
