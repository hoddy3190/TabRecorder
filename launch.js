const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: [
            `--disable-extensions-except=/Users/hodaka.suzuki/ghq/github.com/hoddy3190/TabRecorder/src/`,
            `--whitelisted-extension-id=bcbleloecdmlleapfcliebpebiiecfce`
        ],
    });
    const page = await browser.newPage();
    await page.goto('file:///Users/hodaka.suzuki/ghq/github.com/hoddy3190/TabRecorder/index.html');
    // await page.goto("https://www.google.com");
    // await page.screenshot({ path: 'example.png' });

    await page.keyboard.down('ControlLeft');
    await page.keyboard.down('ShiftLeft');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('ControlLeft');
    await page.keyboard.up('ShiftLeft');

    // await browser.close();
})();