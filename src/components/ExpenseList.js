import React from 'react';
import { connect } from 'react-redux';


const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1>
        {props.expenses.length}
    </div>
);

export default connect((state) => { //define a function that determines what information from the store that we want out component to have access to
    return {
        expenses: state.expenses //passing 
    };
})(ExpenseList);

