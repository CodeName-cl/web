// Renders the guide images (`stills`) or the animation frames (`video`) of
// studio.html with headless Chrome, stepping the animation clock so every
// frame is exact (no dropped frames like a live screencast).
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const puppeteer = require(process.env.PUPPETEER_PATH);
const here = path.dirname(fileURLToPath(import.meta.url));
const mode = process.argv[2] || 'stills';
const videoName = process.argv[3] || 'completo';
const url = 'file://' + path.join(here, 'studio.html');

const browser = await puppeteer.launch({
  executablePath: '/usr/bin/google-chrome',
  headless: true,
  args: ['--no-sandbox', '--hide-scrollbars', '--force-color-profile=srgb'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1600, height: 1000, deviceScaleFactor: 1 });

if (mode === 'stills') {
  const names = ['portada', 'instalacion-poster', '01-inicio', '02-bloque-validacion', '02b-mensajes', '03-sugerencias',
    '04-autocompletado', '05-key-servidor', '05b-key-navegador', '06-pegar-key', '07-mapa', '08-checkout',
    '09-mapa-checkout', 'p-correccion', 'p-autocompletado', 'p-mapa', 'cierre'];
  for (const n of names) {
    await page.goto(`${url}?f=${n}`, { waitUntil: 'networkidle0' });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: path.join(here, `${n}.png`) });
    console.log('still', n);
  }
  // Guide images: no header (the article already shows the step title),
  // cropped from just above the window down to the bottom.
  const article = ['01-inicio', '02-bloque-validacion', '02b-mensajes', '03-sugerencias', '04-autocompletado',
    '05-key-servidor', '06-pegar-key', '07-mapa', '08-checkout'];
  for (const n of article) {
    await page.goto(`${url}?f=${n}&article=1`, { waitUntil: 'networkidle0' });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: path.join(here, `art-${n}.png`), clip: { x: 0, y: 118, width: 1600, height: 882 } });
    console.log('article', n);
  }
} else {
  const fps = Number(process.env.FPS || 30);
  const out = path.join(here, `frames-${videoName}`);
  mkdirSync(out, { recursive: true });
  await page.goto(`${url}?anim=${videoName}`, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  const total = await page.evaluate(() => window.TOTAL);
  const count = Math.ceil(total * fps);
  for (let i = 0; i < count; i++) {
    await page.evaluate((t) => window.setT(t), i / fps);
    await page.screenshot({ path: path.join(out, `f${String(i).padStart(5, '0')}.jpg`), type: 'jpeg', quality: 92 });
    if (i % 150 === 0) console.log(`frame ${i}/${count}`);
  }
  console.log('frames', count, 'seconds', total);
}
await browser.close();
