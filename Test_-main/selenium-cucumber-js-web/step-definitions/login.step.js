const helpers = require('../runtime/helpers');

module.exports = function () {

    this.Given(/^User Login on Bukalapak$/, function () {
        helpers.loadPage(page.register.url, 5);
        page.login.clickLogin();
        driver.findElement(by.css(page.login.datalogin.email)).sendKeys('giansl@gmail.com');
        driver.findElement(by.css(page.login.datalogin.password)).sendKeys('PassTest&5');
        return page.login.clickButtonLogin();
    });

    this.Given(/^User on the Bukalapak homepage$/, function () {
        return helpers.loadPage(page.register.url, 5);
    });

    this.When(/^User click "([^"]*)" for Login Page$/, function (linkTitle) {
        return page.login.clickLogin(linkTitle);
    });

    this.When(/^User can input email and password$/, function (dataTabel) {
        const respDataTable = dataTabel.hashes();
        const datares = respDataTable[0];
        Object.keys(page.login.datalogin).forEach(async (element) => {
            return driver.findElement(by.css(page.login.datalogin[element])).sendKeys(datares[element]);
        });
    });

    this.When(/^User click button "([^"]*)" to open an account$/, function (linkTitle) {
        return page.login.clickButtonLogin(linkTitle);
    });

    this.Then(/^User should see transaction page with their profile$/, function () {
        return page.login.profile();
    });
};
