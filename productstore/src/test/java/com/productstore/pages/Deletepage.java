package com.productstore.pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class Deletepage {
	WebDriver driver;
	By Product = By.xpath("/html/body/div[5]/div/div[2]/div/div[5]/div/div/h4/a");
	By Acart = By.xpath("/html/body/div[5]/div/div[2]/div[2]/div/a");
	By Clickcart=By.xpath("/html/body/nav/div/div/ul/li[4]/a");
	By Delete=By.xpath("/html/body/div[6]/div/div[1]/div/table/tbody/tr/td[4]/a");
	
public Deletepage(WebDriver driver) {
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

	// To select product
	public void selectproduct() {
		driver.findElement(Product).click();

	}

//To add to cart
	public void add() throws InterruptedException {
		driver.findElement(Acart).click();
		Thread.sleep(3000);
		Alert a = driver.switchTo().alert();
		a.accept();}
//To delete product
		public void Delete() throws InterruptedException {
		driver.findElement(Clickcart).click();
		Thread.sleep(3000);
		driver.findElement(Delete).click();
		Thread.sleep(3000);
	}

//To close the browser
	public void closebrowser() {
		driver.close();

	}

}


