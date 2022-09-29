class Cars{
    constructor(name){
        this.name = name;
    }
    //Defining the methods here
    greet(){
        console.log('Say Hi to all the new customer');
    }
}

//Creating the object here now;
let cars1 = new Cars("BMW");
//Printing on the Console now 
console.log(cars1.name); //This will give output as = BMW
cars1.greet(); // This will the output as the Say hi to all the new customer