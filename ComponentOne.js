import './ComponentOne.css'

function ComponentOne(props){
    console.log(props)
    return (
    <div className='container'>
        <div className='left'>{props.date}</div>
        <div className='center'>${props.amount} </div>
        <div className='right'>{props.details}</div>
    </div>
    )
}
export default ComponentOne ; 