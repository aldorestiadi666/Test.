module.exports = {

    url: 'https://www.bukalapak.com/',

    elements: {
        daftar: '.sigil-header__main-nav-bar a:nth-of-type(1) > .pr-4',
        textboxemail: '[placeholder]',
        buttondaftar: '.bl-text--inverse',
        verifytitle: '.m-0 .bl-text',
        buttonkirimkode: '.mb-8 > .bl-text',
        textkoderahasia: '.mb-16',
        textboxkode: `[aria-label='Kode rahasia']`,
        buttonverifikasi: '.bl-button[data-v-27a5b53a] > .bl-text',
        textakuncreated: '.mb-12'
    },

    clickDaftar: function(containingText) {
        return helpers.clickHiddenElement(page.register.elements.daftar, containingText).then(function() {
            return driver.wait(until.elementLocated(by.css(page.register.elements.textboxemail)));
        });
    },

    clickButtonDaftar: function(containingText) {
        return helpers.clickHiddenElement(page.register.elements.buttondaftar, containingText).then(function() {
            return driver.wait(until.elementLocated(by.css(page.register.elements.buttonkirimkode)));
        });
    },

    popuptitleContains: function(expectedTitle) {
        return driver.findElement(by.css(page.register.elements.verifytitle, expectedTitle));
    },

    clickKirimKode: function(containingText) {
        return helpers.clickHiddenElement(page.register.elements.buttonkirimkode, containingText).then(function() {
            return driver.wait(until.elementLocated(by.css(page.register.elements.textboxkode)));
        });
    },

    popuptextContains: function(expectedTitle) {
        return driver.findElement(by.css(page.register.elements.textkoderahasia, expectedTitle));
    },

    clickVerifikasi: function(containingText) {
        return helpers.clickHiddenElement(page.register.elements.buttonverifikasi, containingText);
    },

    newpagetextContains: function(expectedTitle) {
        return driver.findElement(by.css(page.register.elements.textakuncreated, expectedTitle));
    }

};
