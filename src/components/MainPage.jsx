import React from "react";
import { useNavigate } from "react-router-dom";
import styled from '@emotion/styled';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(
    89deg,
    rgba(51, 45, 92, 1) 0%,
    rgba(90, 80, 163, 1) 31%,
    rgba(251, 213, 189, 0.75) 69%,
    rgba(102, 90, 184, 1) 100%
  );
`;

const Title = styled.h1`
  color: #FEF9F5;
  font-family: "Poppins", Helvetica;
  font-size: 120px;
  font-weight: 800;
  text-align: center;
  margin: 0;
`;

const TheoryButton = styled.button`
  background-color: #7164CC;
  color: #FEF9F5;
  font-family: "Poppins", Helvetica;
  font-size: 20px;
  font-weight: 600;
  padding: 16px 40px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;

export const MainPage = () => {
    const navigate = useNavigate();

    return (
        <PageContainer>
            <Title>메인 페이지</Title>
            <TheoryButton onClick={() => navigate('/theory')}>
                Theory로 이동
            </TheoryButton>
        </PageContainer>
    );
};
