import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const navigationItems = [
  { label: "Home", route: "/main", active: true },
  { label: "About Us" },
  { label: "Services" },
  { label: "Article" },
  { label: "SIMUL" },
];

const featuredArticles = [
  {
    type: "ARTICLE",
    title: "NASA's Traveler: Field Guide to Social Supermassive Black Holes",
    size: "large",
  },
  {
    type: "ARTICLE",
    title: "Is Our Universe Inside a Black Hole?",
    size: "large",
  },
  {
    type: "BLOG",
    title: "What's Inside a Black Hole? :\nr/space",
    size: "small",
  },
  {
    type: "ARTICLE",
    title: "Black Hole Field Guide: Episode 1 - Basic Black Holes",
    size: "small",
  },
];

const bottomArticles = [
  {
    type: "ARTICLE",
    title: "Oly One: Redefining DeFi with the Blackhole Burn Mechanism",
  },
  {
    type: "BLOG",
    title: "Oly One: Redefining DeFi with the Blackhole Burn Mechanism",
  },
  {
    type: "BLOG",
    title: "Oly One: Redefining DeFi with the Blackhole Burn Mechanism",
  },
  {
    type: "NEWS RELEASE",
    title: "Oly One: Redefining DeFi with the Blackhole Burn Mechanism",
  },
];

const articles = [
  {
    title: "Explore groundbreaking theories of gravity",
    date: "October 19, 2025",
    image: "/article4.png",
  },
  {
    title: "Learn how gravity shapes the universe",
    date: "Jun 07.2024",
    image: "/article4.png",
  },
  {
    title: "Understanding black holes and spacetime",
    date: "April 09.2021",
    image: "/article4.png",
  },
  {
    title: "Simulate gravitational effects in real time",
    date: "January 15.2019",
    image: "/article4.png",
  },
];

export const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <HeroSection>
        <HeroHeader>
          <Logo src="/union.svg" alt="Gravity logo" />

          <NavList>
            {navigationItems.map((item) => (
              <NavButton
                key={item.label}
                $active={item.active}
                onClick={item.route ? () => navigate(item.route) : undefined}
              >
                {item.label}
              </NavButton>
            ))}
          </NavList>

          <HeaderActions>
            <LangButton>
              <LangIcon src="/icon-feather-icon.svg" alt="language" />
              <LangText>EN</LangText>
            </LangButton>

            <LoginButton onClick={() => navigate("/login")}>LogIn</LoginButton>
          </HeaderActions>
        </HeroHeader>

        <HeroBody>
          <ScrollPrompt>
            <ScrollCircle>
              <ArrowDown viewBox="0 0 24 24">
                <path
                  d="M6 9l6 6 6-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </ArrowDown>
            </ScrollCircle>
            <ScrollText>Scroll down</ScrollText>
          </ScrollPrompt>

          <HeroContent>
            <HeroTitle>Meet the New Gravity Platform</HeroTitle>
            <HeroCopy>
              GRAVITY gives you the tools &amp; simulations you need to explore
              gravitational physics and unlock the mysteries of our universe.
            </HeroCopy>
            <PrimaryButton onClick={() => navigate("/theory")}>
              GET STARTED
            </PrimaryButton>
          </HeroContent>
        </HeroBody>
      </HeroSection>

      <FeaturedSection>
        <FeaturedContainer>
          <FeaturedTitle>Featured News</FeaturedTitle>

          <FeaturedGrid>
            {featuredArticles.map((article, index) => (
              <FeaturedCard
                key={`${article.title}-${index}`}
                $size={article.size}
              >
                <FeaturedBadge>{article.type}</FeaturedBadge>
                <FeaturedText>{article.title}</FeaturedText>
              </FeaturedCard>
            ))}
          </FeaturedGrid>

          <BottomGrid>
            {bottomArticles.map((article, index) => (
              <BottomCard key={`${article.type}-${index}`}>
                <BottomHeader>
                  <BottomCircle />
                  <BottomTitle>{article.title}</BottomTitle>
                </BottomHeader>
                <BottomType>{article.type}</BottomType>
              </BottomCard>
            ))}
          </BottomGrid>
        </FeaturedContainer>
      </FeaturedSection>

      <BlackHoleSection>
        <StarField />
        <BlackHoleContent>
          <BlackHoleTitle>
            Unraveling
            <br />
            the Mysteries of
            <br />
            Black Holes
          </BlackHoleTitle>

          <BlackHoleCopy>
            In recent decades, groundbreaking observations have revealed the
            extreme nature of black holes, from the first direct image captured
            by the Event Horizon Telescope to gravitational wave detections from
            merging black holes. As researchers continue to push the boundaries
            of physics, black holes remain at the center of our quest to
            understand spacetime and gravity.
          </BlackHoleCopy>

          <GhostButton onClick={() => navigate("/theory")}>
            Black Hole Physics
            <ArrowBadge className="arrow-badge">
              <ArrowBadgeInner>
                <img src="/path-2.svg" alt="" />
                <img src="/path-3-1.svg" alt="" />
              </ArrowBadgeInner>
            </ArrowBadge>
          </GhostButton>
        </BlackHoleContent>
      </BlackHoleSection>

      <ArticlesSection>
        <ArticlesContainer>
          <ArticlesHeader>
            <ArticlesTitle>
              Discover how to expand your understanding of Gravity
            </ArticlesTitle>

            <MoreButton onClick={() => navigate("/theory")}>
              더 많은 기사 보러가기
              <InlineArrow viewBox="0 0 16 16">
                <path
                  d="M4 6l4 4 4-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </InlineArrow>
            </MoreButton>
          </ArticlesHeader>

          <ArticlesGrid>
            {articles.map((article, index) => (
              <ArticleCard
                key={`${article.title}-${index}`}
                $image={article.image}
              >
                <ArticleOverlay />
                <ArticleContent>
                  <ArticleTitle>{article.title}</ArticleTitle>
                  <ArticleDate>{article.date}</ArticleDate>
                </ArticleContent>
                <ArticleArrow src="/arrow.svg" alt="Open article" />
              </ArticleCard>
            ))}
          </ArticlesGrid>
        </ArticlesContainer>
      </ArticlesSection>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #1a1a40;
  color: #f0eff3;
  font-family: "Inter", "Poppins", sans-serif;
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const HeroHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 22px 120px;
  background: #ffffff;
  box-shadow: inset 0px -1px 1px #0000001a;
  position: relative;
  z-index: 2;
