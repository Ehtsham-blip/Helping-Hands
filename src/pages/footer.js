import React from "react";
import styled from "styled-components";
const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  color: #999;
  /* background-color: #013914; */
  margin: 100px 0px;

  img {
    width: 24px;
    height: 24px;
  }
`;

const Container = styled.div`
  width: 1400px;
  margin-top: 20px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Item1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    font-size: 16px;
    color: #555;
  }

  span {
    font-weight: 300;
  }

  .medical,
  .education,
  .financial {
    display: flex;
    gap: 15px;
  }
`;

const Item2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    font-size: 16px;
    color: #555;
  }

  span {
    font-weight: 300;
  }
`;

const Item3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .office {
    h2 {
      font-size: 16px;
      color: #555;
    }

    span {
      font-weight: 300;
    }
  }

  .support {
    h2 {
      font-size: 16px;
      color: #555;
    }

    span {
      font-weight: 300;
    }
  }
`;

const Item4 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 10px;

  button {
    width: 150px;
    height: 30px;
    border: 2px solid #013914;
    background-color: #013914;
    color: #fafafa;
    border-radius: 8px;
    font-weight: lighter;
  }

  h2 {
    font-size: 16px;
    color: #555;
  }

  span {
    font-weight: 300;
  }

  .external-links {
    display: flex;
    flex-direction: column;
  }

  .links img {
    height: 30px;
    width: 30px;
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: center;
  gap: 10px;

  span {
    font-size: 13px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Top>
          <Item1>
            <h2>Donate Towards</h2>
            <div className="medical">
              {/* <img src="./images/g-sethoscope.png" alt="" /> */}
              <span>Medical</span>
            </div>
            <div className="financial">
              {/* <img src="./images/g-financial.png" alt="" /> */}
              <span>Finance</span>
            </div>
            <div className="education">
              {/* <img src="./images/g-education.png" alt="" /> */}
              <span>Education</span>
            </div>
          </Item1>
          <hr />
          <Item2>
            <h2>Helping Hands</h2>
            
            <span>About Us</span>
            
            <span>Contact Us</span>
            <span>Donate Money</span>
            <span>Thank You</span>
          </Item2>
          <hr />
          <Item3>
            <div className="office">
              <h2>Office Address</h2>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
            {/* <div className="support">
              <h2>Supported By </h2>
              <img src="./images/metamask.png" alt="" />
              <img src="./images/ethereum.png" alt="" />
              <img src="./images/bitcoin.png" alt="" />
            </div> */}
          </Item3>
          <hr />
          <Item4>
            <button>Start a Campaign</button>
            <span>Reviews</span>
            <span>FAQs</span>
            <div className="external-links">
              
            </div>
          </Item4>
        </Top>
        <hr />
        <Bottom>
          <h2>Helping Hands</h2>
          <span>&copy; 2023 Helping Hands. All rights reserved.</span>
        </Bottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
