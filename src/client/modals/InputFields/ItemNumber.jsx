import React from 'react';
import styled from '@emotion/styled';

const Dropdown = styled.select`
  margin: 0rem 1.5rem;
  padding: 1rem;
  border-radius: 0.2rem;
  font-family: 'Nunito', sans-serif;
  width: 87.5%;
  border: 0.1rem solid var(--modal-inputs);
`;

const ItemNumber = ({ text }) => {
  return (
    <Dropdown>
      <option selected disabled hidden>{text}</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </Dropdown>
  );
};

export default ItemNumber;
