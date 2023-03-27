describe('Android Elements Tests', () => {
    it('Find element by accessibility id', async () => {
        // find element by accessibility id
        const appOption = await $('~App');

        // click on element
        await appOption.click();

        // assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toHaveTextContaining('Action')
        console.log('$$$$$$$$$$$$$$$$$$$$$$$444')
        console.log(await actionBar.getText())
        console.log('$$$$$$$$$$$$$$$$$$$$$$$444')
        await expect(actionBar).toBeExisting();
    })

    it('Find element by classname', async () => {
        // find element by classname
        const className = await $('android.widget.TextView')

        console.log(await className.getText())

        await expect(className).toHaveText('API Demos')
    })

    it('Find elements by xpath', async () => {

        await $("~App").click()
        await $("//android.widget.TextView[@content-desc='Alert Dialogs']").click()
        await $("//android.widget.Button[@resource-id='io.appium.android.apis:id/select_button']").click()
        await $("//android.widget.TextView[@text='Command two']").click()

        const textAssertion = await $("//android.widget.TextView[@resource-id='android:id/message']")
        await expect(textAssertion).toHaveText('You selected: 1 , Command two')
    })

    it('Find elements by UIAutomator', async () => {
        
        await $("~App").click()

        // find by text contains
        await $('android=new UiSelector().textContains("Alert")').click()
    })

    it.only('Find multiple elements', async () => {
        const expectedList = [
            'API Demos', "Access'ibility",
            'Accessibility','Animation',
            'App', 'Content',
            'Graphics', 'Media',
            'NFC','OS',
            'Preference','Text',
        ]
        const actualList = []

        // find multiple elements
        const textList = await $$('android.widget.TextView')

        // loop through them
        for (const element of textList) {
            actualList.push(await element.getText())
        }

        // assert the list
        await expect(actualList).toEqual(expectedList)
    })
});