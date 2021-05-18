import styled, { css } from 'styled-components'

const Container = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 3rem;
    width: 80vw;
    min-height: 80vh;
    margin-top: 3rem;
    padding: ${theme.spacings.large};
    background: ${theme.colors.dark};
    box-shadow: 0 0 0.3rem 0.2rem ${theme.colors.dark};
    border-radius: ${theme.border.radius};

    @media (max-width: 1200px) {
      width: 90vw;
    }

    @media (max-width: 900px) {
      display: block;
    }

    @media (max-width: 600px) {
      padding: ${theme.spacings.medium};
    }
  `}
`

export default Container
