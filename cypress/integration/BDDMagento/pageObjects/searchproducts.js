class PageSearch {

    changeProductInfoandAdd(color, size, quantity) {
        cy.get('div[aria-label="' + size + '"]').click({ force: true })
        cy.wait(1000)
        cy.get('[aria-label="' + color + '"]').click({ force: true })
        cy.wait(1000)
        cy.get('[name="qty"]').click({ force: true }).clear().type(quantity)
        cy.wait(1000)
        cy.get('[title="Add to Cart"]').contains('Add to Cart').click({ force: true })
    }

    addProductToCart() {
        cy.get('[name="qty"]').click({ force: true }).clear().type('1')
        cy.wait(1000)
        cy.get('[title="Add to Cart"]').contains('Add to Cart').click({ force: true })
    }




}
const searchpage = new PageSearch();

export default searchpage;