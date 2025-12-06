import React from "react"
import styled from '@emotion/styled'
import { FaApple } from "react-icons/fa"
import { FaGoogle } from "react-icons/fa"

const LeftContainer = styled.div`
  width: 709px;
  height: 858px;
  position: relative;
  background: linear-gradient(112deg, #332D5C 14.41%, #665AB8 56.94%, #FBD5BD 99.48%);
  overflow: hidden;
`

const CircleTop = styled.div`
  position: absolute;
  width: 401.271px;
  height: 400.467px;
  border-radius: 400.467px;
  border: 7px solid #FBD5BD;
  background: transparent;
  opacity: 0.1;
  transform: rotate(32.998deg);
  top: -200px;
  right: 550px;
  z-index: 0;
`

const CircleBottom = styled.div`
  position: absolute;
  width: 490px;
  height: 506.316px;
  border-radius: 999px;
  border: 7px solid #FBD5BD;
  background: transparent;
  opacity: 0.3;
  bottom: -400px;
  left: 400px;
  z-index: 0;
`

const LeftContent = styled.div`
  position: absolute;
  left: 152px;
  top: 208px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 53px;
`

const TextSection = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 465px;
`

const TitleSection = styled.div`
  height: 210px;
  margin-right: -4px;
  position: relative;
  width: 469px;
`

const TitleText = styled.div`
  color: #ffffff;
  font-family: "Poppins", Helvetica;
  font-size: 60px;
  font-weight: 600;
  left: 0;
  letter-spacing: -2px;
  line-height: 66px;
  position: absolute;
  top: 0;
  width: 465px;
`

const SubtitleText = styled.p`
  color: #cbd5e1;
  font-family: "Poppins", Helvetica;
  font-size: 18px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  line-height: 30px;
  position: absolute;
  top: 140px;
  width: 373px;
`

const LoginSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  width: 373px;
`

const LoginContent = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 16px;
  position: relative;
  width: 100%;
`

const SocialButton = styled.button`
  align-self: stretch;
  background-color: #ffffff1a;
  border: 1px solid #ffffff;
  border-radius: 12px;
  height: 64px;
  overflow: hidden;
  position: relative;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffffff2a;
  }
`

const ButtonIcon = styled.div`
  left: 35px;
  position: absolute;
  top: 18px;
  font-size: 28px;
  color: #ffffff;
`

const GoogleIcon = styled(ButtonIcon)`
  font-size: 25px;
`

const ButtonText = styled.span`
  align-items: center;
  color: #ffffff;
  display: flex;
  font-family: "Poppins", Helvetica;
  font-size: 20px;
  font-weight: 500;
  height: 22px;
  justify-content: center;
  left: calc(50% - 76px);
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 21px;
  white-space: nowrap;
`

const AlternativeText = styled.div`
  align-items: center;
  color: #ffffff;
  display: flex;
  font-family: "Poppins", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 22px;
  justify-content: center;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: relative;
  text-align: center;
  text-decoration: underline;
  white-space: nowrap;
  cursor: pointer;
`

export function LoginLeft() {
  return (
    <LeftContainer>
      <CircleTop />
      <CircleBottom />

      <LeftContent>
        <TextSection>
          <TitleSection>
            <TitleText>Welcome to our community</TitleText>
            <SubtitleText>
              Access your workspace, collaborate, and create something great together.
            </SubtitleText>
          </TitleSection>
        </TextSection>

        <LoginSection>
          <LoginContent>
            <SocialButton>
              <ButtonIcon>
                <FaApple />
              </ButtonIcon>
              <ButtonText>Apple로 시작하기</ButtonText>
            </SocialButton>

            <SocialButton>
              <GoogleIcon>
                <FaGoogle />
              </GoogleIcon>
              <ButtonText>Google로 시작하기</ButtonText>
            </SocialButton>
          </LoginContent>

          <AlternativeText>다른 방법으로 로그인하기</AlternativeText>
        </LoginSection>
      </LeftContent>
    </LeftContainer>
  )
}