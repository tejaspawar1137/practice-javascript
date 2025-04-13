
import puppeteer from 'puppeteer';
import fs from 'fs'
import path from 'path'
import critial from 'critical'

const URLS = [
  '/',
  '/products',
  '/product/1',
  '/contact'
];

const outputDir = path.join(__dirname, 'build');
const criticalCssDir = path.join(__dirname, 'build/critical-css');
if (!fs.existsSync(criticalCssDir)) fs.mkdirSync(criticalCssDir);

(async () => {
  const browser = await puppeteer.launch();

  for (let url of URLS) {
    const page = await browser.newPage();
    const fullUrl = `http://localhost:3000${url}`;
    console.log(`Processing Critical CSS for: ${fullUrl}`);

    await page.goto(fullUrl, { waitUntil: 'networkidle2' });

    const htmlPath = path.join(outputDir, `${url.replace(/\//g, '_')}.html`);
    const cssPath = path.join(criticalCssDir, `${url.replace(/\//g, '_')}.css`);

    await critical.generate({
      base: outputDir,
      html: await page.content(),
      inline: false,
      css: [
        path.join(outputDir, 'static/css/main.css')
      ],
      width: 1300,
      height: 900,
      minify: true,
      extract: true
    }).then(({ css }) => {
      fs.writeFileSync(cssPath, css);
      console.log(`✅ Critical CSS Generated for ${url}`);
    });

    await page.close();
  }

  await browser.close();
  console.log('🚀 All Critical CSS Generated Successfully!');
})();
