import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

import ModalHeader from './ModalHeader';
import Title from './ModalText/Title';
import Subtitle from './ModalText/Subtitle';
import ItemName from './InputFields/ItemName';
import ItemDesc from './InputFields/ItemDesc';
import ItemNumber from './InputFields/ItemNumber';
import ConfirmButtons from './ConfirmButtons';

import { closeModal } from '../redux/modalSlice';
import { updateItem } from '../redux/listSlice';

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
`

const PurchasedText = styled.label`
  color: var(--modal-placeholders);
  font-family: 'Nunito', sans-serif;
  vertical-align: middle;
`

const EditItemModal = () => {
  const dispatch = useDispatch();

  const itemName = useSelector((state) => state.modals.name);
  const itemDesc = useSelector((state) => state.modals.desc);
  const itemNum = useSelector((state) => state.modals.num);
  const itemCheck = useSelector((state) => state.modals.isChecked);
  const ind = useSelector((state) => state.modals.ind);

  const inputForm = useRef();

  const clickFunc = (event) => {
    event.preventDefault();
    console.log('edit item');
    const name = inputForm.current[0].value;
    const desc = inputForm.current[1].value;
    const num = inputForm.current[2].value;
    const isChecked = inputForm.current[3].checked;

    if (name.length < 1) {
      alert('Please enter name of item');
    } else if (num.length > 5) {
      alert('Please enter quantity of items to add');
    } else {
      dispatch(updateItem({ind, name, desc, isChecked}))
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
          <ItemName text={itemName} />
          <ItemDesc text={itemDesc} />
          <ItemNumber text={itemNum} />
          <TextWrapper>
            <SubmittedBox type='checkbox' defaultChecked={itemCheck}/>
            <PurchasedText>Purchased</PurchasedText>
          </TextWrapper>
        </FormWrapper>
      </BodyWrapper>
      <ConfirmButtons modal={'edit'} handleClick={clickFunc} buttonText={'Save Item'}/>
    </EditModal>
  );
};

export default EditItemModal;
