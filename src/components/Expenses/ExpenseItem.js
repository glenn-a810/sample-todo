import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2022, 10, 7)
  // const expenseTitle = 'Car Insurance'
  // const expenseAmount = 294.67
  const clickHandler =() => {
    console.log('Clicked')
  }

  return (
    <Card className="expense-item">
      {/*<div>March 28th 2022</div>*/}
      {/*<div>{props.date.toDateString()}</div>*/}
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        {/*<h2>Car Insurance</h2>*/}
        <h2>{props.title}</h2>
        {/*<div className="expense-item__price">$294.67</div>*/}
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem
