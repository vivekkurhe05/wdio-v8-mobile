// Inititalize the eyes SDK
const {Eyes} = require('@applitools/eyes-webdriverio');

const eyes = new Eyes();

// Set your private API key
eyes.setApiKey('XB0fi69CCKkO1cnE98lpf23eEitC0Y5IV0Vj1loHZf04110')

// Allows you to gather your tests into separate groupings within the same file
describe('Applitools visual test', () => { 
    
    // Represents a single test case
    it('Page should look ok', async () => {
        
        try {

            // Start the test and set the browser's viewport size to
            await eyes.open(driver, 'Contacts', 'My first appium native JS test!');

            // Visual UI testing
            await eyes.checkWindow('Contact list!')

            // End the test
            await eyes.close()

        } finally {

            // Close the app
            await driver.closeApp()

            // If the test was aborted before eyes.close was called ends the test as aborted.
            await eyes.abortIfNotClosed();
        }
    });
});