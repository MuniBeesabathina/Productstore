@Product_Store
Feature: Product_Store Website

@TC_01_Login
Scenario Outline: Login into Product_Store Website
Given The user launch the Chrome application
When Clicking on login to navigate Login Page
Then The user login using "<username>" and "<password>" with valid and invalid details
Then Clicking on login button

Examples: 

|username	|password|
|muni	|123 |
|munib	|1234|
|bmuni	|12345|


@TC_02_add
Scenario: Add to cart in Product_Store
Given Launch the Chrome application
When Clicking on product to navigate product Page
Then The user clicks add to cart
Then Clicking on close browser button
@TC_03_Delete
Scenario: Delete product in Product_Store
Given For launching the Chrome application 
When Clicking on item to navigate item Page
Then The user delete the product
Then To close the browser button
@TC_04_next
Scenario: Navigate in Product_Store
Given To launch the Chrome application
When Clicking on next to navigate next Page
Then Clicking on browser button




