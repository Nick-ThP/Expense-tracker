import React, { useReducer, createContext } from 'react'
import contextReducer from './contextReducer'

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":200,"category":"Lottery","type":"Income","date":"2022-04-10","id":"fb571f4f-aad4-4c10-abde-65d7396f7c90"},{"amount":18000,"category":"Salary","type":"Income","date":"2022-04-10","id":"456cc78a-64bf-4d2d-bf15-8023518f4514"},{"amount":400,"category":"Entertainment","type":"Expense","date":"2022-04-10","id":"2a07ee91-efd3-48d4-862f-955f4eeec171"},{"amount":5600,"category":"Travel","type":"Expense","date":"2022-04-10","id":"1dd86b9a-2d19-4f56-816a-03c8e2e21286"}]

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({ children }) => {

    const [transactions, dispatch] = useReducer(contextReducer, initialState)

    // Action Creators
    const deleteTransaction = (id) => {dispatch({ type: 'DELETE_TRANSACTION', payload: id })}
    const addTransaction = (transaction) => {dispatch({ type: 'ADD_TRANSACTION', payload: transaction })}
    const balance = transactions.reduce((acc, currVal) => currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount, 0)

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction, 
            addTransaction,
            balance,
            transactions
         }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}