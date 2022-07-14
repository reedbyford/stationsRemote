document.querySelector('.station').addEventListener('click', openLink)
// 
// function openLink(){
//     let numGrabber = document.querySelector('.smurf').textContent
//     window.open(`http://ar-appserver-kaf5-node3.kaf5.amazon.com:9348/webapp/nicomachus.html?customer=AMZN&warehouse=KAFW&zone=agKivaA01&id=${numGrabber}&connectToShalo=false`, '_blank')
// }
// 
// const elmHamburgers = document.querySelectorAll('.smurf');
// elmHamburgers.forEach(elem => elem.addEventListener('click', openLink));

var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.chrome()).
   build();


function openLink(){
    window.onload = function() {
        driver.get('http://ar-appserver-kaf5-node2.kaf5.amazon.com:9348/webapp/nicomachus.html?customer=AMZN&warehouse=KAFW&zone=agKivaA01&id=10432&connectToShalo=false');
        driver.findElement(webdriver.By.name('button')).click();
      };
    // driver.wait(function() {
    //  return driver.getTitle().then(function(title) {
    //    return title === 'webdriver - Google Search';
    //  });
    // }, 1000);
}
// driver.get('http://ar-appserver-kaf5-node2.kaf5.amazon.com:9348/webapp/nicomachus.html?customer=AMZN&warehouse=KAFW&zone=agKivaA01&id=10432&connectToShalo=false');
// driver.findElement(webdriver.By.name('button')).click();
// // driver.wait(function() {
// //  return driver.getTitle().then(function(title) {
// //    return title === 'webdriver - Google Search';
// //  });
// // }, 1000);
// 
// driver.quit();


