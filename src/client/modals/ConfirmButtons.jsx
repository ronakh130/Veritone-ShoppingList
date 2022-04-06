import React from 'react';
import styled from '@emotion/styled';
import Button from '../components/Button';
import CancelButton from '../components/CancelButton';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 1rem 2rem;
`;

const ConfirmButtons = () => {
  const addHandleClick = () => {
    console.log('add item');
  }

  return (
    <ButtonWrapper>
      <CancelButton />
      <Button clickFunc={addHandleClick} buttonText={'Add Item'}/>
    </ButtonWrapper>
  )
}

export default ConfirmButtons