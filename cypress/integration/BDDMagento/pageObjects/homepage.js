class HomePage {
    navigateToHome() {
        cy.visit('https://magento.softwaretestingboard.com/')
    }

    verifyHomepage(title) {

        return cy.title().should('include', title)
    }
    searchProduct(searchString) {
        cy.get("input[name='q']").clear()
        cy.get("input[name='q']").type(searchString).click()
        cy.get("#search_autocomplete").find('ul li').contains(searchString).click()
        cy.get(".product-item-link").contains(searchString).click()

    }
}
const homepage = new HomePage();

export default homepage;