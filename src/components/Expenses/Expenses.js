import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import { useState } from 'react'
import ExpensesFilter from './ExpensesFilter'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  let expensesContent = <p>No expenses found.</p>

  if (filterExpenses.length > 0) {
    expensesContent = filterExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
        {/*{filterExpenses.length > 0 ? (*/}
        {/*  <p>No expenses found.</p>*/}
        {/*) : (*/}
        {/*  filterExpenses.map((expense) => (*/}
        {/*    <ExpenseItem*/}
        {/*      key={expense.id}*/}
        {/*      title={expense.title}*/}
        {/*      amount={expense.amount}*/}
        {/*      date={expense.date}*/}
        {/*    />*/}
        {/*  ))*/}
        {/*)}*/}
        {/*<ExpenseItem*/}
        {/*  title={props.items[0].title}*/}
        {/*  amount={props.items[0].amount}*/}
        {/*  date={props.items[0].date}*/}
        {/*/>*/}
        {/*<ExpenseItem*/}
        {/*  title={props.items[1].title}*/}
        {/*  amount={props.items[1].amount}*/}
        {/*  date={props.items[1].date}*/}
        {/*/>*/}
        {/*<ExpenseItem*/}
        {/*  title={props.items[2].title}*/}
        {/*  amount={props.items[2].amount}*/}
        {/*  date={props.items[2].date}*/}
        {/*/>*/}
        {/*<ExpenseItem*/}
        {/*  title={props.items[3].title}*/}
        {/*  amount={props.items[3].amount}*/}
        {/*  date={props.items[3].date}*/}
        {/*/>*/}
      </Card>
    </div>
  )
}

export default Expenses
