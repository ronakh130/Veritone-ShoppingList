import React from 'react';
import styled from '@emotion/styled';

import ExitModal from './ExitModal';

const ModalHeaderWrapper = styled.div`
  width: 100%;
  flex: 0 0 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--modal-header);
`;

const ModalTitle = styled.div`
  font-family: 'Dosis', sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0rem 1.5rem;
`;

const ModalHeader = ({ modal }) => {
  return (
    <ModalHeaderWrapper>
      <ModalTitle>SHOPPING LIST</ModalTitle>
      <ExitModal modal={modal} />
    </ModalHeaderWrapper>
  );
};

export default ModalHeader;
