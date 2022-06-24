import styled from 'styled-components';
import Image from 'next/image';
import { FaMoneyBillWave } from 'react-icons/fa';
import { BsPeopleFill, BsTrophyFill } from 'react-icons/bs';

import HACKATHON_DATA from 'constants/hackathon_data';
import CONSTRAINTS from 'constants/constraints';

import vlad from 'assets/img/vlad.png';

const Container = styled.div`
  // flexy
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background: ${props => props.gradientColor};
  max-width: ${CONSTRAINTS.DEFAULT};
  width: 100%;
  border-radius: 60px;
  height: 350px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  z-index: 0;
  overflow: hidden;
  
  // transition: opacity 0.8s;
  // opacity: 0;
  // display: none;
  position: absolute;
  visibility: hidden;
  transition: opacity 0.6s linear, visibility 0.6s linear;
  opacity: 0;
  ${props =>  props.selected && `
    // opacity: 1;
    // display: flex;
    visibility: visible;
    opacity: 1;
  `}

  ${CONSTRAINTS.DEFAULT_BP} {
    border-radius: 0px;
  }
`

const TitleImage = styled(Image)`
  // height: 100px;
  // NEED TO WORK ON THIS
  padding-top: 20px !important;
  padding-bottom: 20px !important;

  ${CONSTRAINTS.DEFAULT_BP} {
       width: 95%;
      height: auto;
      max-height: 100px;
      object-fit: contain;
  }
`

const WebsiteLink = styled.a`
  text-decoration: underline;
  color: white;
  font-size: 24px;
  font-weight: 600;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);

  // hack
  display: block;
  margin-bottom: 20px;
`

// https://css-tricks.com/equal-width-columns-in-css-grid-are-kinda-weird/
const Stats = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  ${CONSTRAINTS.DEFAULT_BP} {
      grid-gap: 10px;
  }
`

const StatBubble = styled.div`
  // flexy
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #FFFFFF40;
  border-radius: 20px;
  color: white;
  padding: 10px;

  svg {
    width: 40px;
    height: 40px;
  }
`

const Number = styled.div`
  font-weight: 800;
  font-size: 30px;

  ${CONSTRAINTS.DEFAULT_BP} {
      font-size: 24px;
  }
`

const SubText = styled.div`

`

function HackBubble({ data, selected, children }) {
  return (
    <Container gradientColor={data.gradientColor} selected={selected}>
      <TitleImage src={data.titleImage} height={300} objectFit="contain" alt={`${data.name} title image`} />
      <WebsiteLink href={data.websiteLink}>Visit Website</WebsiteLink>
      <Stats>
        <StatBubble>
          <FaMoneyBillWave />
          <Number>{data.numSponsors}</Number>
          <SubText>Sponsors</SubText>
        </StatBubble>
        <StatBubble>
          <BsPeopleFill />
          <Number>{data.numParticipants}</Number>
          <SubText>Participants</SubText>
        </StatBubble>
        <StatBubble>
          <BsTrophyFill />
          <Number>{data.numSubmissions}</Number>
          <SubText>Submissions</SubText>
        </StatBubble>
      </Stats>
      {/* allows for special stuff to be positioned absolutely */}
      {children}
    </Container>
  )
}

const Vlad = styled.div`
  position: absolute;
  left: 0;
  z-index: -1;
  width: 200px;
  transform: translateX(-10px);
  top: 30%;
`

const GameJam = (props) => (
  <HackBubble data={HACKATHON_DATA.GAME_JAM} {...props} >
    <Vlad>
      <Image src={vlad} width={300} alt="a cute cartoon bat"/>
    </Vlad>
  </HackBubble>
)
const Eight = (props) => (
  <HackBubble data={HACKATHON_DATA.EIGHT} {...props} />
)
const Seven = (props) => (
  <HackBubble data={HACKATHON_DATA.SEVEN} {...props} />
)

const ALL_HACKATHONS = [Eight, Seven, GameJam];

export default ALL_HACKATHONS;
