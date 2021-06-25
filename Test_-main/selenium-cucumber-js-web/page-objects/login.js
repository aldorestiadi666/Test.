module.exports = {

    url: 'https://www.bukalapak.com/',

    elements: {
        login: '.te-header-login > .pr-4',
        buttonlogin: `[name='commit']`,
        logoprofile: '.bl-avatar'
    },

    datalogin: {
        email: '#user_session_username',
        password: '#user_session_password'
    },

    clickLogin: function(containingText) {
        return helpers.clickHiddenElement(page.login.elements.login, containingText).then(function() {
            return driver.wait(until.elementLocated(by.css(page.login.elements.buttonlogin)));
        });
    },

    clickButtonLogin: function(containingText) {
        return helpers.clickHiddenElement(page.login.elements.buttonlogin, containingText).then(function() {
            return driver.wait(until.elementLocated(by.css(page.login.elements.logoprofile)));
        });
    },

    profile: function() {
        return driver.findElement(by.css(page.login.elements.logoprofile));
    }

};
