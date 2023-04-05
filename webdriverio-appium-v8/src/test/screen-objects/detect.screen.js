const TITLE = '~Detect';
const TITLE_2 = '~Verify';
const INSTRUCTION_1 = '//android.view.View[@content-desc="Align the above image to the Product"]';
const INSTRUCTION_2 = '//android.view.View[@content-desc="Please hold still…"]';
const INSTRUCTION_3 = '//android.view.View[@content-desc="Please wait while we verify this product for you….."]';
const LOADER = '//android.widget.ImageView[2]';
const GENUINE_RESULT = '~Genuine';
const FAKE_RESULT = '~Potential Fake';
const CANNOT_CONFIRM_RESULT = '~Cannot Confirm'
const PHOTO_QUALTITY_RESULT = '~Photo Quality Issue';
const CAPTURE_BTN = '~CAPTURE';;
const MESSAGE = '//android.view.View[@content-desc="This product is Genuine"]';
const BRAND_ENGAGEMENT_BTN = '//android.widget.Button[@content-desc="BRAND ENGAGEMENT"]';

class DetectScreen {

    get $title() {
        $(TITLE).waitForDisplayed();
        return $(TITLE)
    }

    get $title2() {
        $(TITLE_2).waitForDisplayed();
        return $(TITLE_2);
    }

    get $loader() {
        $(LOADER).waitForDisplayed();
        return $(LOADER);
    }

    get $instruction1() {
        $(INSTRUCTION_1).waitForDisplayed();
        return $(INSTRUCTION_1);
    }

    get $instruction2() {
        // $(INSTRUCTION_2).waitForDisplayed();
        return $(INSTRUCTION_2);
    }

    get $instruction3() {
        $(INSTRUCTION_3).waitForDisplayed();
        return $(INSTRUCTION_3);
    }

    get $genuineResult() {
        return $(GENUINE_RESULT);
    }

    get $fakeResult() {
        return $(FAKE_RESULT);
    }

    get $cannotConfirmResult() {
        return $(CANNOT_CONFIRM_RESULT);
    }

    get $photoQualityResult() {
        return $(PHOTO_QUALTITY_RESULT);
    }

    get $message() {
        return $(MESSAGE);
    }

    get $captureButton() {
        $(CAPTURE_BTN).waitForDisplayed();
        return $(CAPTURE_BTN);
    }

    get $brandEngagementButton() {
        return $(BRAND_ENGAGEMENT_BTN);
    }

    async clickCaptureButton() {
        await this.$captureButton.isEnabled().then(async (isEnabled) => {
            if(isEnabled) {
                await driver.pause(500);
                await this.$captureButton.click();
                this.$instruction2.waitForDisplayed();
                await this.$instruction2.isDisplayed().then((isDisplayed) => {
                    console.log("Instruction 2 is displayed");
                    if(isDisplayed) this.waitForImageCapture();
                })
            }
        })
        
    }

    async waitForImageCapture() {
        await this.$instruction2.waitForDisplayed({reverse: true});
    }

    async waitForResult() {
        await this.$instruction3.waitForDisplayed({reverse: true});
    }
}

module.exports = new DetectScreen()