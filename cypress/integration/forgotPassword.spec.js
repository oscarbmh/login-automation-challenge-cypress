const login = require('./actions.js')

describe("Forgot password", () => {

    before(() => cy.visit('/'))

    it('Should display the login form', () => {
        login.loginIsDisplayed()
    });

    it('Should redirect to password retrieve flow when clicking on forgot password', () => {
        login.goToForgotPassword()
        login.isEmailDisplayed()
    });

    it('should display a mail sent modal when clicking on submit button', () => {
        login.clickSubmit()
        assertTrue(login.isModalDisplayed())
    });

})
