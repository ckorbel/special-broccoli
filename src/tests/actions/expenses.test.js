import { addExpense, editExpense, removeExpense } from '../../actions/expenses'; 
import { existsSync } from 'fs';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({   //toEqual instead of toBe -- use toEqual when comparing 2 objects
        type: 'REMOVE_EXPENSE',
        id: '123abc'
     })
});

/*--------------------------------------------editExpense Test----------------------------------------------*/
test('should setup editExpense action object', () => {
    const action = editExpense('123abc', { note: 'New note value' });
    expect(action).toEqual({   
        type: 'EDIT_EXPENSE',
        id: '123abc', 
        updates: {
            note: 'New note value' 
        }
     });
});

/*-------------------------------------------------addExpense Tests---------------------------------------*/
test ('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent', 
        note: 'last months rent', 
        amount: 109500, 
        createdAt: 1000
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)  //id is randomly generated so no expected value is possible 
        }
    });
});

test ('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          description: '',
          note: '',
          amount: 0, 
          createdAt: 0
        }
    });
});