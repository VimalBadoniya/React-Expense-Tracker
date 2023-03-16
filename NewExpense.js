import { useState } from "react";
import "../ExpenseInput/ExpenseForm.css";
import ExpenseForm from "../ExpenseInput/ExpenseForm";

const NewExpense = (props)=>{

   const [newExpense , setNewExpense] = useState(true) ; 

   const AddExpenseHandler = () => {
    setNewExpense(false)
   }

   const CancelHandler = () =>{
    setNewExpense(true)
   }
   
    return (<div className="button new-expense">
        {newExpense && <button onClick={AddExpenseHandler}>Add Expense</button>}
        {!newExpense && <ExpenseForm onAddExpense={props.onAddExpense} onCancel={CancelHandler}/>}
    </div>)
}

export default NewExpense ; 