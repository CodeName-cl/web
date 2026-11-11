# Estudio de imágenes y video de la guía de LocFix

- `studio.html?f=<nombre>&article=1`: la versión para la guía, sin encabezado (el artículo ya muestra el título del paso); `render.mjs stills` la recorta a 1600×882 como `art-<nombre>.png`.
- `studio.html?f=<nombre>`: cada imagen con encabezado (1600×1000), para videos y redes, con encabezado compacto (logo, paso y título en una línea). Nombres: `portada`, `instalacion-poster`, `01-inicio`, `02-bloque-validacion`, `03-sugerencias`, `04-autocompletado`, `05-key-servidor`, `07-mapa`, `08-checkout`, `cierre`.
- `studio.html?anim=<video>`: los videos (`completo`, `correccion`, `autocompletado`, `mapa`). Una línea de tiempo (`scenes` en el script) mueve el cursor con curvas suaves, hace clic y revela recuadros y notas; `window.setT(t)` pinta el instante `t`.
- `render.mjs`: con Chrome headless y `puppeteer-core`.
  - `PUPPETEER_PATH=<ruta a puppeteer-core> node render.mjs stills` → PNG de cada imagen.
  - `node render.mjs video <video>` → `frames-<video>/f00000.jpg…` a 30 fps, cuadro por cuadro (sin saltos), y luego
    `ffmpeg -framerate 30 -i frames-<video>/f%05d.jpg -c:v libx264 -crf 21 -preset slow -pix_fmt yuv420p -movflags +faststart instalacion.mp4`.
- Exportar las imágenes a WebP calidad 86 y copiarlas a `public/docs/locfix-configuracion-inicial/`.
- `real-*.png`: capturas reales del admin de la tienda de desarrollo (en español), con las keys de Google tapadas. Las usan `01`, `02`, `02b`, `04`, `06`, `07` y la apertura del mapa.
- `raw-*.png`: capturas reales del checkout de prueba (`03`, `08`, portada, apertura de corrección y autocompletado).
- `05` y `05b` (Google Cloud) siguen siendo ilustraciones.
