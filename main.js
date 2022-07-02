document.querySelector('.smurf').addEventListener('click', openLink)

function openLink(){
    let numGrabber = document.querySelector('.smurf').textContent
    window.open(`http://ar-appserver-kaf5-node3.kaf5.amazon.com:9348/webapp/nicomachus.html?customer=AMZN&warehouse=KAFW&zone=agKivaA01&id=${numGrabber}&connectToShalo=false`, '_blank')
}

const elmHamburgers = document.querySelectorAll('.smurf');
elmHamburgers.forEach(elem => elem.addEventListener('click', openLink));

// ==UserScript==
// @name         Station Signout
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automagically signout of stations
// @author       bbbyford
// @match        http://ar-appserver-kaf5-node3.kaf5.amazon.com:9348/webapp/nicomachus.html?customer=AMZN&warehouse=KAFW&zone=agKivaA01&id=10448&connectToShalo=false
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==
/* jshint -W097 */
'use strict';

$(document).ready(function() {  
    document.querySelector('button').click();
});


