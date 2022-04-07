import React from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { crossItem } from '../redux/listSlice';

const CheckboxContainer = styled.div`
  flex: 0 0 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckboxInput = styled.input`
  height: 1.4rem;
  width: 1.4rem;
  cursor: pointer;
`;

const Checkbox = ({ isChecked, ind }) => {
  const dispatch = useDispatch();

  const handleCheckClick = () => {
    dispatch(crossItem(ind));
  };

  return (
    <CheckboxContainer>
      <CheckboxInput type='checkbox' defaultChecked={isChecked} onClick={handleCheckClick} />
    </CheckboxContainer>
  );
};

export default Checkbox;
