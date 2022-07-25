import styled from 'styled-components';
import { FaEnvelope } from 'react-icons/fa';

import LINKS from 'constants/links';

const Button = styled.a`
  border: none;
  color: white;
  // todo: make dynamic 
  background: var(--get-in-touch-gradient);

  display: flex;
  flex-direction: row;
  align-items: center;
  filter: drop-shadow(0px 6px 5px rgba(0, 0, 0, 0.25));
  padding: 20px 30px;
  border-radius: 20px;

  transition: filter 0.4s, transform 0.4s;

  svg {
    width: 50px;
    height: 50px;
  }

  &:hover {
    cursor: pointer;
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25));
    transform: translateY(5px);
  }

  align-self: center;
  margin-top: 28px;
  margin-bottom: 8px;
  text-decoration: none;

`
const Text = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-left: 15px;
`

function SponsorshipPacketButton() {
  return (
    <Button href={LINKS.INDUSTRY_MAIL_LINK}>
      <FaEnvelope />
      <Text>Get in Touch</Text>
    </Button>
  )
}

export default SponsorshipPacketButton;