module.exports = function () {

    this.When(/^User can click item$/, function () {
        return page.addtocart.clickitem();
    });

    this.When(/^User will choose Ukuran "([^"]*)"$/, function (ukuran) {
        return page.addtocart.clickddlukuran(ukuran);
    });

    this.When(/^User can click "([^"]*)" to add item in cart$/, function (text) {
        return page.addtocart.clicaddtocart(text);
    });

    this.When(/^User can click "([^"]*)" to open cart$/, function (text) {
        return page.addtocart.clicopencart(text);
    });

    this.Then(/^User should see the item in Cart$/, function () {
        return page.addtocart.mycart();
    });
};
