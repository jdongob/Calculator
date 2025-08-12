import './App.css';
import codeLogo from './images/code-logo.png';
import Keybutton from './components/Keybutton';
import Screen from './components/Screen';
import KeybuttonClear from './components/KeybuttonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';  // External Library - npm install mathjs


function App() {

  const [inputDiv, setInputDiv] = useState(''); 

  const addInput = val =>{
    setInputDiv(inputDiv + val);  
  };

  const calculateResult = () => {
    if (inputDiv) {
       setInputDiv(evaluate(inputDiv)); 
       }/* else {
        alert('Please enter values to perform calculations.');
       } */
    };

  return (
    <div className='App'>
      <div className='code-logo-container'>
        <img 
          src = {codeLogo}
          className='code-logo'
          alt = 'Codex' />
      </div>
    
      <div className='container-calculator'>

        <Screen input={inputDiv}/> 

        <div className='row'> 
          <Keybutton manageClick={addInput}>1</Keybutton> 
          <Keybutton manageClick={addInput}>2</Keybutton>
          <Keybutton manageClick={addInput}>3</Keybutton>
          <Keybutton manageClick={addInput}>+</Keybutton>
        </div>
        <div className='row'>
          <Keybutton manageClick={addInput}>4</Keybutton>
          <Keybutton manageClick={addInput}>5</Keybutton>
          <Keybutton manageClick={addInput}>6</Keybutton>
          <Keybutton manageClick={addInput}>-</Keybutton>
        </div>
        <div className='row'>
          <Keybutton manageClick={addInput}>7</Keybutton>
          <Keybutton manageClick={addInput}>8</Keybutton>
          <Keybutton manageClick={addInput}>9</Keybutton>
          <Keybutton manageClick={addInput}>*</Keybutton>
        </div>
        <div className='row'> 
          <Keybutton manageClick={calculateResult}>=</Keybutton>
          <Keybutton manageClick={addInput}>0</Keybutton>
          <Keybutton manageClick={addInput}>.</Keybutton>
          <Keybutton manageClick={addInput}>/</Keybutton>
        </div>

        <div className='row'> 
          <KeybuttonClear manageClear={() => setInputDiv('')}>
              Clear
          </KeybuttonClear> 
        </div>  
      </div>

    </div>
  );
}


export default App;
