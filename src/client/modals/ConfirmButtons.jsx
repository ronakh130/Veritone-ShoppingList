import React from 'react';
import styled from '@emotion/styled';
import Button from '../components/Button';
import CancelButton from '../components/CancelButton';
import { useDispatch } from 'react-redux';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 1rem 2rem;
`;

const ConfirmButtons = ({ modal }) => {
  const dispatch = useDispatch();

  const addHandleClick = (event) => {
    event.preventDefault();
    console.log('add item');
  };

  return (
    <ButtonWrapper>
      <CancelButton modal={modal} />
      <Button clickFunc={addHandleClick} buttonText={'Add Item'} />
    </ButtonWrapper>
  );
};

export default ConfirmButtons;
