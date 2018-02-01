import { createStore } from 'redux'; 

//ACTION GENERATOR FUNCTIONS => functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});
    
const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

//setCount 
const setCount = ({ count }) => ({
    type: 'SET',
    count
});

//resetCount
const resetCount = () => ({
    type: 'RESET'
});

//THE GLOBAL STORE: IN REDUX ITS CALLED A REDUCER -- 
//1.reducers are a pure functions it only uses whats in its on scope  --no relying on variables outside the reducers scope-- no global variables
//2.Never change state or action add to state ex. return { count: ...} this traces state changes rather to mutating and overriding 

const store = createStore((state = { count: 0}, action)=> { //, action allow dynamic interaction
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy //keyword action references the action generator
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - 1
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default: 
            return state;
    }
});


store.subscribe(() => {         //subscribe watches for changes to the store
    console.log(store.getState()); //it tracks every state change
})

const unsubscribe = store.subscribe(() => {         //subscribe watches for changes to the store
    console.log(store.getState()); //it tracks every state change
})


console.log(store.getState());


//Actions communicate with the store -- it is an object that gets sent to the store 
//increment the count, decrement the count, 
 //+1 //type is a required property
 //incrementBy is made available via that action object: { count: 0}, action)=> { see line


// store.dispatch({
//     type: 'INCREMENT',   
//     incrementBy: 5       
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount( {decrementBy: 10 }));

store.dispatch(resetCount());



store.dispatch(setCount({ count: 101 }));

console.log(store.getState());