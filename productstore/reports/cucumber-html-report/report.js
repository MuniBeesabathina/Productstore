$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/product.feature");
formatter.feature({
  "line": 2,
  "name": "Product_Store Website",
  "description": "",
  "id": "product-store-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" with valid and invalid details",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "product-store-website;login-into-product-store-website;;1"
    },
    {
      "cells": [
        "muni",
        "123"
      ],
      "line": 14,
      "id": "product-store-website;login-into-product-store-website;;2"
    },
    {
      "cells": [
        "munib",
        "1234"
      ],
      "line": 15,
      "id": "product-store-website;login-into-product-store-website;;3"
    },
    {
      "cells": [
        "bmuni",
        "12345"
      ],
      "line": 16,
      "id": "product-store-website;login-into-product-store-website;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"muni\" and \"123\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 14297482900,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 842305500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "muni",
      "offset": 22
    },
    {
      "val": "123",
      "offset": 33
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 9117721501,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 551322799,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"munib\" and \"1234\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 9404864800,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 260385500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "munib",
      "offset": 22
    },
    {
      "val": "1234",
      "offset": 34
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 8420196500,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 185161899,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"bmuni\" and \"12345\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 6612997199,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 155517400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bmuni",
      "offset": 22
    },
    {
      "val": "12345",
      "offset": 34
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 8406231901,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 228558200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Add to cart in Product_Store",
  "description": "",
  "id": "product-store-website;add-to-cart-in-product-store",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@TC_02_add"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "Launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Clicking on product to navigate product Page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "The user clicks add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Clicking on close browser button",
  "keyword": "Then "
});
formatter.match({
  "location": "Addtocartstep.launch_the_chrome_application()"
});
formatter.result({
  "duration": 7387635000,
  "status": "passed"
});
formatter.match({
  "location": "Addtocartstep.clicking_on_product_to_navigate_product_Page()"
});
formatter.result({
  "duration": 745344500,
  "status": "passed"
});
formatter.match({
  "location": "Addtocartstep.the_user_clicks_add_to_cart()"
});
formatter.result({
  "duration": 16163080101,
  "status": "passed"
});
formatter.match({
  "location": "Addtocartstep.click_on_close_browser_Button()"
});
formatter.result({
  "duration": 3307174000,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Delete product in Product_Store",
  "description": "",
  "id": "product-store-website;delete-product-in-product-store",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@TC_03_Delete"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "For launching the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Clicking on item to navigate item Page",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "The user delete the product",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "To close the browser button",
  "keyword": "Then "
});
formatter.match({
  "location": "Deletestep.for_launching_the_chrome_application()"
});
formatter.result({
  "duration": 7189133700,
  "status": "passed"
});
formatter.match({
  "location": "Deletestep.clicking_on_item_to_navigate_item_Page()"
});
formatter.result({
  "duration": 698277300,
  "status": "passed"
});
formatter.match({
  "location": "Deletestep.the_user_clicks_add_to_cart_and_delete_the_product()"
});
formatter.result({
  "duration": 14547781800,
  "status": "passed"
});
formatter.match({
  "location": "Deletestep.to_close_the_browser_Button()"
});
formatter.result({
  "duration": 3121775501,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Navigate in Product_Store",
  "description": "",
  "id": "product-store-website;navigate-in-product-store",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@TC_04_next"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "To launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "Clicking on next to navigate next Page",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Clicking on browser button",
  "keyword": "Then "
});
formatter.match({
  "location": "Nextpagestep.to_launch_the_chrome_application()"
});
formatter.result({
  "duration": 7332823400,
  "status": "passed"
});
formatter.match({
  "location": "Nextpagestep.clicking_on_next_to_navigate_next_Page()"
});
formatter.result({
  "duration": 6942593399,
  "status": "passed"
});
formatter.match({
  "location": "Nextpagestep.click_on_browser_Button()"
});
formatter.result({
  "duration": 3292692400,
  "status": "passed"
});
});