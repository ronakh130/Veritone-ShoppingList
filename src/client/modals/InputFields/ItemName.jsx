import React from 'react';
import styled from '@emotion/styled';

const NameInput = styled.input`
  margin-left: 1.5rem;
  padding: 1rem;
  border-radius: 0.2rem;
  font-family: 'Nunito', sans-serif;
  width: 80%;
  border: 0.1rem solid var(--modal-inputs);

  ::placeholder {
    color: var(--modal-placeholders);
  }
`;

const ItemName = ({ placeholder, text }) => {
  return placeholder ? <NameInput placeholder={placeholder} /> : <NameInput defaultValue={text} />;
};

export default ItemName;
