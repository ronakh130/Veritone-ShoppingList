import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import EmptyList from './EmptyList';
import FilledList from './FilledList';

const BodyContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = () => {
  const shoppingList = useSelector((state) => state.list.shoppingList);

  const Cart = shoppingList.length ? <FilledList shoppingList={shoppingList} /> : <EmptyList />;

  return <BodyContainer>{Cart}</BodyContainer>;
};

export default Body;
