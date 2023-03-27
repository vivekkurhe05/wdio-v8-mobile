const TITLE = '~Discover';
const QR_INSTRUCTION = '//android.view.View[@content-desc="Point your camera to the QR on the product"]'
const EXIT_BTN = '~EXIT';

class DiscoverScreen {

    get title() {
        $(TITLE).waitForDisplayed({timeout: 5000});
        return $(TITLE);
    }

    get qrInstruction() {
        $(QR_INSTRUCTION).waitForDisplayed({timeout: 5000});
        return $(QR_INSTRUCTION);
    }

    get exitBtn() {
        $(EXIT_BTN).waitForDisplayed({timeout: 5000});
        return $(EXIT_BTN);
    }
}

module.exports = new DiscoverScreen()