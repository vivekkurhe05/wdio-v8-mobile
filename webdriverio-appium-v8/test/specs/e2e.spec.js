const mainScreen = require('../screen-objects/main.screen.js')
const discoverScreen = require('../screen-objects/discover.screen.js');
const detectScreen = require('../screen-objects/detect.screen.js');

describe('Should test all four scenarios for democarton', () => {

    beforeEach(async () => {
        await driver.isLocked().then(async function(isLocked) {
            if(isLocked) await driver.unlock();
        });
        await driver.launchApp();
        await mainScreen.start_btn.click();
    });

    afterEach(async () => {
        await driver.closeApp();
    })

    it.skip('Should give GENUINE for democarton\'s encrypted image', async () => {
        await expect(await discoverScreen.title).toBeDisplayed();

        await expect(await detectScreen.title).toBeDisplayed();
        await expect(await detectScreen.instruction_1).toBeDisplayed();
        await driver.pause(3000)
        await detectScreen.capture_btn.click();

        await detectScreen.instruction_2.waitUntil(async function () {
            return (await this.isDisplayed() === true)
        },
        {
            timeout: 600000,
            timeoutMsg: "Text to be displayed while capturing images"
        })

        await detectScreen.genuine_result.waitUntil(async function () {
            return (await this.isDisplayed() === true)
        },
        {
            timeout: 120000
        })
        const isDisplayed = await detectScreen.genuine_result.isDisplayed()

        console.log("============================================== =============The boolean value is ",await isDisplayed)
        
        await expect(await detectScreen.genuine_result).toBeDisplayed()

        // await detectScreen.brand_engagement_btn.waitUntil(async function () {
        //     return (await this.isDisplayed() === true)
        // })
        // const isDisplayed = await detectScreen.brand_engagement_btn.isDisplayed()

        // console.log("============================================== =============The boolean value is ",await isDisplayed)

        // await expect(await detectScreen.brand_engagement_btn).not.toBeDisplayed();

    });

    it.skip('Should give FAKE for democarton\'s unencrypted image', async () => {
        await expect(await discoverScreen.title).toBeDisplayed();

        await expect(await detectScreen.title).toBeDisplayed();
        await expect(await detectScreen.instruction_1).toBeDisplayed();
        await driver.pause(3000)
        await detectScreen.capture_btn.click();

        await detectScreen.instruction_2.waitUntil(async function () {
            return (await this.isDisplayed() === true)
        },
        {
            timeout: 120000,
            timeoutMsg: "Please hold still... is still displayed"
        });

        await detectScreen.instruction_3.waitUntil(async function () {
            if(await this.isDisplayed) {
                return true;
            }
        }, 
        {
            timeout: 12000,
            timeoutMsg: "'Please wait while we verify this product for you' should disappear after 12 secs"
        });

        await expect(await detectScreen.fake_result).toBeDisplayed();


    })

    it.skip('Should give CANNOT CONFIRM for democarton\'s out of focus encrypted image', async () => {
        await expect(await discoverScreen.title).toBeDisplayed();

        await expect(await detectScreen.title).toBeDisplayed();
        await expect(await detectScreen.instruction_1).toBeDisplayed();
        await driver.pause(3000)
        await detectScreen.capture_btn.click();

        await detectScreen.instruction_2.waitUntil(async function () {
            return (await this.isDisplayed() === true)
        },
        {
            timeout: 120000,
            timeoutMsg: "Please hold still... is still displayed"
        });

        await detectScreen.instruction_3.waitUntil(async function () {
            if(await this.isDisplayed()) {
                return true;
            }
        }, 
        {
            timeout: 12000,
            timeoutMsg: "'Please wait while we verify this product for you' should disappear after 12 secs"
        });

        await expect(await detectScreen.cannot_confirm_result).toBeDisplayed();
    })

    it('Should give PHOTO QUALITY ISSUE for democarton\'s bad quality image', async () => {
        await expect(await discoverScreen.title).toBeDisplayed();

        await expect(await detectScreen.title).toBeDisplayed();
        await expect(await detectScreen.instruction_1).toBeDisplayed();
        await driver.pause(3000)
        await detectScreen.capture_btn.click();

        await detectScreen.instruction_2.waitUntil(async function () {
            return (await this.isDisplayed() === true)
        },
        {
            timeout: 180000,
            timeoutMsg: "Please hold still... is still displayed"
        });

        // await detectScreen.instruction_3.waitUntil(async function () {
        //     if(await this.isDisplayed()) {
        //         return true;
        //     }
        // }, 
        // {
        //     timeout: 12000,
        //     timeoutMsg: "'Please wait while we verify this product for you' should disappear after 12 secs"
        // });

        await expect(await detectScreen.photo_quality_result).toBeDisplayed();
    })
});

