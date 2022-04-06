import React from 'react';
import styled from '@emotion/styled';
import AddItemModal from './AddItemModal';

const GrayWrapper = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBackdrop = () => {

  return (
    <GrayWrapper>
      <AddItemModal />
    </GrayWrapper>
  )
}

export default ModalBackdrop;