const login = require('./actions.js')

describe('Login process', () => {

    before(() => cy.visit('/'))

    it('Should display the login form', () => {
        login.loginIsDisplayed()
    });

    it('should display an error wen introducing a wrong password ', () => {
        login.setMail()
        login.setPassword("incorrect")
        login.clickCreateAccount()

        assertTrue(login.isWrongPasswordMessageDisplayed())
    });

    it('should login when introducing correct credentials', () => {
        login.setMail()
        login.setPassword("incorrect")
        login.clickCreateAccount()
    });

})