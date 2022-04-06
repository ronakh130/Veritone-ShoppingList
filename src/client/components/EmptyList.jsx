import React from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/listSlice';
import Button from './Button';
import { openAddModal } from '../redux/modalSlice';

const EmptyContainer = styled.div`
  margin-top: -10%;
  width: 40rem;
  height: 20rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 0.1rem solid #c6c6c6;
  border-radius: 0.3rem;
`;

const EmptyMessage = styled.p`
  margin-top: 7rem;
  font-family: 'Nunito', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  color: var(--menu-border);
`;

const EmptyList = () => {
  const dispatch = useDispatch();

  function addItemClick() {
    dispatch(openAddModal());

    //temporarily add to list
    dispatch(
      addItem({
        name: 'test',
        desc: 'desc',
        isChecked: false,
      })
    );
  }

  return (
    <EmptyContainer>
      <EmptyMessage>Your shopping list is empty :(</EmptyMessage>
      <Button buttonText={'Add your first item'} clickFunc={addItemClick}/>
    </EmptyContainer>
  );
};

export default EmptyList;
