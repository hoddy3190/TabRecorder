const puppeteer = require('puppeteer');
const path = require('path');
const { spawn } = require('child_process');

const scriptPath = path.join(__dirname, 'applescript/startrecording.applescript');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: [
            `--disable-extensions-except=/Users/hodaka.suzuki/ghq/github.com/hoddy3190/TabRecorder/src/`,
            `--whitelisted-extension-id=bcbleloecdmlleapfcliebpebiiecfce`
        ],
    });
    const page = await browser.newPage();
    await page.goto('file:///Users/hodaka.suzuki/ghq/github.com/hoddy3190/gamecube/graph_movie/static/index.html');
    // await page.goto("https://www.google.com");
    // await page.screenshot({ path: 'example.png' });

    const ascript = spawn('osascript', [scriptPath]);

    // await page.keyboard.down('AltLeft');
    // await page.keyboard.down('ShiftLeft');
    // await page.keyboard.press('KeyP');
    // await page.keyboard.up('AltLeft');
    // await page.keyboard.up('ShiftLeft');

    // await browser.close();
})();