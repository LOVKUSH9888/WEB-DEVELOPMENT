/* Hoisting refers to the process whereby the interpreter appears to move the declaration of functions,
 variables or classes to the top of their scope, prior to execution of the code. */
 // TO MOVE OR TO PULL:

 // eXAMPLE :
/* function catName (){
    console.log("TOM");
 }
 catName(); */


 // By Hoisting this can be also excuted as 
 
 catName();
 function catName (){
    console.log("TOM");
 }
 