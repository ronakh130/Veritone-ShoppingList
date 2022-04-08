import React from 'react';
import styled from 'styled-components';

const HeaderBar = styled.div`
  top: 0;
  background-color: var(--header);
  color: white;
  padding: 1.2rem;
  font-weight: 500;
  font-size: 1.2rem;
  font-family: 'Dosis', sans-serif;
`;

const Header = () => {
  return <HeaderBar>SHOPPING LIST</HeaderBar>;
};

export default Header;
