import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid #e8e8ff;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(232, 232, 255, 0.1);
  }

  &::after {
    content: '↓';
    color: #e8e8ff;
    font-size: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Button = ({ className }) => {
  return <StyledButton className={className} />;
};