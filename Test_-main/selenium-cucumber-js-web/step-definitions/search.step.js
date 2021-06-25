module.exports = function () {

    this.When(/^User can Search item$/, function () {
        driver.findElement(by.css(page.search.elements.textboxsearch)).sendKeys('baju');
        return page.search.clickSearch();
    });

    this.When(/^User Input text to Search Item$/, function (dataTabel) {
        const respDataTable = dataTabel.hashes();
        for (const { item } of respDataTable) {
            return driver.findElement(by.css(page.search.elements.textboxsearch)).sendKeys(item);
        }
    });

    this.When(/^User will click search icon$/, function (){
        return page.search.clickSearch();
    });

    this.Then(/^User should see "([^"]*)" appear in screen$/, function (pagetext) {
        return page.search.showitem(pagetext);
    });
};
