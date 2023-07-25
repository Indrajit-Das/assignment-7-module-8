import { useState } from "react";
import MasterLayout from "../layout/MasterLayout";
const Expense = () => {
  const [expense,setExpense]=useState("");
  const [income,setIncome]=useState("");
  const [savings,setSavings]=useState(0);

  const handleIncome=(event)=>{
    setIncome(event.target.value);
  }
  const handleExpense=(event)=>{
    setExpense(event.target.value);
  }

  const calculation=()=>{
    let incomeNumber = parseFloat(income);
    let expenseNumber = parseFloat(expense);
    setSavings(incomeNumber-expenseNumber);
  }

    return (
      <MasterLayout>
        <div>
          <h1 className="text-center mt-7 font-bold text-2xl tracking-wide p-4 underline underline-offset-[10px]">This is the Expense page.</h1> 
          <div className=" mt-5 p-5 text-center">
              <p className="mb-2 font-semibold tracking-widest text-xl">Enter your Daily Income....</p>
              <input type="number" placeholder="Enter your income here" className="bg-gray-900 rounded-md text-md px-3 py-2 text-white italic font-semibold" value={income} onChange={handleIncome}/>
              {/* <input type="text" placeholder="Enter your Income here" className="bg-gray-900 rounded-md text-md px-3 py-2 text-white italic font-semibold" value={income} onChange={handleIncome}/> */}
              <p className="mb-2 font-semibold tracking-widest text-xl">Enter your Daily Expense....</p>
              <input type="text" placeholder="Enter your expense here" className="bg-gray-900 rounded-md text-md px-3 py-2 text-white italic font-semibold" value={expense} onChange={handleExpense}/>
              <br />
              <button className="ml-3 mt-5 rounded px-3 py-1 bg-purple-600 text-lg text-white" onClick={calculation}>Save</button>
              <h2 className="uppercase tracking-widest text-md mt-5 p-5">your daily Expense is : {expense} tk</h2>
              
              {savings>0?<h2 className="uppercase tracking-widest text-md mt-5 p-5">your savings is : {savings} tk</h2>:
              <h2 className="uppercase tracking-widest text-md mt-5 p-5">your loss is : {savings} tk</h2>}
          </div>
        </div>
      </MasterLayout>
      );
  };
  
  export default Expense;