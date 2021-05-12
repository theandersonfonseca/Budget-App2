import styled, { css } from 'styled-components'
import {Trash} from '@styled-icons/boxicons-regular'

export const Wrapper = styled.section`
  ${({theme}) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacings.medium};
    margin-top: 10rem;
    height: 40rem;
    overflow-y: scroll;
    padding-right: ${theme.spacings.xsmall};

    ::-webkit-scrollbar-track {
      background-color: ${theme.colors.dark};
    }
    ::-webkit-scrollbar {
      width: 0.5rem;
      background: ${theme.colors.dark};
    }
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.gray};
    }

    @media(max-width: 600px) {
      grid-template-columns: 1fr;
      margin-top: ${theme.spacings.xxlarge};
    }
  `}
`

export const IncomeHistory = styled.div``

export const ExpenseHistory = styled.div``

export const Title = styled.h2`
  ${({theme}) => css`
    margin-bottom: ${theme.spacings.xsmall};
    font-size: ${theme.sizes.large};
    color: ${theme.colors.grayLight};
    font-weight: ${theme.font.normal};
    letter-spacing: 0.2rem;
  `}
`

export const IncomeAndExpenseWrapper = styled.div`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    margin-top: ${theme.spacings.xxsmall};
    font-size: ${theme.sizes.small};
    color: ${theme.colors.white}; 
  `}
`

export const Card = styled.div`
  ${({theme}) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: .5rem .8rem;
    border-radius: ${theme.border.radius};
    font-weight: ${theme.font.bold};
  `} 
`

export const IncomeCard = styled(Card)`
  ${({theme}) => css`
    background: ${theme.colors.primary};
  `}
`

export const ExpenseCard = styled(Card)`
  ${({theme}) => css`
    background: ${theme.colors.secondary};
  `}
`

export const Description = styled.p``

export const Amount = styled.span``

export const TrashIcon = styled(Trash)`
  ${({theme}) => css`   
    width: ${theme.sizes.xxlarge};
    margin-left: ${theme.spacings.xsmall};
    color: ${theme.colors.secondary};
    cursor: pointer;
  `}   
`