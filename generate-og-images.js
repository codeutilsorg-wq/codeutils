const puppeteer = require('puppeteer');
const sharp = require('sharp');
const fs = require('fs');

const tools = require('./data/tools.json');

async function generateOGImage(tool) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          margin: 0;
          padding: 0;
          width: 1200px;
          height: 630px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #3498db 0%, #ecf0f1 100%);
          font-family: 'Inter', 'Roboto', sans-serif;
        }
        .icon {
          font-size: 120px;
          color: #2c3e50;
          margin-bottom: 20px;
        }
        h1 {
          font-size: 72px;
          color: #2c3e50;
          margin: 0 0 15px 0;
          font-weight: bold;
          text-align: center;
          padding: 0 40px;
        }
        p {
          font-size: 36px;
          color: #7f8c8d;
          margin: 0 0 40px 0;
          max-width: 900px;
          text-align: center;
          padding: 0 40px;
        }
        .badge {
          font-size: 24px;
          color: #27ae60;
          margin: 30px 0;
        }
        .url {
          font-size: 28px;
          color: #95a5a6;
        }
      </style>
    </head>
    <body>
      <div class="icon">${tool.icon}</div>
      <h1>${tool.name}</h1>
      <p>${tool.description}</p>
      <div class="badge">🔒 100% Private • Free Forever</div>
      <div class="url">codeutils.org</div>
    </body>
    </html>
  `;

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  await page.setContent(html, { waitUntil: 'networkidle0' });

  const screenshot = await page.screenshot({ type: 'png' });
  await browser.close();

  // Optimize with sharp
  await sharp(screenshot)
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(`./images/og/${tool.id}.png`);

  console.log(`✓ Generated ${tool.id}.png`);
}

async function generateHomepageImage() {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          margin: 0;
          padding: 0;
          width: 1200px;
          height: 630px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #3498db 0%, #ecf0f1 100%);
          font-family: 'Inter', 'Roboto', sans-serif;
        }
        h1 {
          font-size: 120px;
          color: #2c3e50;
          margin: 0 0 20px 0;
          font-weight: bold;
        }
        .subtitle {
          font-size: 48px;
          color: #7f8c8d;
          margin: 0 0 50px 0;
        }
        .badge {
          font-size: 32px;
          color: #27ae60;
          margin: 30px 0;
        }
        .url {
          font-size: 36px;
          color: #95a5a6;
          margin-top: 40px;
        }
      </style>
    </head>
    <body>
      <h1>Code Utils</h1>
      <div class="subtitle">62+ Free Developer Tools</div>
      <div class="badge">🔒 100% Private • No Registration • Free Forever</div>
      <div class="url">codeutils.org</div>
    </body>
    </html>
  `;

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  await page.setContent(html, { waitUntil: 'networkidle0' });

  const screenshot = await page.screenshot({ type: 'png' });
  await browser.close();

  // Optimize with sharp
  await sharp(screenshot)
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(`./images/og/codeutils-home.png`);

  console.log('✓ Generated codeutils-home.png');
}

async function generateAll() {
  if (!fs.existsSync('./images/og')) {
    fs.mkdirSync('./images/og', { recursive: true });
  }

  console.log('Generating homepage OG image...');
  await generateHomepageImage();

  console.log('\nGenerating tool OG images...');
  for (const tool of tools) {
    await generateOGImage(tool);
  }

  console.log('\n✓ All OG images generated!');
  console.log(`Total images created: ${tools.length + 1}`);
}

generateAll().catch(console.error);
