class PageSearch {
    changeProductInfoandAdd(color, size, quantity) {
        cy.get('div[aria-label="' + size + '"]').click()
        cy.get('[aria-label="' + color + '"]').click()
        cy.get('[name="qty"]').click().clear().type(quantity)
        cy.get('[title="Add to Cart"]').contains('Add to Cart').click()
    }

    addProductToCart() {
        cy.get('[name="qty"]').click().clear().type('1')
        cy.get('[title="Add to Cart"]').contains('Add to Cart').click()
    }
}
const searchpage = new PageSearch();

export default searchpage;