import { useEffect } from 'react'
import styled from '@emotion/styled'
import { LoginLeft } from "./LoginLeft"
import { LoginRight } from "./LoginRight"
import { getResizeEventListener } from "../services/responsiveFrame"

const LoginContainer = styled.div`
  display: flex;
  width: 1600px;
  height: 858px;
`;

const LoginPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background: black;
  overflow: hidden;
`;

export default function Login() {
  useEffect(() => {
    const FixRatio = getResizeEventListener(1600, 858);
    window.addEventListener('resize', FixRatio);
    FixRatio(); // 초기 실행

    return () => {
      window.removeEventListener('resize', FixRatio);
    };
  }, []);

  return (
    <LoginPageWrapper className="login-page-wrapper">
      <LoginContainer id="login-container">
        <LoginLeft />
        <LoginRight />
      </LoginContainer>
    </LoginPageWrapper>
  )
}
