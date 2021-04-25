import React from 'react'
import { WrapperComponent } from './components'
import { MainContent } from './pages'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <WrapperComponent>
      <MainContent/>
      <GlobalStyle/>
    </WrapperComponent>
  );
}

export default App;
