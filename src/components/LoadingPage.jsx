import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Navigation } from "./Navigation";

// 그라데이션 애니메이션
const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const PageContainer = styled.div`
  background: linear-gradient(
    89deg,
    rgba(51, 45, 92, 1) 0%,
    rgba(90, 80, 163, 1) 31%,
    rgba(251, 213, 189, 0.75) 69%,
    rgba(102, 90, 184, 1) 100%
  );
  background-size: 400% 400%;
  animation: ${gradientShift} 15s ease infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
  min-height: 100vh;
  width: 100vw;
  position: relative;
`;

const NavigationWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;

const Title = styled.h1`
  color: #f0eff3;
  font-family: "Poppins", Helvetica;
  font-size: 80px;
  font-weight: 800;
  text-align: center;
  line-height: 1.3;
  margin: 0;
  bottom: 400px;
`;





export const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("LoadingPage mounted");
    const timer = setTimeout(() => {
      console.log("Navigating to login...");
      navigate('/login');
    }, 8000);

    return () => {
      console.log("LoadingPage unmounted");
      clearTimeout(timer);
    };
  }, [navigate]);

  const handleLoginClick = () => {
    navigate('/login');
  }

  return (
    <PageContainer>
      <NavigationWrapper>
        <Navigation onLoginClick={handleLoginClick} />
      </NavigationWrapper>
      <Title>
        Meet the New
        <br />
        Gravity Platform
      </Title>

    </PageContainer>
  );
};