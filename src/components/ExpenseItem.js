import './ExpenseItem.css'

function ExpenseItem() {
  const expenseDate = new Date(2022, 10, 7)
  const expenseTitle = 'Car Insurance'
  const expenseAmount = 294.67

  return (
    <div className="expense-item">
      {/*<div>March 28th 2022</div>*/}
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        {/*<h2>Car Insurance</h2>*/}
        <h2>{expenseTitle}</h2>
        {/*<div className="expense-item__price">$294.67</div>*/}
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
