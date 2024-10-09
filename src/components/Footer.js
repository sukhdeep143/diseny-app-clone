import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterSection>
          <h3>Disney Plus Clone</h3>
          <p>&copy; 2024 Disney Plus Clone. All rights reserved.</p>
        </FooterSection>
        <FooterSection>
          <h4>Follow Us</h4>
          <FooterLinks>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </FooterLinks>
        </FooterSection>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background-color: #090b13;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterSection = styled.div`
  flex: 1;
  margin: 10px;

  h3, h4 {
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 10px;
  }
`;

const FooterLinks = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #1e90ff;
    }
  }
`;
