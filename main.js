document.querySelector('.smurf').addEventListener('click', openLink)

function openLink(){
    let numGrabber = document.querySelector('.smurf').textContent
    window.open(`http://ar-appserver-kaf5-node3.kaf5.amazon.com:9348/webapp/nicomachus.html?customer=AMZN&warehouse=KAFW&zone=agKivaA01&id=${numGrabber}&connectToShalo=false`, '_blank')
}

const elmHamburgers = document.querySelectorAll('.smurf');
elmHamburgers.forEach(elem => elem.addEventListener('click', openLink));


