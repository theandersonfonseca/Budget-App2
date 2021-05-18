import styled, { css } from 'styled-components'

export const Wrapper = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.sizes.huge};
    text-transform: uppercase;
    font-weight: ${theme.font.normal};
    color: ${theme.colors.secondary};
    letter-spacing: calc(${theme.spacings.xxsmall} / 2);
  `}
`
