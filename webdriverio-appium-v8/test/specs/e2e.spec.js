const mainScreen = require('../screen-objects/main.screen.js')
const discoverScreen = require('../screen-objects/discover.screen.js');
const detectScreen = require('../screen-objects/detect.screen.js');

describe('Verify the functionality for GENUINE result', () => {

    beforeEach(async () => {
        await driver.isLocked().then(async function(isLocked) {
            if(isLocked) await driver.unlock();
        });
        await mainScreen.start_btn.click();
    });

    after(async () => {
        await driver.closeApp();
    })

    it('Should launch app, scan QR code and democarton artwork and give GENUINE result', async () => {
        await expect(await discoverScreen.title).toBeDisplayed();

        await expect(await detectScreen.title).toBeDisplayed();
        await expect(await detectScreen.instruction_1).toBeDisplayed();
        await detectScreen.capture_btn.click();

        await detectScreen.instruction_2.waitUntil(async function () {
            return (await this.isDisplayed() === true)
        },
        {
            timeout: 600000,
            timeoutMsg: "Text to be displayed while capturing images"
        })

        await detectScreen.instruction_3.waitUntil(async function () {
            return (await this.isDisplayed() === true); 
        },
        {
            timeout: 600000,
            timeoutMsg: "Text to be displayed while verification"
        })

        const genuine = await detectScreen.genuine_result.waitUntil(async function () {
            return (await this.isDisplayed === true)
        },
        {
            timeout: 600000,
            timeoutMsg: "Result not received"
        })
        await expect(await genuine).toBeTruthy();
        // await expect(await detectScreen.message).toBeDisplayed();
    });
});

