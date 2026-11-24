/**
 * GitHub Pages sirve cada página como carpeta: /locfix redirige (301) a /locfix/.
 * Las URLs que damos a los buscadores (canonical, hreflang, og:url, sitemap) deben
 * ser la versión final con barra; si no, Google ve "canonical → redirect" y no indexa.
 * No toca URLs con extensión (.xml, .html), con query o hash, ni de otros sitios
 * que no sean codename.cl o productsentinel.com.
 */
const HOSTS = ["codename.cl", "productsentinel.com"];

export function withSlash(url) {
  if (!url) return url;
  let u;
  try { u = new URL(url); } catch { return url; }
  if (!HOSTS.includes(u.hostname)) return url;
  if (u.pathname.endsWith("/") || /\.[a-z0-9]+$/i.test(u.pathname)) return u.href;
  u.pathname += "/";
  return u.href;
}
