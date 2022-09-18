//variable can be ReDeclared :
var x = 5;
var y = 10;
var z = x + y ;
console.log (z);  //outout will be the 15

//Redeclaring the var ;
var x = 5;
var x = 2;
var y = 10;
var z = x + y ;
console.log (z); //outout will be the 12

// Let can not be redeclared;
let a = 10;
let b = 15;
let c = (a + b);
console.log (c);

//Function Scope
// var = NOT HAVE THE Function Scope
{
    var x = 5;
    console.log(x);
} 
console.log(x);
// Cant be Accessed from here 

//BLOCK SCOPE

//Let have the Block Scope
{
    let y = 10;
    console.log(y);
} 
console.log(y);
// Let can not accessed from here