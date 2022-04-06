import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import ModalHeader from './ModalHeader';

const AddModal = styled.div`
  width: 30rem;
  height: 40rem;
  background-color: white;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.25);
`;

const AddItemModal = () => {
  return (
    <AddModal>
      <ModalHeader />
    </AddModal>
  )
}

export default AddItemModal