const START_BTN = '~START';

class MainScreen {

    get $startButton() {
        $(START_BTN).waitForDisplayed();
        return $(START_BTN);
    }

    async clickStartButton() {
        await this.$startButton.click();
    }
}

module.exports = new MainScreen()