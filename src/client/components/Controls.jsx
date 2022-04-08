import React from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';

import { openDeleteModal, openEditModal, setItem } from '../redux/modalSlice';

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

const Controls = ({ ele }) => {
  const dispatch = useDispatch();

  const clickEdit = () => {
    dispatch(setItem(ele));
    dispatch(openEditModal());
  };

  const clickDelete = () => {
    dispatch(setItem(ele));
    dispatch(openDeleteModal());
  };

  return (
    <ControlIcons>
      <div className='material-icons-outlined' onClick={clickEdit}>
        edit
      </div>
      <div className='material-icons-outlined' onClick={clickDelete}>
        delete
      </div>
    </ControlIcons>
  );
};

export default Controls;
