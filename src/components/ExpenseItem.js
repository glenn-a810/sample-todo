import './ExpenseItem.css'

function ExpenseItem(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' })
  const day = props.date.toLocaleString('en-US', { day: '2-digit' })
  const year = props.date.getFullYear()
  // const expenseDate = new Date(2022, 10, 7)
  // const expenseTitle = 'Car Insurance'
  // const expenseAmount = 294.67

  return (
    <div className="expense-item">
      {/*<div>March 28th 2022</div>*/}
      {/*<div>{props.date.toDateString()}</div>*/}
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        {/*<h2>Car Insurance</h2>*/}
        <h2>{props.title}</h2>
        {/*<div className="expense-item__price">$294.67</div>*/}
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
