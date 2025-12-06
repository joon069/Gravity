import React from "react";
import styled from '@emotion/styled';

const MainpageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 600px;
  width: 1600px;
  background: linear-gradient(
    89deg,
    rgba(51, 45, 92, 1) 0%,
    rgba(90, 80, 163, 1) 31%,
    rgba(251, 213, 189, 0.75) 69%,
    rgba(102, 90, 184, 1) 100%
  );
  padding: 80px 20px;
`;

const Title = styled.h1`
  color: #FEF9F5;
  font-family: "Poppins", Helvetica;
  font-size: 80px;
  font-weight: 800;
  text-align: center;
  margin: 0;
`;

const Subtitle = styled.p`
  color: #FEF9F5;
  font-family: "Poppins", Helvetica;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  margin-top: 20px;
  max-width: 800px;
`;

export const Mainpage = () => {
    return (
        <MainpageContainer>
            <Title>중력 이론</Title>
            <Subtitle>우주의 가장 근본적인 힘, 중력에 대해 알아봅시다</Subtitle>
        </MainpageContainer>
    );
};
