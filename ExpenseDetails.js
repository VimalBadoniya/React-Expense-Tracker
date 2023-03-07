import "./ExpenseDetails.css";

function ExpenseDetails(props) {
  return (
    <div >
      <div className="left">{props.Expense_amount}</div>
      <div className="right">{props.Expense_details}</div>
    
    
    </div>
  );
}
export default ExpenseDetails;
