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
        </div>
    );
}

export default Header1;