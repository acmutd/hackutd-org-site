import styled from 'styled-components';

import CONSTRAINTS from 'constants/constraints';
import COLORS from 'constants/colors';

import NavBar from 'components/Navbar';
import AnimatedLogo from 'components/AnimatedLogo';
import StartButton from 'components/StartButton';
import Sparkles from 'components/Sparkles';


const Container = styled.div`
  // flexy
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: ${CONSTRAINTS.DEFAULT};
  height: 100vh;
  min-height: 800px;
  color: white;
  box-sizing: border-box;
  position: relative;

  ${CONSTRAINTS.DEFAULT_BP} {
    height: 85vh;
    min-height: initial;
  }
`

/** Gradient background */
const Background = styled.div`
  background: ${COLORS.HERO_BACKGROUND.light};
  z-index: -1;

  width: 100vw;
  height: 100%;

  ${CONSTRAINTS.ABSOLUTE_POS_CENTER_HORIZONTAL}
`

/** Container for the logo + text in hero */
const WelcomeContent = styled.div`
  margin-top: 30px;
  text-align: center;
  z-index: 1; // for stars

  // defines size of logo, ik it's hacky
  // !imporant necessary to get around lottie restrictions, much apology
  div {
    height: 20vh !important;
    min-height: 150px !important;
  }
  ${CONSTRAINTS.DEFAULT_BP} {
    div {
      height: 150px !important;
    }
  }
`

/** 'HackUTD' title */
const Title = styled.h1`
  font-size: 13vh;
  font-size: max(13vh, 100px);
  margin: 5px;
  text-shadow: 0px 3px 11px rgba(0, 0, 0, 0.25);

  ${CONSTRAINTS.DEFAULT_BP} {
    font-size: 18vw;
  }
`

/** The text that goes on top and bottom of 'HackUTD' */
const SupplementalText = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin: 0;
  padding: 0;

  ${CONSTRAINTS.DEFAULT_BP} {
    font-size: 5vw;
  }
  ${props => props.top && `
    margin-top: 50px;
    ${CONSTRAINTS.DEFAULT_BP} {
      margin-top: 20px;
    }
  `}
`

const ExperimentalFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`

const SkylineContainer = styled.div`
  position: relative;
`

const Skyline = styled.img`
  width: 100vw;
  min-width: 1600px;
  max-height: 40vh;
`

/** 
 * Honestly this was kind of just experimentally coded, eventually settled on this as it seemed to solve 
 * the problem of hiding the bottom shadow of the skyline fairly well but another solution might be considered
 * more robust under future consideration; for example, the bottom shadow could be manually corrected and the bottom
 * flattened.
 */
const ShadowHider = styled.div`
  width: 100vw;
  height: 20%;
  background-color: white;
  ${CONSTRAINTS.ABSOLUTE_POS_CENTER_HORIZONTAL}
  bottom: 0;
`


export default function Hero() {
  return (
    <Container>
      <NavBar />
      <ExperimentalFlexContainer>
        <WelcomeContent>
          <AnimatedLogo />
          <SupplementalText top>We are</SupplementalText>
          <Title>HackUTD</Title>
          <SupplementalText>Texas' premier university hackathon.</SupplementalText>
        </WelcomeContent>
        <SkylineContainer>
          <Skyline src={"svg/skyline.svg"} />
          <ShadowHider />
        </SkylineContainer>
      </ExperimentalFlexContainer>
      <StartButton />
      <Sparkles />
      <Background />
    </Container>
  )
}