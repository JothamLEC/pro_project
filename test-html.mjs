import { chromium } from 'playwright';

async function checkHTML() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:4321/landing', { waitUntil: 'networkidle' });
  
  const html = await page.content();
  console.log('HTML Content (first 3000 chars):');
  console.log(html.substring(0, 3000));
  
  await browser.close();
}

checkHTML().catch(console.error);
