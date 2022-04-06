import React from 'react';
import styled from '@emotion/styled';

const GrayWrapper = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalBackdrop = () => {
  return (
    <GrayWrapper>
      
    </GrayWrapper>
  )
}

export default ModalBackdrop;