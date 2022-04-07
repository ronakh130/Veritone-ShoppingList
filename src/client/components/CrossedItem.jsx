import React from 'react';
import styled from '@emotion/styled';

import Checkbox from './Checkbox';
import Controls from './Controls';

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 6rem;
  margin: 1rem 0rem;
  border: 0.1rem solid transparent;
  background-color: rgba(213, 223, 233, 0.17);
  border-radius: 0.2rem;
  transition: 200ms;

  &:hover {
    border: 0.1rem solid var(--button-primary);
    transition: 200ms;
  }
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
  text-decoration: line-through;
  color: var(--checkbox-filled);
`;

const ItemDesc = styled.p`
  font-size: 1rem;
  margin: 0.1rem 0rem;
  text-decoration: line-through;
  color: var(--item-desc);
`;

const CrossedItem = (props) => {
  const { name, desc, isChecked } = props.item;
  const ind = props.ind;

  return (
    <ItemWrapper>
      <Checkbox isChecked={isChecked} ind={ind} />
      <Textbox>
        <ItemName>{name}</ItemName>
        <ItemDesc>{desc}</ItemDesc>
      </Textbox>
      <Controls />
    </ItemWrapper>
  );
};

export default CrossedItem;
