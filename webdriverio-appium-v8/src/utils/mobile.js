async function unlockDevice() {
    await driver.isLocked().then(async function(isLocked) {
        if(isLocked) await driver.unlock();
    });
}

async function injectImage(media_url) {
    await driver.execute(`lambda-image-injection=${media_url}`)
}

async function launchApp() {
    await driver.launchApp();
}

async function closeApp() {
    await driver.closeApp();
}

module.exports = {
    unlockDevice,
    injectImage,
    launchApp,
    closeApp
}