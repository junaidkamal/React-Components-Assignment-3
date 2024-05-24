import React from 'react';
import { useState } from 'react';
import AcButtons from './Components/AcButtons';
import NewInput from './Components/NewInput'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  } 

  return (
    <>
    <div className='bg-primary'>
      <h1>Button Component Demo</h1>
    <AcButtons btnValue="Log in" onClick= "Please Login First" />
    <AcButtons btnValue="Sign Up" onClick="Please Signup first"  />
    <AcButtons btnValue="Add" onClick="please add me" />
    <AcButtons btnValue="Click here" onClick="please click" />
    </div>
    <hr />
    
    <div className='container items-center '>
    <h1 className=''>Input Component Demo</h1>
      <NewInput placeholder="Enter some text" inputChange={handleInputChange} /> 
      <p>{inputValue}</p>
    </div>
    </>
  )
}

export default App;
