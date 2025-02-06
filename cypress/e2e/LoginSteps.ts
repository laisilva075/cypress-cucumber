import { Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../support/pages/banking/login/LoginPage"
const loginPage = new LoginPage()

Given('A', () => {
  cy.visit('https://pagamentos.dev.grafeno.be/users/sign_in')
})

When('B', () => {
  return 'pass'
})

Then('C', () => {
  return 'pass'
})