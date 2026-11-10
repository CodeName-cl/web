# Estudio de imágenes y video de la guía de LocFix

- `studio.html?f=<nombre>`: cada imagen de la guía (1600×1000). Ábrelo en Chrome con la ventana en 1600×1000 y captura la pantalla, o usa `npx playwright screenshot`. Nombres: `portada`, `instalacion-poster`, `01-inicio`, `02-bloque-validacion`, `03-sugerencias`, `04-autocompletado`, `05-key-servidor`, `07-mapa`, `08-checkout`.
- `raw-*.png`: capturas reales del checkout (tienda de prueba) que usan `03`, `08` y la portada.
- `render-video.sh`: arma el animatic desde `frames/<nombre>.png` con ffmpeg (zoom suave y fundidos).
- Exportar a WebP calidad 86 y copiar a `public/docs/locfix-configuracion-inicial/`.
- `01`, `02`, `04`, `05` y `07` son **ilustraciones** (admin de Shopify y Google Cloud); si tienes acceso, reemplázalas por capturas reales con el mismo marco.
