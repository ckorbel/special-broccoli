import { createStore } from 'redux'; 

const store = createStore((state = { count: 0}, action)=> { //, action allow dynamic interaction
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - 1
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
store.dispatch({
    type: 'INCREMENT', //+1 //type is a required property
    incrementBy: 5 //incrementBy is made available via that action object: { count: 0}, action)=> { see line
});

unsubscribe();

store.dispatch({
    type: 'RESET' //0
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

console.log(store.getState());