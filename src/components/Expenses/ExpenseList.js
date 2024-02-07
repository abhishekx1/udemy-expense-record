import React from 'react';

import ExpenseItem from './ExpenseItem'
import '../Expenses/ExpenseList.css';

const ExpenseList = (props) => {
    if (props.item.length === 0) {
        return <h2 className='expenses-list__fallback'>No Expenses Found!</h2>; 
    }
    
    return (
        <ul className='expenses-list'>
            {/* map is used to extract the array item */}
            {props.item.map(expense =>
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />)}
        </ul>
    );
}

export default ExpenseList;