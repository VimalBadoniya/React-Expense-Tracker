import "./ExpenseElement.css"
let ExpenseDate = (property) => {
  return (
    <div className="expense-date">
      <div>
        {property.Expense_date.toLocaleString("en-US", { day: "2-digit" })}
      </div>
      <div>
        {property.Expense_date.toLocaleString("en-US", { month: "long" })}
      </div>
      <div>
        {property.Expense_date.toLocaleString("en-US", { year: "numeric" })}
      </div>
    </div>
  );
};
export default ExpenseDate;
