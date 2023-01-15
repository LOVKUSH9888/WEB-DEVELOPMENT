import React, { useState } from "react";
import './Form.css';

function Form() {
    return (
        <form>
            <div>
                <center>
                <h1 className="header">REGISTRATION FORM</h1>
                </center>
            </div>
            <div>
                <center>
                <input type="text" placeholder="Enter Your Name " name="name"></input>
                </center>
            </div>
            <div>
                <center>
                <input type="text" placeholder="Enter Your Age " name="Age"></input>
                </center>
            </div>
            <div>
                <center>
                <input type="text" placeholder="Enter Your Password " name="Password"></input>
                </center>
            </div>
            <div class="button_slide slide_diagonal">
                <center>
                <button type = "submit">Submit</button>
                </center>
            </div>
        </form>
    );
  }
  export default Form;
  


  

  