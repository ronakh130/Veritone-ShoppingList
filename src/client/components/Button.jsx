import React from 'react';
import styled from '@emotion/styled';

const ButtonWrapper = styled.button`
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

const Button = ({ buttonText, clickFunc }) => {
  return <ButtonWrapper onClick={clickFunc}>{buttonText}</ButtonWrapper>;
};

export default Button;
