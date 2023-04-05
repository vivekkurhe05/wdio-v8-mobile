require('dotenv').config();
const {Eyes} = require('@applitools/eyes-webdriverio');
const eyes = new Eyes();
eyes.setApiKey(process.env.APPLITOOLS_ACCOUNT_API_KEY);

async function takeScreenshot(title, screen, result) {
    try {
        await eyes.open(driver, title, screen);
        await eyes.checkWindow(result);
        await eyes.close();
    } finally {
        await eyes.abortIfNotClosed();
    }
}

module.exports = {
    takeScreenshot
}