import React from 'react';
import styled from '@emotion/styled';

const BodyContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  color: #87898c;
`;

const AddItemButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--button-primary);
  color: white;
  border: none;
  border-radius: 0.2rem;
  transition: 100ms;

  &:hover {
    cursor: pointer;
    background-color: var(--button-primary-hover);
    transition: 100ms;
  }

  &:active {
    background-color: var(--button-primary-active);
    transition: 100ms;
  }
`;

const Body = () => {
  return (
    <BodyContainer>
      <EmptyContainer>
        <EmptyMessage>Your shopping list is empty :(</EmptyMessage>
        <AddItemButton>Add your first item</AddItemButton>
      </EmptyContainer>
    </BodyContainer>
  );
};

export default Body;
