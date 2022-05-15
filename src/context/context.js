import React, { useReducer, createContext } from 'react'
import contextReducer from './contextReducer'

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":1400,"category":"Lottery","type":"Income","date":"2022-05-15","id":"c0999dd7-682b-4d15-8b8d-8be430608d6d"},{"amount":7000,"category":"Car","type":"Expense","date":"2022-05-15","id":"05e81e87-c90b-48c2-80f4-fd8228500e51"},{"amount":18000,"category":"Salary","type":"Income","date":"2022-05-10","id":"456cc78a-64bf-4d2d-bf15-8023518f4514"},{"amount":400,"category":"Entertainment","type":"Expense","date":"2022-05-10","id":"2a07ee91-efd3-48d4-862f-955f4eeec171"}]

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