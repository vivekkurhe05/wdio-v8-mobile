var chaiExpect = require('chai').expect
const mainScreen = require('../screen-objects/main.screen.js')
const discoverScreen = require('../screen-objects/discover.screen.js');
const detectScreen = require('../screen-objects/detect.screen.js');
const applitools = require('../../utils/applitools.js')
const {unlockDevice, injectImage, launchApp, closeApp} = require('../../utils/mobile.js')

describe('Should test all four scenarios for democarton', () => {

    beforeEach(async () => {
        await injectImage("media_url"); // replace media_url by QR code value
        await unlockDevice();
        await launchApp();
        await mainScreen.clickStartButton();
    });

    afterEach(async () => {
        await closeApp();
    });

    it('Should give GENUINE for democarton\'s encrypted image', async () => {
        await discoverScreen.scanQRCode().then(function(isDisplayed) {
            chaiExpect(isDisplayed).to.be.true;
        });
        
        await injectImage("media_url"); // replace media_url by democarton image value
        await expect(await detectScreen.$title).toBeDisplayed();
        await expect(await detectScreen.$instruction1).toBeDisplayed();

        await detectScreen.clickCaptureButton();
        await detectScreen.waitForImageCapture();
        await detectScreen.waitForResult();
        await expect(await detectScreen.$genuineResult).toBeDisplayed();
        await applitools.takeScreenshot("Genuine", "Genuine screen", "Genuine Result!");
    });

    it('Should give FAKE for democarton\'s unencrypted image', async () => {
        await discoverScreen.scanQRCode().then(function(isDisplayed) {
            chaiExpect(isDisplayed).to.be.true;
        });

        await injectImage("media_url"); // replace media_url by democarton image value
        await expect(await detectScreen.$title).toBeDisplayed();
        await expect(await detectScreen.$instruction1).toBeDisplayed();

        await detectScreen.clickCaptureButton();
        await detectScreen.waitForImageCapture();
        await detectScreen.waitForResult();
        await expect(await detectScreen.$fakeResult).toBeDisplayed();
        await applitools.takeScreenshot("Fake", "Fake screen", "Fake Result!");
    });

    it('Should give CANNOT CONFIRM for democarton\'s out of focus encrypted image', async () => {
        await discoverScreen.scanQRCode().then(function(isDisplayed) {
            chaiExpect(isDisplayed).to.be.true;
        });

        await injectImage("media_url"); // replace media_url by democarton image value
        await expect(await detectScreen.$title).toBeDisplayed();
        await expect(await detectScreen.$instruction1).toBeDisplayed();

        await detectScreen.clickCaptureButton();
        await detectScreen.waitForImageCapture();
        await detectScreen.waitForResult();
        await expect(await detectScreen.$cannotConfirmResult).toBeDisplayed();
        await applitools.takeScreenshot("Cannot Confirm", "Cannot Confirm screen", "Cannot Confirm Result!");
    });

    it('Should give PHOTO QUALITY ISSUE for democarton\'s bad quality image', async () => {
        await discoverScreen.scanQRCode().then(function(isDisplayed) {
            chaiExpect(isDisplayed).to.be.true;
        });
        
        await injectImage("media_url"); // replace media_url by democarton image value
        await expect(await detectScreen.$title).toBeDisplayed();
        await expect(await detectScreen.$instruction1).toBeDisplayed();

        await detectScreen.clickCaptureButton();
        await detectScreen.waitForImageCapture();
        await detectScreen.waitForResult();
        await expect(await detectScreen.$photoQualityResult).toBeDisplayed();
        await applitools.takeScreenshot("Photo Quality", "Photo Quality screen", "Photo Quality Result!");
    });
});

