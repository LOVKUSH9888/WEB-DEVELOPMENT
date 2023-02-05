import React from "react";

{/*Props function*/}
function Header1 (props){

    {/*print it*/}
    console.log(props);
    
    return(
        <div>
        <h1>Hello World</h1>

        {/*Props used here*/}
        <h1>Hello {props.name}</h1> 

        {/*Level up */}
        <h1>Hello {props.name} + {props.last}</h1> 

        {/*Accessing that Child p here now*/}
        {props.child}



        {/*Accessing that Child p here now*/}
        {props}

        </div>
    );
}

export default Header1;