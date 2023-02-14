///<reference types="cypress"/>
import { When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import homepage from '../pageObjects/homepage'
import searchpage from '../pageObjects/searchproducts'
import cartpage from '../pageObjects/cartpage'

When("the User searches for {string}", (searchString) => {
    homepage.searchProduct(searchString);

})

And("the user select {string},{string},{string} and add to the cart", (color, size, quantity) => {
    searchpage.changeProductInfoandAdd(color, size, quantity)

})

Then("the User should be able to add all products and checkout price should be {string} for {string}", (price, country) => {
    cartpage.VerifyCart(price, country)

})

When("the User update the quantity of cart to {string}", (quantity) => {
    cartpage.UpdateCart(quantity)

})

And("the user add product to the cart", () => {
    searchpage.addProductToCart()

})