// Inititalize the eyes SDK
const {Eyes, Target} = require('@applitools/eyes-webdriverio');
require('selenium')

const eyes = new Eyes();

// Set your private API key
eyes.setApiKey(process.env.APPLITOOLS_API_KEY)

// Allows you to gather your tests into separate groupings within the same file
describe('Applitools visual test', () => { 

    // command to take full page screenshot
    eyes.setForceFullPageScreenshot(true)
    
    // Represents a single test case
    it('Page should look ok', async () => {

        // Set browser to fullscreen
        browser.url('https://applitools.com/helloworld');
        
        try {

            // Set browser to fullscreen
            browser.windowHandleFullscreen()

            // Get the current size of the screen
            const viewportSize = browser.getViewportSize()

            // Start the test and set the browser's viewport size to
            await eyes.open(browser, 'Hello world example', 'Our first visual test', viewportSize);

            // Visual checkpoint #1
            await eyes.check('Main page', Target.window())

            // Click the "Click me!" button
            await browser.click('button')

            // Visual checkpoint #2
            await eyes.check('Click!', Target.window());

            // End the test
            await eyes.close()

        } finally {

            // If the test was aborted before eyes.close was called ends the test as aborted.
            await eyes.abortIfNotClosed();
        }
    });
});