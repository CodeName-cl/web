import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { withSlash } from "./src/utils/seo.mjs";

export default defineConfig({
  site: "https://codename.cl",
  trailingSlash: "never",
  integrations: [
    sitemap({
      // /product-sentinel/* solo redirige a productsentinel.com: no van al sitemap.
      filter: (page) => !page.includes("/product-sentinel/"),
      // Misma URL final que sirve GitHub Pages (con barra), igual que el canonical.
      serialize: (item) => ({ ...item, url: withSlash(item.url) }),
    }),
  ],
  redirects: {
    // The old API-key guide named the wrong APIs (Maps Embed); its content now
    // lives in step 4 of the LocFix setup guide.
    "/docs/como-obtener-api-key-google-maps-shopify": "/docs/locfix-configuracion-inicial#paso-4",
    // No hay portada en inglés: /en/ daba 404 en Google Search Console.
    "/en": "/en/blog/",
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
