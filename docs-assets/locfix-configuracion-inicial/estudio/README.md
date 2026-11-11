# Estudio de imágenes y video de la guía de LocFix

- `studio.html?f=<nombre>`: cada imagen de la guía (1600×1000), con encabezado compacto (logo, paso y título en una línea). Nombres: `portada`, `instalacion-poster`, `01-inicio`, `02-bloque-validacion`, `03-sugerencias`, `04-autocompletado`, `05-key-servidor`, `07-mapa`, `08-checkout`, `cierre`.
- `studio.html?anim=<video>`: los videos (`completo`, `correccion`, `autocompletado`, `mapa`). Una línea de tiempo (`scenes` en el script) mueve el cursor con curvas suaves, hace clic y revela recuadros y notas; `window.setT(t)` pinta el instante `t`.
- `render.mjs`: con Chrome headless y `puppeteer-core`.
  - `PUPPETEER_PATH=<ruta a puppeteer-core> node render.mjs stills` → PNG de cada imagen.
  - `node render.mjs video <video>` → `frames-<video>/f00000.jpg…` a 30 fps, cuadro por cuadro (sin saltos), y luego
    `ffmpeg -framerate 30 -i frames-<video>/f%05d.jpg -c:v libx264 -crf 21 -preset slow -pix_fmt yuv420p -movflags +faststart instalacion.mp4`.
- Exportar las imágenes a WebP calidad 86 y copiarlas a `public/docs/locfix-configuracion-inicial/`.
- `raw-*.png`: capturas reales del checkout de prueba (escenas `03`, `08` y portada). `01`, `02`, `04`, `05` y `07` son ilustraciones.
