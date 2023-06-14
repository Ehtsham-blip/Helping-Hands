import React from "react";
import styled from "styled-components";

const FeaturedContainer = styled.div`
  height: 600px;
  display: flex;
  justify-content: center;
  background-color: #013914;
  width:100%;
  color: white;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const IntroHeading = styled.h3`
  font-size: 45px;
  font-weight: bold;
  font-family: 'Ubuntu', sans-serif;
`;

const IntroSubheading = styled.h4`
  font-size: 20px;
  font-weight: lighter;
  color: gray;
  font-family: 'Ubuntu', sans-serif;
`;

const IntroDescription = styled.h5`
  font-size: 20px;
  font-weight: lighter;
  width: 550px;
`;

const CampaignButton = styled.button`
  width: 300px;
  margin-top: 20px;
  height: 50px;
  position: relative;
  left: 60px;
  background-color: white;
  color: #013914;
  border-radius: 10px;
  border: none;
  font-weight: bolder;
  font-family: 'Ubuntu', sans-serif;
`;

const TypesContainer = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TypesSpan = styled.span`
  font-family: 'Ubuntu', sans-serif;
  font-weight: 300;
`;

const TypesButton = styled.button`
  color: white;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  background-color: transparent;
  border: 1px solid white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
`;

const Right = styled.div`
  height: 100%;

  img {
    height: 90%;
    object-fit: contain;
  }
`;

const Featured = () => {
  return (
    <FeaturedContainer>
      <Container>
        <Left>
          <div>
            <IntroHeading>Helping Hands</IntroHeading>
            <IntroSubheading>Free Crowdfunding Platform For Pakistan</IntroSubheading>
            <IntroDescription>
              Raise funds online for medical emergencies, financial issues,
              education and social causes
            </IntroDescription>
            <CampaignButton>
              Start a Campaign - It is Free
            </CampaignButton>
          </div>
          <TypesContainer>
            <TypesSpan>Supported in:</TypesSpan>
            <TypesButton>Medical</TypesButton>
            <TypesButton>Financial</TypesButton>
            <TypesButton>Educational</TypesButton>
          </TypesContainer>
        </Left>
        <Right>
          <img src="/images/img1.png" alt="" />
        </Right>
      </Container>
    </FeaturedContainer>
  );
};

export default Featured;
