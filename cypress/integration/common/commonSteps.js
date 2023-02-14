///<reference types="cypress"/>
import { Given } from 'cypress-cucumber-preprocessor/steps'
import homepage from '../BDDMagento/pageObjects/homepage'


Given("the User is Navigate to {string} page", (title) => {
    homepage.NavigateToHome();
    homepage.VerifyHomepage(title);
})