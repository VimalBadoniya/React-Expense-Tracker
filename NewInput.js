import "../Expense/ExpenseElement.css"
import "./NewInput.css"
import ExpenseForm from "./ExpenseForm"
let NewInput = (props) =>{
    return (
        <div className="expense-item">
            <ExpenseForm  mydata={props.MyAttribute}></ExpenseForm>
        </div>
    ) ; 
}

export default NewInput  ; 