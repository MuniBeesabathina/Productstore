package com.productstore.stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.productstore.pages.Nextpage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Nextpagestep {
	WebDriver driver;
	public Nextpage np;// Creating Object for next Pages

//@TC_04 next
	@Given("^To launch the Chrome application$")
	public void to_launch_the_chrome_application() {
		// Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "src//test//resources//driver//chromedriver_v80.exe");
		driver = new ChromeDriver();
		np = new Nextpage(driver);
		driver.get("https://www.demoblaze.com");
		driver.manage().window().maximize();
	}
	@When("^Clicking on next to navigate next Page$")
	public void clicking_on_next_to_navigate_next_Page() throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		np.next();
		Thread.sleep(3000);
		}
	@Then("^Clicking on browser button$")
	public void click_on_browser_Button() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(3000);
         np.browserClick();
	}
}
