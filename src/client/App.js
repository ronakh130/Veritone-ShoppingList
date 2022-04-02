import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';

const AppContainer = styled.div`
  margin: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const App = () => {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  )
}

export default App;