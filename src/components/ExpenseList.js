import React from 'react';
import { connect } from 'react-redux';
import  ExpenseListItem  from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.length}
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense}/>;
        })}
    </div>
);

const mapStateToProps = (state) => { //define a function that determines what information from the store that we want out component to have access to
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }; //note: as the store changes the component will get re-rendered with those new values. 
};

export default connect(mapStateToProps)(ExpenseList);

