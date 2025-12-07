import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from '@emotion/styled';
import unionLogo from '../assets/logo.svg';
import featherIcon from '../assets/feather icon white.svg';

const NavigationContainer = styled.div`
  align-items: flex-start;
  display: inline-flex;
  position: relative;
  width: 100%;
`;

const NavigationWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  padding: 22px 0;
  position: relative;
  width: 100%;
`;

const Nav = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;
  position: relative;
`;

const Logo = styled.img`
  height: 52px;
  position: relative;
  width: 30px;
  justify-self: start;
`;

const MenuFrame = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: auto;
  justify-self: center;
`;

const MenuItems = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 29px;
  position: relative;
  width: 100%;
`;

const MenuItem = styled.div`
  height: 18px;
  position: relative;
  width: ${props => props.width || '58px'};
`;

const MenuText = styled.div`
  align-items: center;
  color: ${props => props.active ? '#7164CC' : '#FEF9F5'};
  display: flex;
  font-family: "Inter", "Poppins", Helvetica;
  font-size: 14px;
  font-weight: ${props => props.active ? 700 : 500};
  height: 94.44%;
  justify-content: center;
  left: 0;
  letter-spacing: 0.20px;
  line-height: normal;
  position: absolute;
  top: ${props => props.topOffset || '5.56%'};
  width: ${props => props.widthPercent || '103.70%'};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #7164CC;
  }
`;

const ButtonGroup = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 20px;
  position: relative;
  justify-self: end;
`;

const Language = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 7px;
  position: relative;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  height: 24px;
  position: relative;
  width: 24px;
`;

const LanguageText = styled.div`
  align-items: center;
  color: #FEF9F5;
  display: flex;
  font-family: "Inter", "Poppins", Helvetica;
  font-size: 16px;
  font-weight: 700;
  justify-content: center;
  letter-spacing: 0.20px;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const LoginButtonWrapper = styled.div`
  align-items: flex-start;
  box-sizing: border-box;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 20px;
  position: relative;
`;

const LoginButton = styled.button`
  align-items: center;
  background-color: #000;
  border-radius: 5px;
  border: none;
  box-sizing: border-box;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  padding: 8px 22px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

const LoginButtonText = styled.div`
  color: #FEF9F5;
  font-family: "Inter", "Poppins", Helvetica;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.46px;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
`;

export const Navigation = ({
  property1,
  className,
  divClassName,
  divClassNameOverride,
  homeClassName,
  divClassName1,
  divClassName2,
  enClassName,
  buttonClassName,
  buttonClassNameOverride,
  onLoginClick,
}) => {
  const navigate = useNavigate();

  return (
    <NavigationContainer className={className}>
      <NavigationWrapper>
        <Nav>
          <Logo alt="Gravity Logo" src={unionLogo} />

          <MenuFrame>
            <MenuItems>
              <MenuItem>
                <MenuText active className={divClassName} onClick={() => navigate('/main')}>
                  Home
                </MenuText>
              </MenuItem>

              <MenuItem width="63px">
                <MenuText topOffset="2.78%" widthPercent="113.79%" className={divClassNameOverride}>
                  About Us
                </MenuText>
              </MenuItem>

              <MenuItem>
                <MenuText className={homeClassName}>
                  Services
                </MenuText>
              </MenuItem>

              <MenuItem>
                <MenuText className={divClassName1}>
                  Article
                </MenuText>
              </MenuItem>

              <MenuItem>
                <MenuText
                  widthPercent="77.59%"
                  className={divClassName2}
                  onClick={() => navigate('/simulation')}
                >
                  SIMUL
                </MenuText>
              </MenuItem>
            </MenuItems>
          </MenuFrame>

          <ButtonGroup>
            <Language>
              <IconWrapper>
                <img src={featherIcon} alt="Language" style={{ width: '100%', height: '100%' }} />
              </IconWrapper>
              <LanguageText className={enClassName}>EN</LanguageText>
            </Language>

            <LoginButtonWrapper>
              <LoginButton className={buttonClassName} onClick={onLoginClick}>
                <LoginButtonText className={buttonClassNameOverride}>
                  LogIn
                </LoginButtonText>
              </LoginButton>
            </LoginButtonWrapper>
          </ButtonGroup>
        </Nav>
      </NavigationWrapper>
    </NavigationContainer>
  );
};

Navigation.propTypes = {
  property1: PropTypes.oneOf(["default"]),
  union: PropTypes.string,
  vector: PropTypes.string,
  img: PropTypes.string,
  vector1: PropTypes.string,
};
