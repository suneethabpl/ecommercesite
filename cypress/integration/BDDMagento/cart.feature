Feature: Megento apllication

    test Megento application



Scenario: Search the product
Given the User is Navigate to 'Home' page
When the User searches for 'Gwyn Endurance Tee'
And the user select 'Green','M','4' and add to the cart
Then the User should be able to add all products and checkout price should be '$92.00' for 'United Kingdom'
When the User update the quantity of cart to '3'
When the User searches for 'Gwyn Endurance Tee'
And the user select 'Yellow','S','1' and add to the cart
When the User searches for 'Quest Lumaflex™ Band'
And the user add product to the cart
Then the User should be able to add all products and checkout price should be '$115.00' for 'United Kingdom'

  