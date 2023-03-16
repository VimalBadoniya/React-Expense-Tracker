import Expense from "./Expense";
import "../ExpenseInput/ExpenseForm.css";

let AllExpenses = (props) => {
  let idd = 1000;
  let getId = () => {
    idd++;
    return idd;
  };

  // let AllexpenseData = [];
  // for (let i = 0; i < props.allData.length; i++) {
  //     AllexpenseData.push(<div className="new-expense" key={getId()}>
  //       <Expense
  //         Expense_amount={props.allData[i].amount}
  //         Expense_title={props.allData[i].title}
  //         Expense_date={props.allData[i].date}
  //       ></Expense>
  //     </div>)
  //   };
  //   return AllexpenseData;

  // let AllexpenseData =
  //  props.allData.map((expense) => {
  //   expense.id = getId()
  //   console.log(expense)

  //     return (
  //       <Expense key={expense.id}
  //         Expense_amount={expense.amount}
  //         Expense_title={expense.title}
  //         Expense_date={expense.date}
  //       ></Expense>
  //     );

  // });

  // return AllexpenseData;
  let FilteredData = props.allData.filter((expense) => {
    return expense.date.getFullYear().toString() === props.selectedYear;
  });

  return (
    <div>
      {FilteredData.length > 1 &&
        FilteredData.map((expense) => (
          <Expense
            key={getId()}
            Expense_amount={expense.amount}
            Expense_title={expense.title}
            Expense_date={expense.date}
          ></Expense>
        ))}
      {FilteredData.length === 0 && <h2>No Data Found</h2>}
      {FilteredData.length === 1 &&
        FilteredData.map((expense) => (
          <div key={getId()}><h3>Only One Expense here , Please add more...</h3>
            <Expense
          
          Expense_amount={expense.amount}
          Expense_title={expense.title}
          Expense_date={expense.date}
        ></Expense></div>
          
        ))}
    </div>
  );
};

export default AllExpenses;
