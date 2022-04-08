import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import Body from './components/Body';
import ModalBackdrop from './modals/ModalBackdrop';

const AppContainer = styled.div`
  margin: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const modalOpen = useSelector((state) => state.modals.modalOpen);

  return (
    <AppContainer>
      <Header />
      <Body />
      {modalOpen && <ModalBackdrop />}
    </AppContainer>
  );
};

export default App;
