class cartPage {
    VerifyCart(price, country) {
        cy.get(".action.showcart").click({ force: true })
        cy.get("#minicart-content-wrapper  a.viewcart").contains('View and Edit Cart').click({ force: true })
        cy.wait(1000)
        cy.get(".cart-summary").find('#block-shipping > .title').click({ force: true })
        cy.wait(1000)
        cy.get('select[name="country_id"]').select(country, { force: true })
        cy.get("#cart-totals table tr:nth-child(4)").contains(price, { force: true })
    }
    UpdateCart(quantity) {
        cy.get(".action.showcart").click({ force: true })
        cy.get("#minicart-content-wrapper  a.viewcart").contains('View and Edit Cart').click({ force: true })
        cy.get("#shopping-cart-table td:nth-child(3) input").clear()
        cy.get("#shopping-cart-table td:nth-child(3) input").type(quantity)
        cy.get('button[title="Update Shopping Cart"]').contains('Update Shopping Cart').click({ force: true })

    }

}
const cartpage = new cartPage();

export default cartpage;