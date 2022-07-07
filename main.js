// const {Builder} = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');
// 
// const service = new chrome.ServiceBuilder('/path/to/chromedriver');
// const driver = new Builder().forBrowser('chrome').setChromeService(service).build();
// 
// (async function openChromeTest() {
//   try {
//     let options = new chrome.Options();
//     let driver = await new Builder()
//                 .setChromeOptions(options)
//                 .forBrowser('chrome')
//                 .build();
//     await driver.get('https://www.google.com');
//     await driver.quit();
//   } catch (error) {
//     console.log(error)
//   }
// })();


// document.querySelector('a').addEventListener('click', openLink)
// 
// function openLink(){
//     let numGrabber = document.querySelector('a').textContent
//     console.log(numGrabber)
//     document.querySelector(href).innerText = `http://ar-appserver-kaf5-node3.kaf5.amazon.com:9348/webapp/nicomachus.html?customer=AMZN&warehouse=KAFW&zone=agKivaA01&id=${numGrabber}&connectToShalo=false`
// }

var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.chrome()).
   build();

driver.get('http://www.google.com');
driver.findElement(webdriver.By.name('button')).click();
driver.wait(function() {
 return driver.getTitle().then(function(title) {
   return title === 'webdriver - Google Search';
 });
}, 1000);

driver.quit();

cy.get('a[href*="demoqa"]').click()



