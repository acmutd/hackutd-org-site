import styled from 'styled-components';
import { FaInstagram, FaTwitter, FaLinkedin, FaTiktok } from 'react-icons/fa';

import InlineGradient from 'components/shared/InlineGradient';

import LINKS from 'constants/links';
import CONSTRAINTS from 'constants/constraints';

const Container = styled.div`
  // griddy
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;

  margin-top: 20px;

  ${CONSTRAINTS.DEFAULT_BP} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`
const SocialButtonContainer = styled.a`
  // flexy  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 80px;
  text-decoration: none;
  padding: 25px 10px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.25);
  border-radius: 25px;

  background-color: var(--raised-button);

  // fun animation
  transition: transform 0.5s, box-shadow 0.5s;
  transform-origin: bottom;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.125);
  }
`
const SocialText = styled.div`
  font-size: 20px;
  margin-top: 8px;
`

// https://github.com/react-icons/react-icons/issues/251
const SocialButton = ({ Image, link, at, altText }) => (
  <SocialButtonContainer href={link}>
        <Image style={{fill: "url(#blue-gradient)"}} alt={altText} />
        <SocialText><InlineGradient>{at}</InlineGradient></SocialText>

        {/* This allows us to make gradient dynamic */}
        <svg width="0" height="0">
          <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="#FFB525" offset="0%" />
            <stop stopColor="#FF56D6" offset="100%" />
          </linearGradient>
        </svg>
        
  </SocialButtonContainer>
)

function SocialButtons() {
  return (
    <Container>
      <SocialButton Image={FaInstagram} at="@hackutd" link={LINKS.INSTA} altText="Instagram Logo"/>
      <SocialButton Image={FaTwitter} at="@hackutd" link={LINKS.TWITTER} altText="Twitter Logo"/>
      <SocialButton Image={FaLinkedin} at="@hackutd" link={LINKS.LINKEDIN} altText="LinkedIn Logo"/>
      <SocialButton Image={FaTiktok} at="@hackutd" link={LINKS.抖音} altText="Tiktok Logo"/>
    </Container>
  )
}

export default SocialButtons;