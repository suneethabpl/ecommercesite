///<reference types="cypress"/>
import { Given } from 'cypress-cucumber-preprocessor/steps'
import homepage from '../BDDMagento/pageObjects/homepage'

Given("the User is navigate to {string} page", (title) => {
    homepage.navigateToHome();
    homepage.verifyHomepage(title);
})