import React from 'react';
import styled from '@emotion/styled';
import ListItem from './ListItem';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { openAddModal } from '../redux/modalSlice';

const ListWrapper = styled.div`
  align-self: flex-start;
  width: 70%;
  margin-top: 2rem;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  margin-bottom: -1rem;
`
const ListTitle = styled.h4`
  font-family: 'Nunito', sans-serif;
  font-size: 1.2rem;
`


const FilledList = ({shoppingList}) => {
  const dispatch = useDispatch();

  function addItemClick() {
    dispatch(openAddModal());
  }

  return (
    <ListWrapper>
      <ListHeader>
        <ListTitle>Your Items</ListTitle>
        <Button buttonText={'Add Item'} clickFunc={addItemClick} />
      </ListHeader>
      {shoppingList.map((ele, ind) => <ListItem item={ele} ind={ind} key={ind}/>)}
    </ListWrapper>
  )
}

export default FilledList