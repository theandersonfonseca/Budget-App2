import { ContextProvider } from './state/context'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import theme from './styles/theme'

import Container from './components/Container'
import Heading from './components/Heading'
import Results from './components/Results'
import Inputs from './components/Inputs'
import Histories from './components/Histories'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <Container>
          <div>
            <Heading />
            <Results />
          </div>

          <div>
            <Inputs />
            <Histories />
          </div>
        </Container>
      </ContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
