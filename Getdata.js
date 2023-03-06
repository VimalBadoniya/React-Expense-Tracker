import ComponentOne from "./ComponentOne";

function GetData(property) {
  console.log(property);
  return (
    <ComponentOne
      date={property.Expense_date}
      details={property.Expense_details}
      location={property.Expense_Location}
      amount={property.Expense_amount}
    />
  );
}
export default GetData;
