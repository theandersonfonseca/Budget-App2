import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({theme}) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacings.xxlarge};

    @media(max-width: 600px) {
      display: flex;
      flex-direction: column;
    }

    @media(max-width: 900px) {
      margin-top: ${theme.spacings.xxlarge};
      gap: ${theme.spacings.medium};
    }
  `}
`

export const Form = styled.form`
  width: 100%;
 
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    appearance: none;
    margin: 0; 
  }
`

export const Input = styled.input`
  ${({theme}) => css`
    width: 100%;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border: none;
    background: none;
    outline: none;
    color: ${theme.colors.grayLight};
    font-size: ${theme.sizes.small};
    border-bottom: solid 0.2rem ${theme.colors.gray};
    margin-bottom: ${theme.spacings.xsmall};
    transition: ${theme.transition.default};
  `}
`

export const IncomeInput = styled(Input)`
  ${({theme}) => css`
    &:focus {
      border-bottom: solid 0.2rem ${theme.colors.primary};
    }
  `}
`
export const ExpenseInput = styled(Input)`
  ${({theme}) => css`
    &:focus {
      border-bottom: solid 0.2rem ${theme.colors.secondary};
    }
  `}
`

export const Button = styled.button`
  ${({theme}) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    font-size: ${theme.sizes.small};
    border: none;
    outline: none;
    color: ${theme.colors.grayLight};
    font-weight: ${theme.font.bold};
    cursor: pointer;
    transition: ${theme.transition.default};

    &:hover {
      opacity: .8;
    }
  `}
`
export const IncomeButton = styled(Button)`
  ${({theme}) => css`
    background: ${theme.colors.primary};
  `}
`
export const ExpenseButton = styled(Button)`
  ${({theme}) => css`
    background: ${theme.colors.secondary};
  `}
`
