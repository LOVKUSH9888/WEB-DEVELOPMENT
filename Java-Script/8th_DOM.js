// DOM Manipulation = Document Object Model
// 1 = getElementbyId
/* const heading = document.getElementById('heading');
console.log(heading); */

//2. getElementsByTagName : COLLECTION RETURN
/* const heading = document.getElementsByTagName('h1');
console.log(heading); */

//3. getElementsByClassName: COLLECTION RETURN
/* const heading = document.getElementsByClassName('hero');
console.log(heading);
console.log(heading[0]); // BEcauseHML doc is ARRAY type */

// 4. querySelector : Pass the value as in CSS # =id & . = class
/* const heading = document.querySelector('#heading');
const heading1 = document.querySelector('.hero');
console.log(heading);
console.log(heading1); */

//5. querySelectorAll: COLLECTION RETURN
/* const heading = document.querySelectorAll('.hero');
const heading1 = document.querySelectorAll('#heading');
console.log(heading);
console.log(heading[0]);
console.log(heading1);
console.log(heading1[0]); */

// ### Traverse the DOM : Properties
// 1. parentNode 
/* const heading = document.querySelector('.heading');
const parent = heading.parentNode;
console.log(parent); */ 

//2. childNodes
/* const parent = document.querySelector('.parent');
console.log(parent.childNodes); */

//3.nextElementSibling
/* const heading = document.querySelector('.heading');
console.log(heading.nextElementSibling); */ 

//3.previousElementSibling
/* const heading = document.querySelector('h2');
console.log(heading.previousElementSibling); */ 


// #### MAnipulation 
const heading = document.querySelector('.heading');
heading.innerHTML = 'Web dev is awesome';
heading.style.color = 'red';
heading.style.fontSize = '100px';
