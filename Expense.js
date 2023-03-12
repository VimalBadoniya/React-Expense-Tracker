import "./ExpenseElement.css"
import ExpenseDate from "./ExpenseDate";


let Expense = (props) =>   {
  return (
    <div className="expense-item__description">
      <div className="expense-item__price">₹{props.Expense_amount}</div>
      <div className="expense-item__price">{props.Expense_title}</div>
      <ExpenseDate Expense_date = {props.Expense_date}></ExpenseDate>
    </div>
  );
}
export default Expense;
