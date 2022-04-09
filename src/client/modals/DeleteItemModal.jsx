import React from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

import { removeItem } from '../redux/listSlice';
import { closeModal } from '../redux/modalSlice';

import Title from './ModalText/Title';
import Subtitle from './ModalText/Subtitle';
import ConfirmButtons from './ConfirmButtons';

const DeleteModal = styled.div`
  width: 25rem;
  height: 15rem;
  background-color: white;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  padding: 0.5rem;
`;

const DeleteItemModal = () => {
  const dispatch = useDispatch();

  const ind = useSelector((state) => state.modals.currItem.ind);

  const clickFunc = () => {
    dispatch(removeItem(ind));
    dispatch(closeModal('del'));
  };

  return (
    <DeleteModal>
      <TextWrapper>
        <Title text='Delete Item?' />
        <Subtitle text='Are you sure you want to delete this item? This can not be undone.' />
      </TextWrapper>
      <ConfirmButtons modal={'del'} handleClick={clickFunc} buttonText={'Delete'} />
    </DeleteModal>
  );
};

export default DeleteItemModal;
