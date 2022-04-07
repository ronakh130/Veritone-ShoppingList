import React from 'react';
import styled from '@emotion/styled';

const ControlIcons = styled.div`
  flex: 0 1 15%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  div {
    cursor: pointer;
    color: var(--control-icons);
    transition: 100ms;
  }

  div:hover {
    color: black;
    transition: 100ms;
  }

  div:active {
    color: var(--button-secondary-active);
    transition: 100ms;
  }
`;

const Controls = () => {
  return (
    <ControlIcons>
      <div className='material-icons-outlined'>edit</div>
      <div className='material-icons-outlined'>delete</div>
    </ControlIcons>
  );
}

export default Controls