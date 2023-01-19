import React from "react";

function Header1 (props){
    console.log(props);
    return(
        <div>
        <h1>Hello World</h1>
        <h1>Hello {props.name}</h1>
        </div>
    );
}

export default Header1;