import { chromium } from 'playwright';

async function debugMarquee() {
  console.log('🚀 Starting Playwright debug...\n');
  
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // Navigate to landing page
  console.log('📍 Navigating to http://localhost:4322/landing');
  await page.goto('http://localhost:4322/landing', { waitUntil: 'networkidle' });
  
  // Wait a bit for animations
  await page.waitForTimeout(2000);
  
  // Check if marquee container exists
  const marqueeExists = await page.locator('.marquee-container').count();
  console.log(`✅ Marquee container found: ${marqueeExists > 0}`);
  
  // Get marquee container styles
  const containerStyles = await page.evaluate(() => {
    const container = document.querySelector('.marquee-container');
    if (!container) return null;
    const computed = window.getComputedStyle(container);
    return {
      display: computed.display,
      position: computed.position,
      width: computed.width,
      height: computed.height,
      transform: computed.transform,
      overflow: computed.overflow,
      visibility: computed.visibility,
      opacity: computed.opacity,
      zIndex: computed.zIndex
    };
  });
  
  console.log('\n📊 Marquee Container Styles:');
  console.log(JSON.stringify(containerStyles, null, 2));
  
  // Check images
  const imageCount = await page.locator('.marquee-content img').count();
  console.log(`\n🖼️  Total images in DOM: ${imageCount}`);
  
  // Check if images are loaded
  const imagesLoaded = await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll('.marquee-content img'));
    return images.map(img => ({
      src: img.src,
      complete: img.complete,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      width: img.offsetWidth,
      height: img.offsetHeight,
      visible: img.offsetParent !== null
    }));
  });
  
  console.log('\n🖼️  Image Details (first 3):');
  console.log(JSON.stringify(imagesLoaded.slice(0, 3), null, 2));
  
  // Check parent background wrapper
  const backgroundWrapper = await page.evaluate(() => {
    const wrapper = document.querySelector('.absolute.inset-0.size-full');
    if (!wrapper) return null;
    const computed = window.getComputedStyle(wrapper);
    return {
      display: computed.display,
      position: computed.position,
      width: computed.width,
      height: computed.height,
      overflow: computed.overflow,
      zIndex: computed.zIndex,
      backgroundColor: computed.backgroundColor
    };
  });
  
  console.log('\n📦 Background Wrapper Styles:');
  console.log(JSON.stringify(backgroundWrapper, null, 2));
  
  // Take screenshot
  await page.screenshot({ path: 'marquee-debug.png', fullPage: true });
  console.log('\n📸 Screenshot saved as marquee-debug.png');
  
  await browser.close();
  console.log('\n✅ Debug complete!');
}

debugMarquee().catch(console.error);
