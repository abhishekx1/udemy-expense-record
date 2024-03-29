// import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

const ExpenseItem = (props) => {
   return (
      <li>
         <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item-description'>
               <h2>{props.title}</h2>
               <div className='expense-item-price'>{props.amount}</div>
            </div>
         </Card>
      </li>
   );
}

export default ExpenseItem;