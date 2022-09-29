class student{
    constructor(){
        console.log("Print the consturctor");
    }
}

class college extends student { // Extens with class name will inherit this

}

// Now lets see if i create the @nd class which is college object :
let college1 = new college();
console.log(college1);
