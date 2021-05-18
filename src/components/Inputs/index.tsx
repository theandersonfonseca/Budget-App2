import React, { useContext, useState } from 'react'

import { Context } from '../../state/context'
import { Actions } from '../../state/types'

import isInputValid from '../../utils/isInputValid'

import * as S from './styles'

const Inputs = () => {
  const [incomeDescription, setIncomeDescription] = useState('')
  const [incomeAmount, setIncomeAmount] = useState('')
  const [expenseDescription, setExpenseDescription] = useState('')
  const [expenseAmount, setExpenseAmount] = useState('')

  const { state, dispatch } = useContext(Context)

  const addIncome = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isInputValid(incomeDescription, incomeAmount, state.incomeList)) {
      dispatch({
        type: Actions.addIncome,
        payload: { description: incomeDescription, amount: +incomeAmount }
      })
    }

    setIncomeDescription('')
    setIncomeAmount('')
  }

  const addExpense = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isInputValid(expenseDescription, expenseAmount, state.expenseList)) {
      dispatch({
        type: Actions.addExpense,
        payload: { description: expenseDescription, amount: +expenseAmount }
      })
    }

    setExpenseDescription('')
    setExpenseAmount('')
  }

  return (
    <S.Wrapper>
      <S.Form onSubmit={addIncome}>
        <S.IncomeInput
          value={incomeDescription}
          onChange={(e) => setIncomeDescription(e.target.value)}
          type="text"
          placeholder="Descreva a renda..."
        />
        <S.IncomeInput
          value={incomeAmount}
          onChange={(e) => setIncomeAmount(e.target.value)}
          type="number"
          placeholder="Coloque o valor..."
        />
        <S.IncomeButton>Confirmar</S.IncomeButton>
      </S.Form>

      <S.Form onSubmit={addExpense}>
        <S.ExpenseInput
          value={expenseDescription}
          onChange={(e) => setExpenseDescription(e.target.value)}
          type="text"
          placeholder="Descreva a despesa..."
        />
        <S.ExpenseInput
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
          type="number"
          placeholder="Coloque o valor..."
        />
        <S.ExpenseButton>Confirmar</S.ExpenseButton>
      </S.Form>
    </S.Wrapper>
  )
}

export default Inputs
