# Guion: video "LocFix AI en tu checkout" (instalación paso a paso)

**Objetivo:** que un merchant deje LocFix funcionando sin leer la guía. Va arriba del título en `codename.cl/docs/locfix-configuracion-inicial/`.
**Duración:** 80–90 s. **Formato:** 16:10 (1600×1000) o 16:9 (1920×1080), MP4 H.264, menos de 15 MB, con subtítulos incrustados en español.
**Branding Codename:** fondo `#020617`, acentos naranja `#eb5e28` (pasos, recuadros) e índigo `#6366f1` (rutas), Inter / Archivo Narrow / JetBrains Mono. Logo CODE/NAME arriba a la izquierda en todas las escenas.

Hoy en `public/docs/locfix-configuracion-inicial/instalacion.mp4` hay un **animatic de 57 s** hecho con las imágenes de la guía (sin voz). Sirve para publicar ya; este guion es para reemplazarlo por la versión grabada con voz.

| # | Tiempo | Imagen en pantalla | Texto en pantalla | Locución |
|---|---|---|---|---|
| 1 | 0–4 s | Portada: checkout con «Nunoa» corregido a Ñuñoa | **LocFix AI en tu checkout** | «Las direcciones mal escritas cuestan despachos perdidos. LocFix las corrige antes de que el cliente pague.» |
| 2 | 4–12 s | Grabación real: el comprador escribe «Nunoa» y el campo cambia a «Ñuñoa»; aparece «Dirección válida» | «Nunoa» → Ñuñoa | «Corrige la comuna, el distrito o el municipio en Chile, Perú y México.» |
| 3 | 12–20 s | Admin de Shopify → LocFix AI → **Empezar plan Starter** (zoom al botón) | Paso 1 · Elige tu plan | «Instala LocFix desde la Shopify App Store y activa el plan. Los primeros días son gratis.» |
| 4 | 20–32 s | Configuración → Checkout → Personalizar → paso Información → **Agregar bloque de app → check-direction-extension** → Guardar | Paso 2 · Bloque de validación | «En el editor del checkout, agrega el bloque de validación bajo la dirección y guarda. Con esto la validación ya funciona, sin API key.» |
| 5 | 32–40 s | Configuración → Checkout → **Autocompletado de direcciones → LocFix AI** → Guardar | Paso 3 · Autocompletado | «Luego elige LocFix como proveedor de autocompletado de direcciones.» |
| 6 | 40–58 s | Google Cloud: Biblioteca → activar **Places API** y **Geocoding API** → Credenciales → Crear clave → Restricciones: aplicaciones **Ninguna**, API **Places + Geocoding** → copiar → pegar en el bloque de autocompletado | Paso 4 · Tu API key de Google | «Crea una API key en Google Cloud con Places y Geocoding. En aplicaciones deja Ninguna: LocFix la usa desde su servidor. Pégala en el bloque de autocompletado.» |
| 7 | 58–68 s | Editor del checkout → bloque **checkout-ui-address-map** → activar mapa → pegar key de navegador y key de servidor | Paso 5 · Mapa (opcional) | «Si quieres un mapa del punto de entrega, agrega el bloque de mapa con una segunda key, de navegador.» |
| 8 | 68–82 s | Grabación real del checkout: escribe «Av Irarrazaval», elige la sugerencia de Ñuñoa, se completa la dirección y el envío se calcula para Ñuñoa | Paso 6 · Pruébalo | «Prueba un checkout: sugerencias reales, la comuna corregida y el envío correcto.» |
| 9 | 82–88 s | Cierre en negro con logo | **codename.cl/docs** · soporte@codename.cl | «¿Dudas? Escríbenos a soporte@codename.cl.» |

## Cómo grabar las escenas reales

- **Tienda:** una de desarrollo con *LocFix AI* instalada y con el nombre de tienda **neutro** (por ejemplo «Tienda Demo»), sin otras apps visibles en el checkout (en `ricky-checkout-extensibility` aparecen campos de RUT y factura de BillBoost: no usar esa tienda para el video final).
- **Google Cloud:** usar un **proyecto de prueba** y borrar la key y el proyecto al terminar; difuminar la key si aparece completa.
- Ocultar emails, nombres reales y URLs internas. Resolución 1600×1000 o mayor, cursor visible, clics resaltados.
- Las capturas del checkout (escenas 2 y 8) se pueden grabar en `https://ricky-checkout-extensibility.myshopify.com` (contraseña `test`) si no hay otra tienda, recortando la columna de la dirección.
