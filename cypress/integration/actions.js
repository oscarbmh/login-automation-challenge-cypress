function loginIsDisplayed() {
    cy.contains('[data-qa="field-email"]')
    cy.contains('[data-qa="field-password"]')
}

function isEmailDisplayed(params) {
    cy.contains('[data-qa="field-email"]')

}

function toggleTermsBox() {
    cy.get('#terms').click()
}

function toggleConsentBox() {
    cy.get('#consents').click()
}

function setMail(mail = "testmail@typeform.com") {
    cy.get('[data-qa="field-email"]').type(mail)
}

function setPassword(password = "password1234") {
    cy.get("[data-qa='field-email']").type(password)
}

function clickCreateAccount() {
    cy.get('[data-qa="button-submit"]').click()
}

function clickSubmit() {
    cy.get('[data-qa="button-submit"]').click()
}

function registerUser() {
    cy.contains("Sign up").click()
}

function isWrongPasswordMessageDisplayed() {
    cy.contains('The credentials provided are incorrect')
}

function isForgotPasswordFormDisplayed() {
    cy.contains("[data-qa='password-reset-request-form]")
}

function goToForgotPassword() {
    cy.get('[data-qa="button-submit"]').click()
}

function isModalDisplayed() {
    cy.get('[data-qa="modal"]').click()
}

module.exports = {
    loginIsDisplayed,
    toggleTermsBox,
    toggleConsentBox,
    setMail,
    setPassword,
    clickCreateAccount,
    goToForgotPassword,
    isEmailDisplayed,
    clickSubmit,
    isModalDisplayed,
    registerUser
}