import React from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';

import { closeModal } from '../redux/modalSlice';

const Icon = styled.span`
  padding: 0rem 1.5rem;
  color: var(--control-icons);
  cursor: pointer;
  transition: 100ms;

  &:hover {
    color: black;
    transition: 100ms;
  }

  &:active {
    color: var(--button-secondary-active);
    transition: 100ms;
  }
`;

const ExitModal = ({ modal }) => {
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(closeModal(modal));
  };

  return (
    <Icon className='material-icons-outlined' onClick={handleClick}>
      last_page
    </Icon>
  );
};

export default ExitModal;
