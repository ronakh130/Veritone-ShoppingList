import React from 'react';
import styled from '@emotion/styled';

const Cancel = styled.button`
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: none;
  border-radius: 0.2rem;
  transition: 100ms;

  &:hover {
    cursor: pointer;
    background-color: var(--button-secondary-hover);
    transition: 100ms;
  }

  &:active {
    background-color: var(--button-secondary-active);
    transition: 100ms;
  }
`;

const CancelButton = () => {
  return (
    <Cancel>Cancel</Cancel>
  )
}

export default CancelButton