import React from 'react';
import './App.css';
import RateInput from './RateInput'
let invoiceNumber = 4377
function toRate(amount) {
 return (amount / invoiceNumber) * 100;
}

function toAmount(rate) {
  return (rate / 100) * invoiceNumber;
}

function tryConvert(ratePer, convert) {
  const input = parseFloat(ratePer);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
const MiscellanousDetailPopup =
  [
    { id: 1, name: "Brokerage and commission", miscChargeAmount: 0, miscChargeRate: 0 },
    { id: 2, name: "Cost of containers", miscChargeAmount: 0, miscChargeRate: 0 },
    { id: 3, name: "Cost of Packing", miscChargeAmount: 0, miscChargeRate: 0 },
    { id: 4, name: "Handling Charges", miscChargeAmount: 0, miscChargeRate: 0 },
    { id: 5, name: "Cost of Goods and Services", miscChargeAmount: 0, miscChargeRate: 0, },
    { id: 6, name: "Documentation", miscChargeAmount: 0, miscChargeRate: 0, },
    { id: 7, name: "Country of Origin Certificate", miscChargeAmount: 0, miscChargeRate: 0 },
    { id: 8, name: "Royalties and licence fees", miscChargeAmount: 0, miscChargeRate: 0, },
    { id: 9, name: "Value of proceeds which accrue", miscChargeAmount: 0, miscChargeRate: 0 },
    { id: 10, name: "Cost of Warranty Services", miscChargeAmount: 0, miscChargeRate: 0 },
    { id: 11, name: "Other Cost or Payment", miscChargeAmount: 0, miscChargeRate: 0 },
    { id: 10, name: "Other Charges and Payments", miscChargeAmount: 0, miscChargeRate: 0, },
  ]



  

  function App(props){
   const [ratePer,setRateper ] = React.useState('')
   const [scale,setScale] = React.useState('r')
  
  const   handleRateChange=(ratePer) =>{
      setScale('r')
      setRateper(ratePer)
    }
  
  const   handleAmountChange=(ratePer)=> {
      setScale('a')
      setRateper(ratePer)
    }
  
 
   
      const rate = scale === 'a' ? tryConvert(ratePer, toRate) : ratePer;
      const amount = scale === 'r' ? tryConvert(ratePer, toAmount) : ratePer;
  
      return (
        <div>
          
          <RateInput
            scale="r"
            ratePer={rate}
            onValueCalculate={handleRateChange} />
          <RateInput
            scale="a"
            ratePer={amount}
            onValueCalculate={handleAmountChange} />
        
        </div>
      );
  }

export default App;
