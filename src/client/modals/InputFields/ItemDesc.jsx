import React from 'react';
import styled from '@emotion/styled';

const InputDesc = styled.textarea`
  margin: 1rem 1.5rem;
  padding: 1rem;
  border-radius: 0.2rem;
  font-family: 'Nunito', sans-serif;
  width: 80%;
  height: 20%;
  border: 0.1rem solid var(--modal-inputs);
  resize: none;

  ::placeholder {
    color: var(--modal-placeholders);
  }
`;

const ItemDesc = ({ placeholder, text }) => {
  return(
    placeholder 
    ? <InputDesc placeholder={placeholder} />
    : <InputDesc text={text} />
  ) 
};

export default ItemDesc;
