import { createStore, combineReducers  } from 'redux';

const demoState = {
    expenses: [{
        id: 'string of characters',
        description: 'July Rent',
        note: 'the rent is too dam high',
        amount: 54500,
        createdAt: 0,
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined,
    }
};