`;

const Logo = styled.img`
  width: 30px;
  height: 52px;
`;

const NavList = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 29px;
  flex: 1;
  min-width: 0;
`;

const NavButton = styled.button`
  border: none;
  background: none;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  letter-spacing: 0.2px;
  font-weight: ${(props) => (props.$active ? 700 : 500)};
  color: ${(props) => (props.$active ? "#3563e9" : "#424242")};
  cursor: pointer;
  padding: 6px 2px;
  white-space: nowrap;
  transition: color 0.2s ease;

  &:hover {
    color: #3563e9;
  }
`;

const HeaderActions = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 20px;
`;

const LangButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px 8px;
`;

const LangIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const LangText = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.2px;
  color: #424242;
`;

const LoginButton = styled.button`
  border: none;
  background: #6c62d7;
  color: #ffffff;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.46px;
  padding: 10px 22px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #5a52c7;
  }
`;

const HeroBody = styled.div`
  position: relative;
  width: 100%;
  height: 931px;
  background: #251d56;
  overflow: hidden;
`;

const ScrollPrompt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
`;

const ScrollCircle = styled.div`
  width: 56px;
  height: 56px;
  background: rgba(62, 57, 184, 0.4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;

const ArrowDown = styled.svg`
  width: 24px;
  height: 24px;
`;

const ScrollText = styled.p`
  font-family: "Poppins", Helvetica, sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #e8e8ff;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 205px;
  left: 152px;
  display: flex;
  flex-direction: column;
  gap: 38px;
  max-width: 650px;
`;

const HeroTitle = styled.h1`
  font-family: "Inter", Helvetica, sans-serif;
  font-weight: 700;
  font-size: 80px;
  line-height: 86px;
  color: #f0eff3;
`;

const HeroCopy = styled.p`
  max-width: 530px;
  font-family: "Inter", Helvetica, sans-serif;
  font-size: 21px;
  line-height: 34px;
  color: #d0d3e2;
`;

const PrimaryButton = styled.button`
  width: fit-content;
  border: none;
  background: #3e39b8;
  color: #e8e8ff;
  font-family: "Poppins", Helvetica, sans-serif;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.2px;
  padding: 16px 30px;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #4e49c8;
  }
`;

const FeaturedSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #ffffff;
  padding: 134px 0;
`;

const FeaturedContainer = styled.div`
  width: 100%;
  max-width: 1464px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
`;

const FeaturedTitle = styled.h2`
  font-family: "Inter", Helvetica, sans-serif;
  font-weight: 700;
  font-size: 80px;
  line-height: 86px;
  color: #191919;
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: 1.85fr 0.95fr 0.95fr;
  grid-auto-rows: 239px;
  gap: 21px;
  margin-top: 74px;
`;

