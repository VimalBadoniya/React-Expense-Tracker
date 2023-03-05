import ComponentOne from "./ComponentOne";

function GetData(property){
    console.log(property)
    return (
        <ComponentOne date = {property.Expense_date}  amount={property.Expense_amount} details={property.Expense_details}/>
    )
}
export default GetData ; 