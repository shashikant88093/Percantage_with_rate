import React from 'react'
const scaleNames = {
    r: 'Rate',
    a: 'Amount'
  };


  
   function RateInput(props){
     const {onValueCalculate,ratePer,scale}= props
   const  handleChange=(e)=> {
      onValueCalculate(e.target.value);
    }
  
   
      return (
        <fieldset>
          <legend>Enter Value in {scaleNames[scale]}:</legend>
          <input value={ratePer}
                 onChange={handleChange} />
        </fieldset>
      );
    
  }
  

  export default RateInput;