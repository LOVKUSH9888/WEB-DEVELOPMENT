class CarsAwesome{
    constructor(name){
        this.name = name;
    }
    //Defining the methods here
    greet(){
        console.log('Say Hi to all the new customer');
    }
    static hello(){  //I putted the static here 
        console.log("Hi my name is Lovkush borther");
    }
}

//Creating the object here now;
let CarsAwesome1 = new CarsAwesome("BMW");
//Printing on the Console now 
console.log(CarsAwesome.name); //This will give output as = BMW
//Static can only be access by the class name 
console.log(CarsAwesome.hello);
console.log(CarsAwesome1.hello); // This I tried with the object name & this will show the error 