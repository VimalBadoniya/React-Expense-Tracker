import { useSelector } from "react-redux";

const Expenses = () => {
  const exp = useSelector((state) => {
    return state.allExpense;
  });
  return (
    <ul>
      {exp.map((item) => {
        return (
          <li>
            {item.expense} = ${item.amount}
          </li>
        );
      })}
    </ul>
  );
};

export default Expenses;
