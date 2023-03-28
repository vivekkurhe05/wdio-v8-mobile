const TITLE = '~Detect';
const TITLE_2 = '~Verify';
const INSTRUCTION_1 = '//android.view.View[@content-desc="Align the above image to the Product"]';
const INSTRUCTION_2 = '//android.view.View[@content-desc="Please hold still…"]';
const INSTRUCTION_3 = '//android.view.View[@content-desc="Please wait while we verify this product for you….."]';
const GENUINE_RESULT = '~Genuine';
const FAKE_RESULT = '~Potential Fake';
const CANNOT_CONFIRM_RESULT = '~Cannot Confirm'
const PHOTO_QUALTITY_RESULT = '~Photo Quality Issue';
const CAPTURE_BTN = '~CAPTURE';;
const MESSAGE = '//android.view.View[@content-desc="This product is Genuine"]';
const BRAND_ENGAGEMENT_BTN = '//android.widget.Button[@content-desc="BRAND ENGAGEMENT"]';

class DetectScreen {

    get title() {
        $(TITLE).waitForDisplayed({timeout: 10000});
        return $(TITLE)
    }

    get title_2() {
        $(TITLE_2).waitForDisplayed({timeout: 10000});
        return $(TITLE_2);
    }

    get instruction_1() {
        $(INSTRUCTION_1).waitForDisplayed({timeout: 10000});
        return $(INSTRUCTION_1);
    }

    get instruction_2() {
        return $(INSTRUCTION_2);
    }

    get instruction_3() {
        return $(INSTRUCTION_3);
    }

    get genuine_result() {
        return $(GENUINE_RESULT);
    }

    get fake_result() {
        return $(FAKE_RESULT);
    }

    get cannot_confirm_result() {
        return $(CANNOT_CONFIRM_RESULT);
    }

    get photo_quality_result() {
        return $(PHOTO_QUALTITY_RESULT);
    }

    get message() {
        return $(MESSAGE);
    }

    get capture_btn() {
        $(CAPTURE_BTN).waitForDisplayed({timeout: 10000});
        return $(CAPTURE_BTN);
    }

    get brand_engagement_btn() {
        return $(BRAND_ENGAGEMENT_BTN);
    }
}

module.exports = new DetectScreen()