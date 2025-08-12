import React from "react";
import '../stylesheets/KeybuttonClear.css';

const KeybuttonClear = (props) => (
    <div className='button-clear'
         onClick={props.manageClear}> 
        
        {props.children}  
    </div>
);

export default KeybuttonClear;