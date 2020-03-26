package com.productstore.stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.productstore.pages.Deletepage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Deletestep {
	WebDriver driver;
	public Deletepage productdelete;// Creating Object for delete Pages

//@TC_03_delete
	@Given("^For launching the Chrome application$")
	public void for_launching_the_chrome_application() {
		// Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "src//test//resources//driver//chromedriver_v80.exe");
		driver = new ChromeDriver();
		productdelete = new Deletepage(driver);
		driver.get("https://www.demoblaze.com");
		driver.manage().window().maximize();
	}

	@When("^Clicking on item to navigate item Page$")
	public void clicking_on_item_to_navigate_item_Page() {
		// Write code here that turns the phrase above into concrete actions
		productdelete.selectproduct();

	}

	@Then("^The user delete the product")
	public void the_user_clicks_add_to_cart_and_delete_the_product() throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(2000);
		productdelete.add();
		Thread.sleep(2000);
		productdelete.Delete();
	}

	@Then("^To close the browser button$")
	public void to_close_the_browser_Button() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(3000);
		productdelete.closebrowser();
	}


}
