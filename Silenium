const helpers = require('../runtime/helpers');

module.exports = function () {

    this.Given(/^User on the Bukalapak homepage for register$/, function () {
        return helpers.loadPage(page.register.url, 5);
    });

    this.When(/^User click "([^"]*)" for registration$/, function (linkTitle) {
        return page.register.clickDaftar(linkTitle);
    });

    this.When(/^User can input data register for registration at Bukalapak$/, function (dataTabel) {
        const data = dataTabel.hashes();
        console.log(data);
        for (const { email } of data) {
            return driver.findElement(by.css(page.register.elements.textboxemail)).sendKeys(email);
        }
    });

    this.When(/^User click button "([^"]*)" to create new account$/, function (buttontext) {
        return page.register.clickButtonDaftar(buttontext);
    });

    this.Then(/^User should see new pop up "([^"]*)"$/, function (pageTitle) {
        return page.register.popuptitleContains(pageTitle);
    });

    this.When(/^User click button "([^"]*)" to get verification code$/, function (buttontext) {
        return page.register.clickKirimKode(buttontext);
    });

    this.Then(/^User should see "([^"]*)" in pop up$/, function (pagetext) {
        return page.register.popuptextContains(pagetext);
    });

    this.When(/^User can input valid verification code$/, function (dataTabel2) {
        // For dev environtment, we can get code from console, so I just create dummy code in table
        const respDataTable = dataTabel2.hashes();
        for (const { code } of respDataTable) {
            return driver.findElement(by.css(page.register.elements.textboxkode)).sendKeys(code);
        }
    });

    this.When(/^User click button "([^"]*)" to verify and create account$/, function (buttontext) {
        return page.register.clickVerifikasi(buttontext);
    });

    this.Then(/^User should see "([^"]*)" in new page$/, function (pagetext) {
        return page.register.newpagetextContains(pagetext);
    });

};
