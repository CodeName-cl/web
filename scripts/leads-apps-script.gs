/**
 * Receptor de leads de las landings de campaña → Google Sheet.
 *
 * Instalación (una sola vez):
 *   1. Crea un Google Sheet (ej. "Leads campaña Navidad 2026") y compártelo con Nico.
 *   2. En el Sheet: Extensiones → Apps Script. Borra el contenido y pega este archivo.
 *   3. (Opcional) Completa NOTIFY_EMAIL con quien debe recibir aviso de cada lead.
 *   4. Implementar → Nueva implementación → Tipo "Aplicación web".
 *        Ejecutar como: Yo   ·   Quién tiene acceso: Cualquier persona
 *   5. Autoriza los permisos y copia la URL que termina en /exec.
 *   6. Pega esa URL en campaign.leadEndpoint (src/config/landings.ts) y publica.
 *
 * Si cambias este código, usa Implementar → Gestionar implementaciones → Editar →
 * "Nueva versión" para que la URL /exec siga siendo la misma.
 */

const SHEET_NAME = "Leads";
/** Email(s) separados por coma que reciben un aviso por cada lead. Vacío = sin aviso. */
const NOTIFY_EMAIL = "";

const HEADERS = [
  "Fecha", "Producto", "Nombre", "Email", "Tienda", "Shopify Plus",
  "Pregunta", "Respuesta", "utm_source", "utm_medium", "utm_campaign",
  "utm_content", "utm_term", "Landing", "Referrer", "Estado",
];
const PRODUCT_NAMES = { ps: "Product Sentinel", lcf: "LocFix" };

function doPost(e) {
  try {
    const d = JSON.parse((e && e.postData && e.postData.contents) || "{}");

    // Antispam: el campo trampa "website" está oculto para personas.
    if (d.website) return json_({ ok: true });
    if (!PRODUCT_NAMES[d.product] || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email || "")) {
      return json_({ ok: false, error: "invalid" });
    }

    const q = d.qualifier || {};
    const row = [
      new Date(),
      PRODUCT_NAMES[d.product],
      d.name, d.email, d.store_url, d.shopify_plus,
      q.question, q.answer,
      d.utm_source, d.utm_medium, d.utm_campaign, d.utm_content, d.utm_term,
      d.landing_url, d.referrer,
      d.product === "lcf" && d.shopify_plus === "no" ? "no-plus" : "nuevo",
    ].map(clean_);

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      sheet_().appendRow(row);
    } finally {
      lock.releaseLock();
    }

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        replyTo: String(d.email),
        subject: `Nuevo lead ${PRODUCT_NAMES[d.product]}: ${d.name} (${d.store_url})`,
        body: HEADERS.slice(1, 15).map((h, i) => `${h}: ${row[i + 1] || "-"}`).join("\n") +
          "\n\nPlanilla: " + SpreadsheetApp.getActiveSpreadsheet().getUrl(),
      });
    }
    return json_({ ok: true });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: "server" });
  }
}

/** Crea la hoja y los encabezados si no existen. */
function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) sh = ss.insertSheet(SHEET_NAME);
  if (sh.getLastRow() === 0) {
    sh.appendRow(HEADERS);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
  }
  return sh;
}

/** Recorta y evita que un texto se interprete como fórmula en la planilla. */
function clean_(v) {
  if (v instanceof Date) return v;
  const s = String(v == null ? "" : v).trim().slice(0, 500);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
