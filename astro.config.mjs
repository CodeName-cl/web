import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://codename.cl",
  trailingSlash: "never",
  integrations: [sitemap()],
  redirects: {
    // The old API-key guide named the wrong APIs (Maps Embed); its content now
    // lives in step 4 of the LocFix setup guide.
    "/docs/como-obtener-api-key-google-maps-shopify": "/docs/locfix-configuracion-inicial#paso-4",
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
