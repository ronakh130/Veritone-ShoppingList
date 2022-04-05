import React from 'react';
import styled from '@emotion/styled';
import ListItem from './ListItem';
import Button from './Button';

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

  return (
    <ListWrapper>
      <ListHeader>
        <ListTitle>Your Items</ListTitle>
        <Button buttonText={'Add Item'}/>
      </ListHeader>
      {shoppingList.map((ele, ind) => <ListItem item={ele} key={ind}/>)}
    </ListWrapper>
  )
}

export default FilledList