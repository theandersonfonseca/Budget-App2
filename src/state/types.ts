export type BudgetStateType = {
  incomeList: ListType[],
  expenseList: ListType[],
}

export type ListType = {
  id: number,
  description: string,
  amount: number, 
} 

export enum Actions {
  addIncome = 'ADD_INCOME',
  addExpense = 'ADD_EXPENSE',
  removeIncome = 'REMOVE_INCOME',
  removeExpense = 'REMOVE_EXPENSE',
}

export type ActionsType = 
  | { type: Actions.addIncome; payload: {description: string, amount: number}}
  | { type: Actions.addExpense; payload: {description: string, amount: number}}
  | { type: Actions.removeIncome; payload: string}
  | { type: Actions.removeExpense; payload: string};
  
export type ContextProviderType = {
  children: React.ReactNode
}