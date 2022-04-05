import React from 'react';
import styled from '@emotion/styled';

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

const Checkbox = ({isChecked}) => {
  return (
    <CheckboxContainer>
      <CheckboxInput type='checkbox' checked={isChecked} />
    </CheckboxContainer>
  );
}

export default Checkbox