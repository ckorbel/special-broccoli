import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //provider allows us to provide the store to the components that need acces it
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss'; 
import { setTimeout } from 'timers';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Internet bill', createdAt: 1000  }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


const jsx = (  //now components have access to the store code stays fixed
    <Provider store={store}> 
        <AppRouter /> 
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
