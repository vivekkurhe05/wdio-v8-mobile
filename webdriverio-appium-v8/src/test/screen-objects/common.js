/**
 * Example if you want to execute same test on Android and iOS, then this example shows
 * how to initialize locator
 * 
 * Reference - https://webdriver.io/docs/api/browser
 */

const SELECTOR_ANDROID = 'new UiSelector().text("Cancel").className("android.widget.Button")';
const SELECTOR_IOS = 'UIATarget.localTarget().frontMostApp().mainWindow().buttons()[0]';
let android = 'android';
let ios = 'ios';

class Locators {

    // this is a selector
    get $username() {
        const selectorAndroid = SELECTOR_ANDROID;
        const selectorIOS = SELECTOR_IOS;
        const selectorType = driver.isAndroid ? android : ios;
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS;
        return $(`${selectorType}=${selector}`);
    }
}