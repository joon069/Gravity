import React from "react";
import styled from '@emotion/styled';

const NewsSection = styled.div`
  background-color: #1a1a40;
  padding: 80px 52px;
  width: 1600px;
`;

const NewsTitle = styled.h2`
  color: #FEF9F5;
  font-family: "Poppins", Helvetica;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const NewsCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 30px;
  transition: transform 0.3s ease, background-color 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const NewsCardTitle = styled.h3`
  color: #FEF9F5;
  font-family: "Poppins", Helvetica;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const NewsCardText = styled.p`
  color: #E0E0E0;
  font-family: "Inter", Helvetica;
  font-size: 16px;
  line-height: 1.6;
`;

export const FeaturedNews = () => {
  return (
    <NewsSection>
      <NewsTitle>주요 뉴스</NewsTitle>
      <NewsGrid>
        <NewsCard>
          <NewsCardTitle>블랙홀 이미지 최초 촬영</NewsCardTitle>
          <NewsCardText>
            Event Horizon Telescope 팀이 M87 은하 중심의 초대질량 블랙홀 이미지를
            최초로 촬영하는 데 성공했습니다.
          </NewsCardText>
        </NewsCard>
        <NewsCard>
          <NewsCardTitle>중력파 검출</NewsCardTitle>
          <NewsCardText>
            LIGO와 Virgo 관측소가 블랙홀 충돌로 인한 중력파를 검출하여
            아인슈타인의 예측을 확인했습니다.
          </NewsCardText>
        </NewsCard>
        <NewsCard>
          <NewsCardTitle>호킹 복사</NewsCardTitle>
          <NewsCardText>
            스티븐 호킹이 제안한 블랙홀의 양자 효과로 인한 복사 현상에 대한
            연구가 계속되고 있습니다.
          </NewsCardText>
        </NewsCard>
      </NewsGrid>
    </NewsSection>
  );
};
