const START_BTN = '~START';

class MainScreen {

    get start_btn() {
        $(START_BTN).waitForDisplayed({timeout: 5000});
        return $(START_BTN);
    }
}

module.exports = new MainScreen()