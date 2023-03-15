import "../ExpenseInput/ExpenseForm.css"

let ExpenseFilter = (props) => {
    let dropDownChangeHandler = (event)=>{
        props.onYearChange(event.target.value)
        console.log(event.target.value)
    }
  return (
    <div className="new-expense">
      <label htmlFor="ExpenseFilter">Filter By Year</label>
      <select id="ExpenseFilter" value={props.selectedYear} onChange={dropDownChangeHandler}>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
