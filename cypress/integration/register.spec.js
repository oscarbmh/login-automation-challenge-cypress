const login = require('./actions.js')

describe('Registration process', () => {

    before(() => cy.visit('/'))

    it('should navigate to the registration flow when clickin on register', () => {
        login.clickCreateAccount()
    });


    it('should create a user when setting a valid mail and password', () => {
        login.setMail()
        login.setPassword()
        login.toggleConsentBox()
        login.toggleTermsBox()
        login.clickSubmit()
    });

})