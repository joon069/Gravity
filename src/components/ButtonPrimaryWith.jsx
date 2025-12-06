import React from "react";
import styled from '@emotion/styled';

const StyledButton = styled.button`
  background-color: #7164cc;
  border-radius: 9px;
  height: 55px;
  width: 160px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #5f52b8;
  }
`;

const ButtonFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.div`
  color: #ffffff;
  font-family: "Poppins", Helvetica;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  line-height: 28px;
  text-align: center;
`;

export const ButtonPrimaryWith = ({ text, onClick, className, divClassName }) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      <ButtonFrame>
        <ButtonText className={divClassName}>{text}</ButtonText>
      </ButtonFrame>
    </StyledButton>
  );
};

