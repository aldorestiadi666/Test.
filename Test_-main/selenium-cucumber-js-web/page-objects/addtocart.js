module.exports = {

    elements: {
        databaju: '.is-gutter-16.flex-wrap > div:nth-of-type(1) div:nth-of-type(2) > div:nth-of-type(1) a:nth-of-type(1)',
        imagebaju: '.c-product-gallery__main .c-carousel-mv__slides--regular > .slide--0 .c-bl-media-responsive__sizer',
        ddlukuran: '.multiselect__option--highlight > span',
        buttonaddtocart: '//*[@id="section-main-product"]/div[2]/div[6]/div/button[2]',
        openkeranjang: '.c-cart-dialog__cart-button',
        itemcart: '.qa-item-name'
    },

    clickitem: function() {
        return helpers.clickHiddenElement(page.addtocart.elements.databaju).then(function() {
            return driver.wait(until.elementLocated(by.css(page.addtocart.elements.imagebaju)));
        });
    },

    clickddlukuran: function(dataukuran) {
        driver.executeScript('window.scrollBy(0,250)');
        return helpers.clickHiddenElement(page.addtocart.elements.ddlukuran, dataukuran);
    },

    clicaddtocart: function(text) {
        return driver.findElement(by.xpath(page.addtocart.elements.buttonaddtocart, text)).click().then(function() {
            return driver.wait(until.elementLocated(by.css(page.addtocart.elements.openkeranjang)));
        });
    },

    clicopencart: function(text) {
        return helpers.clickHiddenElement(page.addtocart.elements.openkeranjang, text).then(function() {
            return driver.wait(until.elementLocated(by.css(page.addtocart.elements.itemcart)));
        });
    },

    mycart: function() {
        return driver.findElement(by.css(page.addtocart.elements.itemcart));
    }
};
