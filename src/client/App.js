import React from 'react';
import styled from '@emotion/styled';

import Header from './components/Header';
import Body from './components/Body';

const AppContainer = styled.div`
  margin: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Body />
    </AppContainer>
  );
};

export default App;