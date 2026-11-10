---
title: "Configuración inicial de LocFix AI"
description: "Activa LocFix AI en el checkout de Shopify en 10 minutos: corrige la comuna, autocompleta direcciones con Google y muestra un mapa de entrega. Chile, Perú y México."
date: 2026-11-10
author:
  name: "Ricardo Silva"
  url: "https://www.linkedin.com/in/rickyoncode"
image: "/docs/locfix-configuracion-inicial/portada.webp"
video: "/docs/locfix-configuracion-inicial/instalacion.mp4"
videoPoster: "/docs/locfix-configuracion-inicial/instalacion-poster.webp"
tags: ["shopify", "locfix", "checkout", "direcciones", "google-maps"]
---

<div class="doc-summary">
  <div>
    <span class="doc-label">Qué hace</span>
    <p>Corrige la <b>comuna, distrito o municipio</b> mientras el comprador escribe, <b>autocompleta</b> direcciones reales y muestra un <b>mapa</b> del punto de entrega. Menos pedidos devueltos por direcciones mal escritas.</p>
  </div>
  <div>
    <span class="doc-label">Qué necesitas</span>
    <ul>
      <li>Shopify con checkout personalizable (Checkout Extensibility)</li>
      <li>Cuenta de Google Cloud con facturación activa (solo para autocompletado y mapa)</li>
    </ul>
  </div>
  <div>
    <span class="doc-label">Tiempo y países</span>
    <p><b>10 minutos</b> · 🇨🇱 Chile · 🇵🇪 Perú · 🇲🇽 México</p>
  </div>
</div>

<div class="doc-map">
  <a href="#paso-1"><b>1</b> Instalar y elegir plan</a>
  <a href="#paso-2"><b>2</b> Bloque de validación</a>
  <a href="#paso-3"><b>3</b> Autocompletado</a>
  <a href="#paso-4"><b>4</b> Key de Google</a>
  <a href="#paso-5"><b>5</b> Mapa <small>opcional</small></a>
  <a href="#paso-6"><b>6</b> Probar</a>
</div>

<h2 id="paso-1"><span class="doc-step">1</span> Instala la app y elige tu plan</h2>

<p class="doc-where">Shopify App Store → <a href="https://apps.shopify.com/validador-de-direcciones">LocFix AI</a> → Instalar</p>

Al abrir la app verás tu plan. Haz clic en **Empezar plan Starter** y aprueba el cargo: los primeros días son de prueba gratis y puedes cancelar cuando quieras desde la misma pantalla.

![Pantalla de inicio de LocFix AI en el admin de Shopify](/docs/locfix-configuracion-inicial/01-inicio.webp)

<h2 id="paso-2"><span class="doc-step">2</span> Agrega la validación de dirección al checkout</h2>

<p class="doc-where">Configuración → Checkout → Personalizar → paso <b>Información</b></p>

1. Bajo la dirección de despacho, haz clic en **Agregar bloque de app**.
2. Elige **check-direction-extension** (validación de dirección de LocFix).
3. Haz clic en **Guardar**.

![Agregar el bloque de validación de LocFix en el editor del checkout](/docs/locfix-configuracion-inicial/02-bloque-validacion.webp)

Con esto la validación ya funciona: si el comprador escribe *Nunoa*, LocFix la corrige a *Ñuñoa*; si la comuna no existe en la región elegida, le pide revisarla antes de continuar. **No necesita API key.**

<div class="doc-callout tip"><b>Personaliza los mensajes.</b> En la barra lateral del bloque puedes cambiar cada texto que ve el comprador (dirección válida, comuna inválida, sugerencia, error) y activar la casilla «Confirmo que mi dirección es correcta».</div>

<h2 id="paso-3"><span class="doc-step">3</span> Activa LocFix como autocompletado</h2>

<p class="doc-where">Configuración → Checkout → <b>Autocompletado de direcciones</b></p>

Elige **LocFix AI** como proveedor y guarda. A partir de ahora las sugerencias que ve el comprador vienen de LocFix, ajustadas a cada país (en Chile, por ejemplo, completan la comuna correcta).

