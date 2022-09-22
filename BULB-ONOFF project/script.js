const bulbSwitch = document.querySelector('#bulbSwitch');
const bulb = document.querySelector('#bulb');
bulbSwitch.addEventListener('click', function(){
    console.log(bulb.src); //src is its property
    bulb.src = './bulb-on.gif';
});
// The abobe code is without the condition statement: 
