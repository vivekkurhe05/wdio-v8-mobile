const TITLE = '~Discover';
const QR_INSTRUCTION = '//android.view.View[@content-desc="Point your camera to the QR on the product"]'
const EXIT_BTN = '~EXIT';

class DiscoverScreen {

    get $title() {
        $(TITLE).waitForDisplayed();
        return $(TITLE);
    }

    get $qrInstruction() {
        $(QR_INSTRUCTION).waitForDisplayed();
        return $(QR_INSTRUCTION);
    }

    get $exitButton() {
        $(EXIT_BTN).waitForDisplayed();
        return $(EXIT_BTN);
    }

    async scanQRCode() {
        const isDisplayed = await this.$title.isDisplayed();
        return isDisplayed;
    }
}

module.exports = new DiscoverScreen()