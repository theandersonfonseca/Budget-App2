import React, { useContext } from 'react'

import { Context } from '../../state/context'
import { Actions } from '../../state/types'

import convertToMoney from '../../utils/convertToMoney'

import * as S from './styles'

const Histories = () => {
  const { state, dispatch } = useContext(Context)

  const removeIncome = (e: React.MouseEvent<SVGElement>) => {
    const incomeToRemove =
      e.currentTarget.previousElementSibling?.children[0].innerHTML

    dispatch({ type: Actions.removeIncome, payload: incomeToRemove })
  }

  const removeExpense = (e: React.MouseEvent<SVGElement>) => {
    const expenseToRemove =
      e.currentTarget.previousElementSibling?.children[0].innerHTML

    dispatch({ type: Actions.removeExpense, payload: expenseToRemove })
  }

  return (
    <S.Wrapper>
      <S.IncomeHistory>
        <S.Title>Histórico de Rendas</S.Title>

        {state.incomeList.map((income) => (
          <S.IncomeAndExpenseWrapper key={income.id}>
            <S.IncomeCard>
              <S.Description>{income.description}</S.Description>
              <S.Amount>{convertToMoney(income.amount)}</S.Amount>
            </S.IncomeCard>

            <S.TrashIcon onClick={removeIncome} title="Remover" />
          </S.IncomeAndExpenseWrapper>
        ))}
      </S.IncomeHistory>

      <S.ExpenseHistory>
        <S.Title>Histórico de Despesas</S.Title>

        {state.expenseList.map((expense) => (
          <S.IncomeAndExpenseWrapper key={expense.id}>
            <S.ExpenseCard>
              <S.Description>{expense.description}</S.Description>
              <S.Amount>{convertToMoney(expense.amount)}</S.Amount>
            </S.ExpenseCard>

            <S.TrashIcon onClick={removeExpense} title="Remover" />
          </S.IncomeAndExpenseWrapper>
        ))}
      </S.ExpenseHistory>
    </S.Wrapper>
  )
}

export default Histories
