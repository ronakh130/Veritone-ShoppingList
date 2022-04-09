import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

import { closeModal } from '../redux/modalSlice';
import { updateItem } from '../redux/listSlice';

import ModalHeader from './ModalHeader';
import Title from './ModalText/Title';
import Subtitle from './ModalText/Subtitle';
import ItemName from './InputFields/ItemName';
import ItemDesc from './InputFields/ItemDesc';
import ItemNumber from './InputFields/ItemNumber';
import ConfirmButtons from './ConfirmButtons';

const EditModal = styled.div`
  width: 30rem;
  height: 40rem;
  background-color: white;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
  border-bottom: 0.5rem solid var(--checkbox-filled);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BodyWrapper = styled.div`
  flex: 1 1 80%;
`;

const FormWrapper = styled.form`
  height: 100%;
`;

const SubmittedBox = styled.input`
  margin: 1.5rem 1.5rem;
  height: 1.2rem;
  width: 1.2rem;
  cursor: pointer;
`;

const TextWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const PurchasedText = styled.label`
  color: var(--modal-placeholders);
  font-family: 'Nunito', sans-serif;
  vertical-align: middle;
`;

const EditItemModal = () => {
  const dispatch = useDispatch();

  const currItem = useSelector(state => state.modals.currItem);

  const inputForm = useRef();

  const clickFunc = (event) => {
    event.preventDefault();

    const name = inputForm.current[0].value;
    const desc = inputForm.current[1].value;
    const count = parseInt(inputForm.current[2].value);
    const isChecked = inputForm.current[3].checked;

    if (name.length < 1) {
      alert('Please enter name of item');
    } else if (count.length > 5) {
      alert('Please enter quantity of items to add');
    } else {
      dispatch(updateItem({ ind: currItem.ind, item: { name, desc, isChecked, count } }));
      dispatch(closeModal('edit'));
    }
  };

  return (
    <EditModal>
      <ModalHeader modal={'edit'} />
      <BodyWrapper>
        <Title text={'Edit an Item'} />
        <Subtitle text={'Edit your item below'} />
        <FormWrapper ref={inputForm}>
          <ItemName text={currItem.name} />
          <ItemDesc text={currItem.desc} />
          <ItemNumber text={currItem.count} />
          <TextWrapper>
            <SubmittedBox type='checkbox' defaultChecked={currItem.isChecked} />
            <PurchasedText>Purchased</PurchasedText>
          </TextWrapper>
        </FormWrapper>
      </BodyWrapper>
      <ConfirmButtons modal={'edit'} handleClick={clickFunc} buttonText={'Save Item'} />
    </EditModal>
  );
};

export default EditItemModal;
