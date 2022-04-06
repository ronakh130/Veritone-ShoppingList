import React from 'react';
import styled from '@emotion/styled';

const NameInput = styled.input`
  margin-left: 1.5rem;
  padding: 1rem;
  border-radius: 0.2rem;
  border: 0.1rem solid var(--modal-inputs);
  font-family: 'Nunito', sans-serif;
  width: 80%;

  ::placeholder {
    color: var(--modal-placeholders);
  }
`;

const ItemName = ({text}) => {
  return (
    <NameInput placeholder={text}/>
  )
}

export default ItemName