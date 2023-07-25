import { useState,useRef } from "react";
import MasterLayout from "../layout/MasterLayout";


const Income = () => {
  const [income,setIncome]=useState("");
  const [total,setTotal]=useState(0);
  const incomeInput=useRef();

 
  const handleIncome=(event)=>{
    
    if(isNaN(event.target.value) || event.target.value!="" || event.target.value!=null)
      {
        let incomeNumber=parseFloat(event.target.value)
        setIncome(incomeNumber);
      }
  }
  const handleTotal=()=>{
    if(income)
    {
      setTotal(total+income);
      incomeInput.current.value="";
    }
  }

  return(
      <MasterLayout>
        <div>
          <h1 className="text-center mt-7 font-bold text-2xl tracking-wide p-4 underline underline-offset-[10px]">This is the Income page.</h1> 
          <div className=" mt-5 p-5 text-center">
              <p className="mb-2 font-semibold tracking-widest text-xl">Enter your Daily Income....</p>
              <input ref={incomeInput} type="number" placeholder="Enter your income here" className="bg-gray-900 rounded-md text-md px-3 py-2 text-white italic font-semibold" value={income} onChange={handleIncome}/>
              <button className="ml-3 rounded px-3 py-1 bg-purple-600 text-lg" onClick={handleTotal}>Save</button>
              <h2 className="uppercase tracking-widest text-md mt-5 p-5">your daily income is : {income} tk</h2>
              <h2 className="uppercase tracking-widest text-md mt-5 p-5">your Total balance is : {total} tk</h2>
          </div>
        </div>
      </MasterLayout>
  )
};

export default Income;