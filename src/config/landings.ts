/**
 * Configuración de las landings de campaña (Navidad / Black Friday 2026).
 * Las de ProductSentinel viven en productsentinel.com (assets/campaign.js);
 * aquí solo quedan redirecciones hacia allá.
 *
 * Todo lo marcado con TODO depende de las "preguntas abiertas" del documento
 * de requerimientos. Mientras un valor esté vacío, la landing sigue
 * funcionando: el bloque correspondiente se oculta o muestra un placeholder.
 */

export const campaign = {
  /** Google Tag Manager del sitio (mismo contenedor que codename.cl). */
  gtmId: "GTM-5CWP9SPQ",
  /** TODO: ID del píxel de Meta. Vacío = no se carga el píxel. */
  metaPixelId: "",
  /**
   * Aplicación web de Google Apps Script que guarda cada lead en el Google Sheet
   * "Leads campaña Navidad 2026" (código en scripts/leads-apps-script.gs).
   * Vacío = solo se registra el evento y se muestra el mensaje de gracias.
   */
  leadEndpoint: "https://script.google.com/macros/s/AKfycbznpkaag95wVwCcjZRoPF2UwNbFMUba15Mq6zxP3XnykorZqfofA2zKM-V5Bgc1PlhV/exec",
  /** Agenda de citas de Google Calendar (demo / reunión). */
  scheduleUrl: "https://calendar.app.google/Ta8whVSJjQnzwsB18",
  /** Widget de chat.codename.cl. Cada producto usa su propio space (products.*.chat). */
  chatWidgetSrc: "https://chat.codename.cl/widget.js",
};

export const products = {
  locfix: {
    key: "lcf",
    name: "LocFix AI",
    icon: "/images/icons/Lockfix.webp?1",
    installUrl: "https://apps.shopify.com/validador-de-direcciones",
    /** Video "LocFix en un checkout real" (52 s, 1080p). Miniatura en videoPoster. */
    videoUrl: "/videos/locfix-en-un-checkout.mp4",
    videoPoster: "/videos/locfix-en-un-checkout.jpg",
    /**
     * TODO: space de LocFix en chat.codename.cl (dashboard → Espacios → la clave bajo
     * el nombre es el space; el workspace es el del equipo). Vacío = sin chat.
     */
    chat: { workspace: "ws_codename", space: "2cf286a3-d7a8-4b27-862a-868237a155ce" },
    rating: { value: "4.8", count: 156 },
    pricing: {
      assistedMonthlyUsd: 35,
    },
  },
} as const;

/** Agrega los UTMs vigentes a un enlace saliente (Shopify los respeta). */
export function withUtm(url: string, product: string): string {
  if (!url) return url;
  const u = new URL(url);
  if (!u.searchParams.has("utm_source")) {
    u.searchParams.set("utm_source", "landing");
    u.searchParams.set("utm_medium", "web");
    u.searchParams.set("utm_campaign", `navidad-2026-${product}`);
  }
  return u.toString();
}
