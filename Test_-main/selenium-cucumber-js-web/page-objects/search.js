module.exports = {

    elements: {
        textboxsearch: '#v-omnisearch__input',
        databaju: '.is-gutter-16.flex-wrap > div:nth-of-type(1) div:nth-of-type(2) > div:nth-of-type(1) a:nth-of-type(1)',
        buttonsearch: '.v-omnisearch__submit'
    },

    clickSearch: function() {
        return helpers.clickHiddenElement(page.search.elements.buttonsearch).then(function() {
            return driver.wait(until.elementLocated(by.css(page.search.elements.databaju)));
        });
    },

    showitem: function() {
        return driver.wait(until.elementLocated(by.css(page.search.elements.databaju)));
    }
};
