import React from "react";
import styled from "styled-components";
const OfferContainer = styled.div`
  background-color: #013914;
  height: 80px;
  display: flex;
  width: 600px;
  justify-content: center;
  margin: auto;
  margin-top: 15px;
  border-radius: 5px;
`;

const Container = styled.div`
  width: 800px;
  display: flex;
  align-items: center;
  gap: 50px;
  color: lightgray;
  font-weight: 500;

  img {
    float: left;
    margin-left: 40px;
  }
`;

const Offer = () => {
  return (
    <OfferContainer>
      <Container>
        <img src="./images/speaker2.png" alt="" />
        <span>Our Crowdfunding Platform Charges No Fees  0%</span>
      </Container>
    </OfferContainer>
  );
};

export default Offer;
