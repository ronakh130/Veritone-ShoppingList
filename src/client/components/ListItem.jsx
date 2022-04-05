import React from 'react';
import styled from '@emotion/styled';

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 6rem;
  margin: 1rem 0rem;
  border: 0.1rem solid var(--item-border);
  border-radius: 0.2rem;
  transition: 200ms;

  &:hover {
    border: 0.1rem solid var(--button-primary);
    transition: 200ms;
  }
`;

const CheckboxContainer = styled.div`
  flex: 0 0 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Checkbox = styled.input`
  height: 1.4rem;
  width: 1.4rem;
  cursor: pointer;
`;

const Textbox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-family: 'Nunito', sans-serif;
  }
`;

const ItemName = styled.p`
  font-size: 1.1rem;
  margin: 0;
`;

const ItemDesc = styled.p`
  font-size: 1rem;
  margin: 0.1rem 0rem;
  color: var(--item-desc);
`;

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

const ListItem = (props) => {
  const { name, desc, isChecked } = props.item;

  return (
    <ItemWrapper>
      <CheckboxContainer>
        <Checkbox type='checkbox' checked={isChecked} />
      </CheckboxContainer>
      <Textbox>
        <ItemName>{name}</ItemName>
        <ItemDesc>{desc}</ItemDesc>
      </Textbox>
      <ControlIcons>
        <div className='material-icons-outlined'>edit</div>
        <div className='material-icons-outlined'>delete</div>
      </ControlIcons>
    </ItemWrapper>
  );
};

export default ListItem;
