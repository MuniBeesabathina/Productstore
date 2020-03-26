package com.productstore.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features = "src/main/resources/feature/product.feature",
plugin = { "pretty", "html:reports/cucumber-html-report" ,"json:reports/cucumber-html-report/jsonreport",
"com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"},


tags= {"@TC_01_Login,@TC_02_add,@TC_03_Delete,@TC_04_next,@TC_05_category"},
glue = {"com.productstore.stepdefinition"},
monochrome = true
)

public class productstoreRunner {

}
