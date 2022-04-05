import React from 'react';
import styled from '@emotion/styled';

const ControlIcons = styled.div`
  flex: 0 1 15%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  div {
    color: var(--control-icons);
  }

  div:hover {
    cursor: pointer;
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