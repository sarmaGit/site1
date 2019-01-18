module.exports = {
    'test date' : function (browser) {
        browser
            .url('https://pikabu.ru/hot/time')
            .waitForElementVisible('body')
            .click('.feed-panel__calendar')
            .waitForElementVisible('.popup__container')
            .assert.value('div.calendar-head__form input.input__input','18/01/2019')
            .end();
    }
};