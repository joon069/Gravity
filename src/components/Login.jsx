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
    <LoginContainer id="login-container">
      <LoginLeft />
      <LoginRight />
    </LoginContainer>
  )
}