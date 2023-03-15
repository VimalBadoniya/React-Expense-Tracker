import Expense from "./Expense";
import "../ExpenseInput/ExpenseForm.css";



let AllExpenses = (props) => {
  
let idd = 1000 ;
  let getId = ()=>{
    idd++
    return idd
  }

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
let FilteredData = props.allData.filter((expense)=>{return expense.date.getFullYear().toString()===props.selectedYear})
let AllexpenseData = FilteredData.map((expense) => {
    expense.id = getId()
    return (
        <Expense key={expense.id}
          Expense_amount={expense.amount}
          Expense_title={expense.title}
          Expense_date={expense.date}
        ></Expense>
      )}
      )
      
    return AllexpenseData ;
    }







export default AllExpenses;