![Elegir LocFix AI como proveedor de autocompletado](/docs/locfix-configuracion-inicial/04-autocompletado.webp)

Así se ve en el checkout: el comprador escribe la calle y elige una dirección real con su comuna.

![Sugerencias de LocFix en el checkout](/docs/locfix-configuracion-inicial/03-sugerencias.webp)

<h2 id="paso-4"><span class="doc-step">4</span> Crea tu API key de Google (servidor)</h2>

<p class="doc-where"><a href="https://console.cloud.google.com/">console.cloud.google.com</a> → APIs y servicios</p>

1. **Biblioteca:** activa **Places API** y **Geocoding API**.
2. **Credenciales → Crear credenciales → Clave de API.**
3. Edita la key:
   - **Restricciones de API:** *Restringir clave* → solo **Places API** y **Geocoding API**.
   - **Restricciones de aplicaciones:** **Ninguna**.
4. Copia la key y pégala en el editor del checkout, bloque de autocompletado de LocFix, campo **Api google Maps**. Guarda.

![Restringir la key a Places API y Geocoding API](/docs/locfix-configuracion-inicial/05-key-servidor.webp)

<div class="doc-callout warn"><b>No la restrinjas por sitio web.</b> LocFix usa esta key desde su servidor, nunca en el navegador del comprador. Con una restricción de «referentes HTTP», Google la rechaza y el autocompletado deja de funcionar.</div>

<h2 id="paso-5"><span class="doc-step">5</span> Muestra un mapa de la dirección <small>opcional</small></h2>

<p class="doc-where">Editor del checkout → Agregar bloque de app → <b>checkout-ui-address-map</b></p>

El mapa ayuda al comprador a confirmar dónde llega su pedido. Necesita **una segunda key**, de navegador:

| Campo del bloque de mapa | Qué key | APIs | Restricción |
| --- | --- | --- | --- |
| **API key de Google Maps (navegador)** | Una nueva | Maps JavaScript API | Sitios web: `https://tutienda.cl/*` y `https://tutienda.myshopify.com/*` |
| **API key de Google Maps (servidor)** | La del paso 4 | Places API + Geocoding API | Ninguna |

Activa **Mostrar mapa de la dirección**, pega las dos keys y guarda. Puedes ajustar el título, el zoom y el mensaje de ubicación aproximada.

![Bloque de mapa con las dos keys](/docs/locfix-configuracion-inicial/07-mapa.webp)

<h2 id="paso-6"><span class="doc-step">6</span> Prueba un checkout</h2>

Abre tu tienda, agrega un producto y ve al checkout. Escribe una dirección con la comuna mal escrita (*Nunoa*, *Stgo Centro*, *Penalolen*) y comprueba que:

- ✅ aparecen sugerencias de direcciones reales,
- ✅ la comuna se corrige sola,
- ✅ el mapa muestra el punto (si lo activaste).

![Checkout con la dirección corregida y el mapa](/docs/locfix-configuracion-inicial/08-checkout.webp)

## Problemas frecuentes

| Síntoma | Causa probable | Solución |
| --- | --- | --- |
| No aparecen sugerencias | LocFix no está elegido como proveedor | Paso 3 |
| No aparecen sugerencias | La key no tiene **Places API** o está restringida por sitio web | Paso 4: revisa las APIs y deja «Ninguna» en aplicaciones |
| «The provided API key is expired» o «API key not valid» | La key se borró o se regeneró en Google Cloud | Crea una nueva y pégala otra vez |
| El mapa no carga | La key de navegador no tiene **Maps JavaScript API** o no permite tu dominio | Paso 5 |
| La comuna no se corrige | Falta el bloque de validación en el paso Información | Paso 2 |

<div class="doc-help">¿Algo no funciona? Escríbenos a <a href="mailto:soporte@codename.cl">soporte@codename.cl</a> con el nombre de tu tienda y te ayudamos a configurarlo.</div>
