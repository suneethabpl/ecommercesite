class HomePage
{

    NavigateToHome()
    {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.wait(1000)
    }

    VerifyHomepage(title){
        return cy.title().should('include',title)
    }
    searchProduct(searchString){
        cy.wait(2000)
        cy.get("input[name='q']").clear()
        cy.get("input[name='q']").type(searchString).click({force:true})
        cy.wait(1000)
        cy.get("#search_autocomplete").find('ul li').contains(searchString).click({force:true})
        cy.wait(1000)
        cy.get(".product-item-link").contains(searchString).click({force:true})
        
    }
    

    

}
const homepage = new HomePage();

export default homepage;