const FeaturedCard = styled.div`
  background: linear-gradient(180deg, rgba(196, 196, 196, 1) 0%, rgba(94, 94, 94, 1) 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 27px 30px;
  color: #ffffff;
  grid-row: ${(props) => (props.$size === "small" ? "span 1" : "span 2")};
  min-height: ${(props) => (props.$size === "small" ? "239px" : "501px")};
  border-radius: 0;
  overflow: hidden;
`;

const FeaturedBadge = styled.span`
  text-align: center;
  font-family: "Poppins", Helvetica, sans-serif;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 5px;
  display: block;
`;

const FeaturedText = styled.h3`
  font-family: "Poppins", Helvetica, sans-serif;
  font-weight: 600;
  font-size: 28px;
  letter-spacing: 2px;
  line-height: 32px;
  white-space: pre-line;
`;

const BottomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 26px;
  margin-top: 50px;
`;

const BottomCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: transparent;
  gap: 12px;
`;

const BottomHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 31px;
`;

const BottomCircle = styled.div`
  width: 100px;
  height: 100px;
  background: #d9d9d9;
  border-radius: 50%;
  flex-shrink: 0;
`;

const BottomTitle = styled.h4`
  font-family: "Poppins", Helvetica, sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #000000;
  line-height: 1.4;
`;

const BottomType = styled.span`
  text-align: center;
  font-family: "Poppins", Helvetica, sans-serif;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 5px;
  color: #000000;
`;

const BlackHoleSection = styled.section`
  position: relative;
  padding: 170px 73px;
  background: #1a1a3e;
  overflow: hidden;
`;

const StarField = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.2;
  background-image: radial-gradient(circle, #ffffff 1px, transparent 1px);
  background-size: 20px 20px;
`;

const BlackHoleContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 960px;
  display: flex;
  flex-direction: column;
`;

const BlackHoleTitle = styled.h1`
  font-family: "Inter", Helvetica, sans-serif;
  font-weight: 700;
  font-size: 120px;
  line-height: 125px;
  color: #f0eff3;
`;

const BlackHoleCopy = styled.p`
  margin-top: 95px;
  font-family: "Inter", Helvetica, sans-serif;
  font-weight: 400;
  font-size: 25px;
  line-height: 45px;
  color: #d0d3e2;
`;

const GhostButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 18px;
  margin-top: 27px;
  background: none;
  border: none;
  color: #ffffff;
  font-family: "Inter", Helvetica, sans-serif;
  font-weight: 700;
  font-size: 35px;
  line-height: 70px;
  cursor: pointer;
  padding: 0;

  &:hover .arrow-badge {
    background: #4e49c8;
  }
`;

const ArrowBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: #3e39b8;
  border-radius: 50%;
  transform: rotate(-145deg);
  transition: background 0.2s ease;
`;

const ArrowBadgeInner = styled.span`
  display: inline-flex;
  width: 60%;
  height: 60%;
  position: relative;
  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ArticlesSection = styled.section`
  width: 100%;
  background: #ffffff;
  padding: 127px 0;
`;

const ArticlesContainer = styled.div`
  max-width: 1299px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 38px;
`;

const ArticlesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const ArticlesTitle = styled.h2`
  font-family: "Poppins", Helvetica, sans-serif;
  font-weight: 700;
  font-size: 25px;
  line-height: 25px;
  color: #1e1e1e;
  max-width: 700px;
`;

const MoreButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  font-family: "Poppins", Helvetica, sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.2px;
  color: #424242;
  cursor: pointer;
  padding: 6px 0;
`;

const InlineArrow = styled.svg`
  width: 18px;
  height: 18px;
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
`;

const ArticleCard = styled.div`
  position: relative;
  height: 489px;
  border-radius: 12px;
  overflow: hidden;
  background: ${(props) => `url(${props.$image}) center/cover no-repeat`};
  cursor: pointer;
`;

const ArticleOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 60%);
`;

const ArticleContent = styled.div`
  position: absolute;
  bottom: 58px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
  width: 70%;
  text-align: center;
`;

const ArticleTitle = styled.h3`
  font-family: "Poppins", Helvetica, sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
`;

const ArticleDate = styled.p`
  font-family: "Poppins", Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  color: #ffffff;
`;

const ArticleArrow = styled.img`
  position: absolute;
  width: 26px;
  height: 26px;
  bottom: 58px;
  right: 49px;
`;
