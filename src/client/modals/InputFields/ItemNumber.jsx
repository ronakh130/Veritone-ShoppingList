import React from 'react';
import styled from '@emotion/styled';

const Dropdown = styled.select`
  margin: 0rem 1.5rem;
  padding: 1rem;
  border-radius: 0.2rem;
  font-family: 'Nunito', sans-serif;
  width: 87.5%;
  border: 0.1rem solid var(--modal-inputs);
  color: var(--modal-placeholders);
`;

const options = [];
const numOptions = 5;
let count = 0;

while (count < numOptions) {
  options.push(<option>{++count}</option>);
}

const ItemNumber = ({ placeholder, text }) => {
  return placeholder ? (
    <Dropdown defaultValue={placeholder}>
      <option disabled hidden>
        {placeholder}
      </option>
      {options}
    </Dropdown>
  ) : (
    <Dropdown defaultValue={text}>{options}</Dropdown>
  );
};

export default ItemNumber;
