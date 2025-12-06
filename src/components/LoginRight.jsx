import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from '@emotion/styled';
import { ButtonPrimaryWith } from "./ButtonPrimaryWith";

const RightContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  padding: 120px 10px 80px 145px;
  width: 891px;
  height: 858px;
  background-color: #ffffff;
  box-sizing: border-box;
`;

const RightContent = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 57px;
  width: 526px;
`;

const LoginTitle = styled.div`
  width: 465px;
`;

const TitleText = styled.div`
  color: #080814;
  font-family: "Poppins", Helvetica;
  font-size: 52px;
  font-weight: 600;
  letter-spacing: -2px;
  line-height: 62px;
  margin-bottom: 15px;
  white-space: nowrap;
`;

const SubtitleText = styled.p`
  color: #52525b;
  font-family: "Poppins", Helvetica;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 30px;
  width: 461px;
`;

const LoginInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 526px;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

const InputLabel = styled.div`
  color: #080814;
  font-family: "Poppins", Helvetica;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
`;

const InputBox = styled.input`
  background-color: #f8fafc;
  border: 1px solid ${props => props.hasError ? '#ef4444' : '#cbd5e1'};
  border-radius: 12px;
  height: 60px;
  width: 526px;
  padding: 0 20px;
  font-family: "Poppins", Helvetica;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${props => props.hasError ? '#ef4444' : '#2563eb'};
    background-color: #ffffff;
  }
`;

const InputOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

const RememberMe = styled.div`
  display: flex;
  gap: 9px;
  align-items: center;
`;

const Checkbox = styled.input`
  border: 1px solid #94a3b8;
  border-radius: 5px;
  height: 19px;
  width: 19px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  color: #18181b;
  font-family: "Poppins", Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 22px;
  cursor: pointer;
`;

const ForgotPassword = styled.div`
  color: #7164cc;
  font-family: "Poppins", Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 22px;
  cursor: pointer;
`;

const SignupText = styled.p`
  align-items: center;
  color: transparent;
  display: flex;
  font-family: "Poppins", Helvetica;
  font-size: 14px;
  font-weight: 400;
  justify-content: center;
  letter-spacing: 0;
  line-height: 14px;
`;

const SignupQuestion = styled.span`
  color: #64748b;
  line-height: 22px;
`;

const SignupLink = styled.span`
  color: #7164cc;
  font-size: 13px;
  font-weight: 500;
  line-height: 21px;
  cursor: pointer;
`;

const FieldErrorMessage = styled.div`
  color: #ef4444;
  font-family: "Poppins", Helvetica;
  font-size: 13px;
  font-weight: 400;
  margin-top: 6px;
  line-height: 18px;
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-family: "Poppins", Helvetica;
  font-size: 14px;
  font-weight: 400;
  margin-top: 8px;
  line-height: 20px;
`;

export const LoginRight = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = () => {
    setEmailError(""); // 에러 메시지 초기화
    setPasswordError("");

    if (email === "") {
      setEmailError("이메일을 입력하세요");
      return;
    }
    if (!email.includes("@")) {
      setEmailError("올바른 이메일 형식이 아닙니다");
      return;
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력하세요");
      return;
    }
    if (password.length < 6) {
      setPasswordError("비밀번호는 6자 이상이어야 합니다");
      return;
    }
    // 로그인 성공 시 메인 페이지로 이동
    navigate('/main');
  };

  return (
    <RightContainer>
      <RightContent>
        <LoginTitle>
          <TitleText>Welcome back!</TitleText>
          <SubtitleText>
            Access your workspace, collaborate, and create something great together.
          </SubtitleText>
        </LoginTitle>

        <LoginInputs>
          <InputField>
            <InputLabel>이메일</InputLabel>
            <InputBox
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              hasError={!!emailError}
            />
            {emailError && <FieldErrorMessage>{emailError}</FieldErrorMessage>}
          </InputField>

          <InputField>
            <InputLabel>비밀번호</InputLabel>
            <InputBox
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              hasError={!!passwordError}
            />
            {passwordError && <FieldErrorMessage>{passwordError}</FieldErrorMessage>}
          </InputField>

          <InputOptions>
            <RememberMe>
              <Checkbox
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <CheckboxLabel>비밀번호 기억하기</CheckboxLabel>
            </RememberMe>
            <ForgotPassword>비밀번호 찾기</ForgotPassword>
          </InputOptions>
        </LoginInputs>

        <ButtonPrimaryWith
          text="로그인"
          onClick={handleSubmit}
        />
      </RightContent>

      <SignupText>
        <SignupQuestion>Gravity 가입이 처음이신가요? </SignupQuestion>
        <SignupLink>계정 만들기</SignupLink>
      </SignupText>
    </RightContainer>
  );
};
