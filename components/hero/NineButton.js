import styled, { keyframes } from 'styled-components';

import CONSTRAINTS from 'constants/constraints';
import LINKS from 'constants/links';

const animateOnAppear = keyframes`
  0% {
    opacity: 0;
  } 50% {
    opacity: 0;
  } 100% {
    opacity: 1;
  }
`

const Button = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 130px;
  background: conic-gradient(from 180deg at 50% 50%, #251E4F 0deg, #17002B 144.37deg, #49134B 316.87deg, #251E4F 360deg);
  box-shadow: 0px 4px 20px 3px rgba(91, 0, 71, 0.6);
  border-radius: 35px;
  padding: 5px 40px;
  position: relative;

  animation: ${animateOnAppear} 2s;
  transition: box-shadow 0.4s, transform 0.4s;

  ${CONSTRAINTS.DEFAULT_BP} {
    height: 100px;
    border-radius: 28px;
    padding: 5px 25px;
  }

  transform: translateY(5vh);

  &:hover {
    box-shadow: 0px 4px 10px 2px rgba(91, 0, 71, 0.6);
    img:nth-child(2) {
      opacity: 0;
    }
    transform: translateY(calc(5vh + 2px));
  }
`

const Logo = styled.img`
  height: 100%;
  transform: translateY(-3px);
`

const animateCursor = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px);
  } 50% {
    opacity: 0;
  } 100% {
    opacity: 1;
  }
`

const Cursor = styled.img`
  position: absolute;
  height: 45%;
  bottom: -20px;
  right: -20px;
  transition: opacity 0.2s;

  animation: ${animateCursor} 2s;
`

export default function NineButton() {
  return (
    <Button href={LINKS.HACKUTD_IX_SITE}>
      <Logo src='/svg/hackutdix.svg' />
      <Cursor src='/svg/cursor.svg' />
    </Button>
  )
}