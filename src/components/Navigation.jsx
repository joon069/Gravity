import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from '@emotion/styled';
import unionLogo from '../public/logo.svg';
import featherIcon from '../public/feather icon white.svg';

const NAV_VARIANTS = {
  dark: {
    textColor: '#FEF9F5',
    accentColor: '#7164CC',
    languageColor: '#FEF9F5',
    loginBg: '#000',
    loginHoverBg: '#333',
  },
  light: {
    textColor: '#424242',
    accentColor: '#7164CC',
    languageColor: '#424242',
    loginBg: '#6c62d7',
    loginHoverBg: '#5a52c7',
  },
};

const NavigationContainer = styled.div`
  align-items: flex-start;
  display: block;
  position: ${props => (props.$isSticky ? 'sticky' : 'relative')};
  top: ${props => (props.$isSticky ? '0' : 'auto')};
  z-index: ${props => (props.$isSticky ? 100 : 'auto')};
  width: 100%;
`;

const NavigationWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  padding: 22px 0;
  background: ${props => props.$backgroundColor || '#fff'};
  position: relative;
  z-index: 1;
  width: 100%;
`;

const Nav = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  width: 100%;
  padding: 0 ${props => props.$horizontalPadding || 40}px;
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
  color: ${props => props.$active ? props.$accentColor : props.$textColor};
  display: flex;
  font-family: "Inter", "Poppins", Helvetica;
  font-size: 14px;
  font-weight: ${props => props.$active ? 700 : 500};
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
    color: ${props => props.$accentColor};
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
  color: ${props => props.$textColor || '#FEF9F5'};
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
  background-color: ${props => props.$bgColor || '#000'};
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
    background-color: ${props => props.$hoverBg || '#333'};
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
  activeItem = "home",
  variant = "light",
  horizontalPadding = 40,
  backgroundColor = "#fff",
  isSticky = true,
}) => {
  const navigate = useNavigate();
  const palette = NAV_VARIANTS[variant] || NAV_VARIANTS.dark;

  const isActive = (item) => activeItem === item;
  const handleLogin = () => {
    if (onLoginClick) {
      onLoginClick();
      return;
    }
    navigate('/login');
  };

  return (
    <NavigationContainer className={className} $isSticky={isSticky}>
      <NavigationWrapper $backgroundColor={backgroundColor}>
        <Nav $horizontalPadding={horizontalPadding}>
          <Logo alt="Gravity Logo" src={unionLogo} />

          <MenuFrame>
            <MenuItems>
              <MenuItem>
                <MenuText
                  $active={isActive('home')}
                  $textColor={palette.textColor}
                  $accentColor={palette.accentColor}
                  className={divClassName}
                  onClick={() => navigate('/main')}
                >
                  Home
                </MenuText>
              </MenuItem>

              <MenuItem width="63px">
                <MenuText
                  $active={isActive('about')}
                  $textColor={palette.textColor}
                  $accentColor={palette.accentColor}
                  topOffset="2.78%"
                  widthPercent="113.79%"
                  className={divClassNameOverride}
                >
                  About Us
                </MenuText>
              </MenuItem>

              <MenuItem>
                <MenuText
                  $active={isActive('services')}
                  $textColor={palette.textColor}
                  $accentColor={palette.accentColor}
                  className={homeClassName}
                >
                  Services
                </MenuText>
              </MenuItem>

              <MenuItem>
                <MenuText
                  $active={isActive('article')}
                  $textColor={palette.textColor}
                  $accentColor={palette.accentColor}
                  className={divClassName1}
                >
                  Article
                </MenuText>
              </MenuItem>

              <MenuItem>
                <MenuText
                  $active={isActive('simul')}
                  $textColor={palette.textColor}
                  $accentColor={palette.accentColor}
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
              <LanguageText
                $textColor={palette.languageColor}
                className={enClassName}
              >
                EN
              </LanguageText>
            </Language>

            <LoginButtonWrapper>
              <LoginButton
                $bgColor={palette.loginBg}
                $hoverBg={palette.loginHoverBg}
                className={buttonClassName}
                onClick={handleLogin}
              >
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
  onLoginClick: PropTypes.func,
  className: PropTypes.string,
  activeItem: PropTypes.oneOf(["home", "about", "services", "article", "simul"]),
  variant: PropTypes.oneOf(["dark", "light"]),
  horizontalPadding: PropTypes.number,
  backgroundColor: PropTypes.string,
  isSticky: PropTypes.bool,
};
