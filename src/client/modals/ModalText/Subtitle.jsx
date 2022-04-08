import React from 'react';  
import styled from '@emotion/styled';

const SubtitleText = styled.p`
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  margin: 0.5rem 1.5rem 1rem 1.5rem;
  color: var(--modal-subtitle);
`;

const Subtitle = ({text}) => {
  return (
    <SubtitleText>{text}</SubtitleText>
  )
}

export default Subtitle;