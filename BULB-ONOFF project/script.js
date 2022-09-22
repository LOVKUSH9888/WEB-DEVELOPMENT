/* const bulbSwitch = document.querySelector('#bulbSwitch');
const bulb = document.querySelector('#bulb');
bulbSwitch.addEventListener('click', function(){
    console.log(bulb.src); //src is its property
    bulb.src = './bulb-on.gif'; // changing the source here
}); */

// The abobe code is without the condition statement:
//Now its more optimize and functional work

const bulbSwitch = document.querySelector('#bulbSwitch');
const bulb = document.querySelector('#bulb');
bulbSwitch.addEventListener('click', function(){
    console.log(bulb.src); //src is its property
    if(bulb.src.match('off')){
        bulb.src = './bulb-on.gif';
        bulbSwitch.innerHTML = 'Turn OFF';
    }else{
        bulb.src = './bulb-off.gif';
        bulbSwitch.innerHTML = 'Turn ON';
    }
});
