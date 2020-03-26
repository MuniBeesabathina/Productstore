package com.productstore.pages;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class Loginpage {
	WebDriver driver;
	// login locators
	By Login = By.xpath("/html/body/nav/div[1]/ul/li[5]/a");
	By Username = By.xpath("/html/body/div[3]/div/div/div[2]/form/div[1]/input");
	By Password = By.xpath("/html/body/div[3]/div/div/div[2]/form/div[2]/input");
	By Loginclick = By.xpath("/html/body/div[3]/div/div/div[3]/button[2]");

public  Loginpage(WebDriver driver) {
this.driver=driver;
}

public void browserLaunch(String browser, String url)
{
	try {
		// To launch firefox Browser
		if (browser.equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.gecko.driver", "src/test/resources/driver/geckodriver.exe");
			driver = new FirefoxDriver();
		}
		// To launch Chrome Browser
		else if (browser.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", "src/test/resources/driver/chromedriver_v80.exe");
			driver = new ChromeDriver();
		}
		// to launch InternetExolorer
		else if (browser.equalsIgnoreCase("Internet Explore")) {
			System.setProperty("webdriver.ie.driver","src/test/resources/driver/IEDriverServer.exe");
			driver = new InternetExplorerDriver();
		}
		// to maximize the window
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get(url);

	} catch (WebDriverException e) {
		System.out.println("Browser could not be launched");
	}
}


//Methods for login pages and login details
	public void loginPage() {
		driver.findElement(Login).click();

	}

	public void loginDetails(String username, String password) throws IOException {
		driver.findElement(Username).sendKeys(username);
		driver.findElement(Password).sendKeys(password);
		driver.findElement(Loginclick).click();
	}

	public void loginClick() // getting login and closing the browser
	{
		driver.close();
	}
}
