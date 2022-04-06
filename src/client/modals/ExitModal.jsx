import React from 'react';
import styled from '@emotion/styled';

const Icon = styled.span`
  padding: 0rem 1.5rem;
  color: var(--control-icons);
  cursor: pointer;

  &:hover {
    color: black;
  }

  &:active {
    color: var(--button-secondary-active);
  }
`;

const ExitModal = () => {
  const handleClick = () => {
    console.log('exit');
  };

  return (
    <Icon className='material-icons-outlined' onClick={handleClick}>
      last_page
    </Icon>
  );
};

export default ExitModal;
