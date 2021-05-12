import uniqueID from '../utils/uniqueID'

import {BudgetStateType, Actions, ActionsType} from './types'

export const BudgetReducer = (state: BudgetStateType, action: ActionsType) => {
  switch(action.type) {
    case Actions.addIncome: 
      return {...state,  incomeList: [...state.incomeList, {
          id: uniqueID(), 
          description: action.payload.description, 
          amount: action.payload.amount
        }
      ]}

    case Actions.addExpense: 
      return {...state, expenseList: [...state.expenseList, {
          id: uniqueID(), 
          description: action.payload.description, 
          amount: action.payload.amount
        }
      ]}
      

    case Actions.removeIncome:
      return {...state, incomeList: state.incomeList.filter(income => income.description !== action.payload)     
      }
      
    case Actions.removeExpense: 
      return {...state, expenseList: state.expenseList.filter(expense => expense.description !== action.payload) }

    default:
      return state
  }
}