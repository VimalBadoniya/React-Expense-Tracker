import "./ExpenseElement.css";

let ExpenseDetails = (props) => {
  return (
    <div className="expense-item__description">
      <div className="expense-item__price">${props.Expense_amount}</div>
      <div className="expense-item__price">{props.Expense_details}</div>
    </div>
  );
}
export default ExpenseDetails;
