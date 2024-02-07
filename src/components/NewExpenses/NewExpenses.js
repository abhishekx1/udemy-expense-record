import React, {useState} from 'react';
import './NewExpenses.css';
import ExpensesForm from "../NewExpenses/ExpensesForm";

const NewExpenses = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpeneseData) => {
        const expenseData = {
            ...enteredExpeneseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return <div className='new-expense'>
        {/* !isEditinh && is use to check that condition is false */}
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpensesForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
};

export default NewExpenses;