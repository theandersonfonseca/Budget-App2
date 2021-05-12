import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContentWrapper = styled.div`
  ${({theme}) => css`
    display: flex;
    justify-content: space-around;
    width: 100%; 
    margin-top: 10rem;

    @media(max-width: 600px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-top: ${theme.spacings.xxlarge};
    }
  `}
`

export const Balance = styled.div`
  ${({theme}) => css`
    color: ${theme.colors.white};
  `}
`

export const BalanceTitle = styled.h2`
  ${({theme}) => css`
    word-break: break-word;
    font-weight: ${theme.font.normal};
    font-size: ${theme.sizes.huge};
  `}
`

export const BalanceResult = styled.span`
  ${({theme}) => css`
    font-size: ${theme.sizes.xxlarge};
  `}
`

export const IncomeAndExpenseTitle = styled.h3`
  ${({theme}) => css`
    font-size: ${theme.sizes.xxlarge};
    font-weight: ${theme.font.normal};
    word-break: break-word;
  `};
`

export const IncomeAndExpenseResult = styled.span`
  ${({theme}) => css`
    font-size: ${theme.sizes.xxlarge};
    font-weight: ${theme.font.normal};
  `}
`

export const Income = styled.div``

export const Expense = styled.div`
  ${({theme}) => css`
    @media(max-width: 600px) {
      margin-left: 0;
      margin-top: ${theme.spacings.small};
    }
  `}
`

export const IncomeTitle = styled(IncomeAndExpenseTitle)`
  ${({theme}) => css`
    color: ${theme.colors.primary};
  `};
`

export const ExpenseTitle = styled(IncomeAndExpenseTitle)`
  ${({theme}) => css`
    color: ${theme.colors.secondary};
  `};
`

export const IncomeResult = styled(IncomeAndExpenseResult)`
  ${({theme}) => css`
    color: ${theme.colors.primary};
  `};
`

export const ExpenseResult = styled(IncomeAndExpenseResult)`
  ${({theme}) => css`
    color: ${theme.colors.secondary};
  `};
`