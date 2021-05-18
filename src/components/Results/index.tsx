import { useContext, useEffect, useState } from 'react'

import { Context } from '../../state/context'

import convertToMoney from '../../utils/convertToMoney'

import * as S from './styles'

const Results = () => {
  const { state } = useContext(Context)

  const [amounts, setAmounts] = useState({
    income: 0,
    expense: 0,
    balance: 0
  })

  useEffect(() => {
    const newIncome = state.incomeList.reduce(
      (acc, income) => acc + income.amount,
      0
    )
    const newExpense = state.expenseList.reduce(
      (acc, expense) => acc + expense.amount,
      0
    )
    const newBalance = newIncome - newExpense

    setAmounts({
      income: newIncome,
      expense: newExpense,
      balance: newBalance
    })
  }, [state])

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Balance>
          <S.BalanceTitle>Seu Saldo</S.BalanceTitle>
          <S.BalanceResult>{convertToMoney(amounts.balance)}</S.BalanceResult>
        </S.Balance>
      </S.ContentWrapper>

      <S.ContentWrapper>
        <S.Income>
          <S.IncomeTitle>Rendimentos</S.IncomeTitle>
          <S.IncomeResult>{convertToMoney(amounts.income)}</S.IncomeResult>
        </S.Income>

        <S.Expense>
          <S.ExpenseTitle>Despesas</S.ExpenseTitle>
          <S.ExpenseResult>{convertToMoney(amounts.expense)}</S.ExpenseResult>
        </S.Expense>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default Results
