import React, { createContext, useReducer, useEffect } from 'react';
import {BudgetReducer} from './reducers'
import {BudgetStateType, ContextProviderType} from './types'

const localStorageData = JSON.parse(localStorage.getItem('budgetstate') ||' {}')

let budgetState = Object.keys(localStorageData).length === 0 && localStorageData.constructor === Object ? {
  incomeList: [],
  expenseList: []
} : localStorageData

const Context = createContext<{
  state: BudgetStateType,
  dispatch: React.Dispatch<any>
}>({
  state: budgetState,
  dispatch: () => null
});

const ContextProvider = ({ children }: ContextProviderType) => {
  const [state, dispatch] = useReducer(BudgetReducer,  budgetState)

  useEffect(() => {
    localStorage.setItem('budgetstate', JSON.stringify(state))
  }, [state])

  return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context };