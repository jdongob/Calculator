import React from "react";
import '../stylesheets/Keybutton.css';

function Keybutton(props) {

    const isOperator = valor => {
      return isNaN(valor) && (valor !== '.') && (valor !== '='); //isNaN(valor) If value is not a number.
    };

    return(
        <div className={`button-container ${isOperator(props.children) ? 'operator' : '' }`.trimEnd() }  //className="button-container" className="button-container operator" 
              onClick={() => props.manageClick(props.children)}> 

            {props.children}     
        </div>
    );
}

export default Keybutton;