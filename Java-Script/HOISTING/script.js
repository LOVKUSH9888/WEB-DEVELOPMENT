/* Hoisting refers to the process whereby the interpreter appears to move the declaration of functions,
 variables or classes to the top of their scope, prior to execution of the code. */
 // TO MOVE OR TO PULL:

 // eXAMPLE :
function catName (){
    console.log("TOM");
 }
 catName(); 


 // By Hoisting this can be also excuted as 
 
catName();
 function catName (){
    console.log("TOM");
 } 
 

 // var example
 var valueX; // Declaration
valueX = 5; // Assignment
console.log(valueX);  // This will execute properly

 var valueX;
console.log(valueX);
valueX = 5; // Like this will show the Undefined Value in the console 

// #### This will also provide the undefined vale its by the JS.
let teriM;
console.log(teriM);  

// @@@ But here If we use the strict then we have to declare the values:
Strict 
let teriM;
console.log(teriM);  