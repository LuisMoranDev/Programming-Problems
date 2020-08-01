import React from 'react';
import './styles/App.css';
import Header from './Header.jsx'; 
import FizzBuzz from './FizzBuzz.jsx'; 
import LargeNumber from './LargeNumber.jsx';
import RunningSum from './RunningSum'; 
import NumberSteps from './NumberSteps'; 
import NumberofJewels from './NumberofJewels'; 
import RestoreString from './RestoreString'; 

function App() {
  return (
    <div>
      <Header/>
      <FizzBuzz /> 
      <LargeNumber /> 
      <RunningSum /> 
      <NumberSteps /> 
      <NumberofJewels /> 
      <RestoreString /> 
    </div>
   
  );
}

export default App;
