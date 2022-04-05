import React from 'react';
import styled from '@emotion/styled';

const ItemWrapper = styled.div`
  width: 100%;
  height: 5rem;
  margin: 1rem 0rem;
  border: 0.1rem solid var(--item-border);
  border-radius: 0.2rem;
`;

const ListItem = (props) => {
  const { name, desc, isChecked } = props.item;

  return (
    <ItemWrapper>
      {name}
    </ItemWrapper>
  )
}

export default ListItem