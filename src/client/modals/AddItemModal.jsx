import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';

import ModalHeader from './ModalHeader';
import Title from './ModalText/Title';
import Subtitle from './ModalText/Subtitle';
import ItemName from './InputFields/ItemName';
import ItemDesc from './InputFields/ItemDesc';
import ItemNumber from './InputFields/ItemNumber';
import ConfirmButtons from './ConfirmButtons';

import { addItem } from '../redux/listSlice';
import { closeModal } from '../redux/modalSlice';

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
  const dispatch = useDispatch();

  const inputForm = useRef();

  const clickFunc = (event) => {
    event.preventDefault();
    console.log('add item');
    const name = inputForm.current[0].value;
    const desc = inputForm.current[1].value;
    const num = inputForm.current[2].value;
    
    if(name.length < 1){
      alert('Please enter name of item');
    }else if(num.length > 5){
      alert('Please enter quantity of items to add');
    }else{
      dispatch(addItem({name, desc, num}));
      dispatch(closeModal());
    }
  };

  return (
    <AddModal>
      <ModalHeader modal={'add'} />
      <BodyWrapper>
        <Title text={'Add an Item'} />
        <Subtitle text={'Add your new item below'} />
        <form ref={inputForm}>
          <ItemName text={'Item Name'} />
          <ItemDesc text={'Description'} />
          <ItemNumber text={'How many?'} />
        </form>
      </BodyWrapper>
      <ConfirmButtons modal={'add'} addHandleClick={clickFunc} />
    </AddModal>
  );
};

export default AddItemModal;
