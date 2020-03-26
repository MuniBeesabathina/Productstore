package com.productstore.stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import com.productstore.pages.Loginpage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Loginstep {
	WebDriver driver; 
	public Loginpage productlogin;		//Creating Object for login Pages	
									
//@TC01	Login scenario methods 	
	
		@Given("^The user launch the Chrome application$")
		public void the_user_launch_the_chrome_application() throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			System.setProperty("webdriver.chrome.driver", "src//test//resources//driver//chromedriver_v80.exe");
			driver = new ChromeDriver();
			productlogin= new Loginpage(driver);
			driver.get("https://www.demoblaze.com");
			driver.manage().window().maximize();
		
		}

		@When("^Clicking on login to navigate Login Page$")
		public void clicking_on_login_to_navigate_Login_Page() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			productlogin.loginPage();
		}

		
		@Then("^The user login using \"([^\"]*)\" and \"([^\"]*)\" with valid and invalid details$")
		public void the_user_login_using_and_with_valid_and_invalid_details(String username, String password) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			Thread.sleep(4000);
			productlogin.loginDetails(username,password);
			Thread.sleep(4000);
		}
		
		@Then("^Clicking on login button$")
		public void click_on_login_Button() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			productlogin.loginClick();
		}

}
