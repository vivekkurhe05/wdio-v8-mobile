var chaiExpect = require('chai').expect
const mainScreen = require('../screen-objects/main.screen.js')
const discoverScreen = require('../screen-objects/discover.screen.js');
const detectScreen = require('../screen-objects/detect.screen.js');
const applitools = require('../../utils/applitools.js')

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

    it('Should give GENUINE for democarton\'s encrypted image', async () => {
        await discoverScreen.scanQRCode().then(function(isDisplayed) {
            chaiExpect(isDisplayed).to.be.true;
        });
        
        await expect(await detectScreen.title).toBeDisplayed();
        await expect(await detectScreen.instruction_1).toBeDisplayed();
        
        await detectScreen.clickCaptureButton();

        await detectScreen.waitForImageCapture();

        await detectScreen.waitForResult();

        await expect(await detectScreen.genuine_result).toBeDisplayed();

        await applitools.takeScreenshot("Genuine", "Genuine screen", "Genuine Result!");

    });

    it('Should give FAKE for democarton\'s unencrypted image', async () => {
        await discoverScreen.scanQRCode().then(function(isDisplayed) {
            chaiExpect(isDisplayed).to.be.true;
        });

        await expect(await detectScreen.title).toBeDisplayed();
        await expect(await detectScreen.instruction_1).toBeDisplayed();
        
        await detectScreen.clickCaptureButton();

        await detectScreen.waitForImageCapture();

        await detectScreen.waitForResult();

        await expect(await detectScreen.fake_result).toBeDisplayed();

        await applitools.takeScreenshot("Fake", "Fake screen", "Fake Result!");

    })

    it.only('Should give CANNOT CONFIRM for democarton\'s out of focus encrypted image', async () => {
        await discoverScreen.scanQRCode().then(function(isDisplayed) {
            chaiExpect(isDisplayed).to.be.true;
        });

        await expect(await detectScreen.title).toBeDisplayed();
        await expect(await detectScreen.instruction_1).toBeDisplayed();
        
        await detectScreen.clickCaptureButton();

        await detectScreen.waitForImageCapture();
        
        await detectScreen.waitForResult();

        await expect(await detectScreen.cannot_confirm_result).toBeDisplayed();

        await applitools.takeScreenshot("Cannot Confirm", "Cannot Confirm screen", "Cannot Confirm Result!");
    })

    it('Should give PHOTO QUALITY ISSUE for democarton\'s bad quality image', async () => {
        await discoverScreen.scanQRCode().then(function(isDisplayed) {
            chaiExpect(isDisplayed).to.be.true;
        });

        await expect(await detectScreen.title).toBeDisplayed();
        await expect(await detectScreen.instruction_1).toBeDisplayed();
        
        await detectScreen.clickCaptureButton();

        await detectScreen.waitForImageCapture();

        await detectScreen.waitForResult();

        await expect(await detectScreen.photo_quality_result).toBeDisplayed();

        await applitools.takeScreenshot("Photo Quality", "Photo Quality screen", "Photo Quality Result!");
    })
});

