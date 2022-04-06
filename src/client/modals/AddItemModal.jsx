import React from 'react';
import styled from '@emotion/styled';
import ModalHeader from './ModalHeader';
import Title from './ModalText/Title';
import Subtitle from './ModalText/Subtitle';
import ItemName from './InputFields/ItemName';
import ItemDesc from './InputFields/ItemDesc';
import ItemNumber from './InputFields/ItemNumber';
import ConfirmButtons from './ConfirmButtons';

const AddModal = styled.div`
  width: 30rem;
  height: 40rem;
  background-color: white;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.25);
  border-bottom: 0.5rem solid var(--checkbox-filled);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BodyWrapper = styled.div`
  flex: 1 1 80%;
`;

const AddItemModal = () => {
  return (
    <AddModal>
      <ModalHeader />
      <BodyWrapper>
        <Title text={'Add an Item'} />
        <Subtitle text={'Add your new item below'} />
        <ItemName text={'Item Name'} />
        <ItemDesc text={'Description'} />
        <ItemNumber text={'How many?'} />
      </BodyWrapper>
      <ConfirmButtons />
    </AddModal>
  )
}

export default AddItemModal