import React, { useState } from 'react'
import './Expense.css'
import Card from "./Card";
import ExpensesFilter from "../NewExpenses/ExpensesFilter";
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

const Expense = (props) => {
  const [filteredYear, selecFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    selecFilteredYear(selectedYear);
  };

  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // outputing conditional content method 3
  // let expenseContent = <p>No Expenses Found!</p>;
  // if (filteredExpenses.length > 0) {
  //   // map is used to extract the array item
  //   expenseContent = filteredExpenses.map(expense =>
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />)
  // }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseList item={filteredExpenses}></ExpenseList>
      {/* {expenseContent} */}

      {/* outputing conditional content method 2 */}
      {/* {filteredExpenses.length === 0 && <p>No Expenses Found!</p>}
      {filteredExpenses.length > 0 && 
        filteredExpenses.map(expense =>
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />)} */}

      {/* outputing conditional content method 1 */}
      {/* {filteredExpenses.length === 0 ? (<p>No Expenses Found!</p>) : 
      (filteredExpenses.map(expense =>
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
      />))} */}
    </Card>
  );
}

export default Expense;