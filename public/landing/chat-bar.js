/*
 * Barra de chat fija en el teléfono: "¿Quieres saber más? Déjanos tu correo".
 * Es la entrada al chat de chat.codename.cl en mobile (la burbuja sola se ignora):
 *   1. Guarda el correo como lead en el Google Sheet (form_submit).
 *   2. Abre el chat con ese correo ya ingresado, para que el visitante escriba.
 * Si el visitante ya tiene conversación, la barra solo ofrece "Abrir chat".
 * Se oculta mientras el formulario de contacto está en pantalla.
 * Copia idéntica en codename.cl (public/landing/chat-bar.js) y productsentinel.com
 * (assets/chat-bar.js): si cambias una, cambia la otra.
 */
window.initChatBar = function (opts) {
  var MOBILE = "(max-width: 767px)";
  var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var DONE_KEY = "chat_bar_email";
  var mobile = window.matchMedia(MOBILE);

  // ---- Ajustes del widget en el teléfono (Shadow DOM abierto) ----
  // Sin burbuja (la barra la reemplaza), panel sobre la barra y campos de 16 px
  // para que iOS no haga zoom al escribir.
  var shadowCss = "@media " + MOBILE + "{.bubble{display:none!important}"
    + ".panel{bottom:12px!important;height:calc(100dvh - var(--chat-lift,0px) - 84px)!important;max-height:560px}"
    + "input,textarea{font-size:16px!important}}";
  function root() { var h = document.querySelector("[data-codename-chat]"); return h && h.shadowRoot; }
  function styleWidget() {
    var r = root();
    if (!r) return false;
    var st = document.createElement("style");
    st.textContent = shadowCss;
    r.appendChild(st);
    return true;
  }
  if (!styleWidget()) {
    var mo = new MutationObserver(function () { if (styleWidget()) mo.disconnect(); });
    mo.observe(document.body, { childList: true });
  }

  function hasChat() { try { return !!localStorage.getItem(opts.chatKey); } catch (e) { return false; } }
  function savedEmail() { try { return sessionStorage.getItem(DONE_KEY) || ""; } catch (e) { return ""; } }

  // Abre el panel y, si se da un correo, completa el paso "Correo → Continuar" del widget.
  function openChat(email) {
    var tries = 0;
    (function step() {
      var r = root();
      if (!r) { if (++tries < 40) setTimeout(step, 250); return; }
      if (!r.querySelector(".panel")) { var b = r.querySelector(".bubble"); if (b) b.click(); }
      if (!email) return;
      var input = r.querySelector("#codename-email");
      if (!input) { if (++tries < 40) setTimeout(step, 150); return; }
      input.value = email;
      input.dispatchEvent(new Event("input", { bubbles: true }));
      var go = r.querySelector("button.primary");
      if (go) go.click();
    })();
  }

  // ---- Barra ----
  var bar = document.createElement("div");
  bar.className = "cbar";
  bar.setAttribute("role", "region");
  bar.setAttribute("aria-label", "Contacto");
  var icon = '<span class="cbar-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></span>';
  function renderForm() {
    bar.innerHTML = '<div class="cbar-head">' + icon + '<div><p class="cbar-title">¿Quieres saber más?</p>'
      + '<p class="cbar-sub">Déjanos tu correo y te contactamos.</p></div></div>'
      + '<form class="cbar-form" novalidate><label class="cbar-sr" for="cbar-email">Tu correo</label>'
      + '<input id="cbar-email" class="cbar-input" type="email" inputmode="email" autocomplete="email" placeholder="tu@email.com" required>'
      + '<button class="cbar-send" type="submit">Enviar <span aria-hidden="true">→</span></button></form>';
    bar.querySelector("form").addEventListener("submit", onSubmit);
  }
  function renderDone(email) {
    bar.innerHTML = '<div class="cbar-head">' + icon + '<div><p class="cbar-title">' + (email ? "¡Gracias! Te escribiremos." : "Tienes una conversación abierta") + '</p>'
      + '<p class="cbar-sub">' + (email ? "También puedes escribirnos ahora por chat." : "Sigue hablando con nuestro equipo.") + '</p></div>'
      + '<button class="cbar-send" type="button">Abrir chat</button></div>';
    bar.querySelector("button").addEventListener("click", function () { openChat(""); });
  }

  function onSubmit(e) {
    e.preventDefault();
    var input = bar.querySelector(".cbar-input");
    var email = input.value.trim();
    if (!EMAIL.test(email)) { input.setAttribute("aria-invalid", "true"); input.focus(); return; }
    input.removeAttribute("aria-invalid");
    var payload = Object.assign({
      product: opts.product, name: "", email: email, store_url: "", shopify_plus: "",
      qualifier: { question: "Origen", answer: "Barra de chat (teléfono)" },
      landing_url: location.origin + location.pathname, referrer: document.referrer || "",
      submitted_at: new Date().toISOString(), website: "",
    }, window.landingUtm || {});
    if (opts.endpoint) {
      fetch(opts.endpoint, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(payload), keepalive: true }).catch(function () {});
    }
    window.landingTrack("form_submit", { cta_location: "chat_bar" });
    try { sessionStorage.setItem(DONE_KEY, email); } catch (err) {}
    renderDone(email);
    if (opts.chatKey && !hasChat()) openChat(email); else openChat("");
  }

  if (savedEmail()) renderDone(savedEmail());
  else if (hasChat()) renderDone("");
  else renderForm();
  document.body.appendChild(bar);

  // ---- Visibilidad y espacio: oculta la barra sobre el formulario y sube el chat ----
  var hidden = false;
  function sync() {
    var on = mobile.matches && !hidden;
    bar.classList.toggle("is-on", on);
    var h = on ? bar.offsetHeight : 0;
    document.documentElement.style.setProperty("--chat-lift", h + "px");
    document.documentElement.style.setProperty("--cbar-h", (mobile.matches ? bar.offsetHeight : 0) + "px");
  }
  var form = opts.hideOver && document.querySelector(opts.hideOver);
  if (form && "IntersectionObserver" in window) {
    new IntersectionObserver(function (en) { hidden = en[0].isIntersecting; sync(); }).observe(form);
  }
  if (mobile.addEventListener) mobile.addEventListener("change", sync);
  window.addEventListener("resize", sync);
  sync();
};
