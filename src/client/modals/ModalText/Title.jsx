import React from 'react';
import styled from '@emotion/styled';

const TitleText = styled.p`
  font-family: 'Nunito', sans-serif;
  margin: 1.5rem 1.5rem 0.5rem 1.5rem;
`;

const Title = ({text}) => {
  return (
    <TitleText>{text}</TitleText>
  )
}

export default Title