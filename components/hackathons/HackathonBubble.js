import styled from 'styled-components';
import Image from 'next/image';
import { FaMoneyBillWave, FaHandshake } from 'react-icons/fa';
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
  ${props => props.paddingNeeded && `
    padding-top: ${props.paddingNeeded}px !important;
    padding-bottom: ${props.paddingNeeded}px !important;
  `}

  ${CONSTRAINTS.DEFAULT_BP} {
      object-fit: contain;
      padding:0;
      // background-color: green;
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

      ${props => props.long && `
        font-size: 90%;
      `}
  }
`

const StatBubble = styled.div`
  // flexy
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
  text-align: center;
`

// long defines a smaller text size for the bubbles if necessary for styles
function HackBubble({ data, selected, children, long }) {
  return (
    <Container gradientColor={data.gradientColor} selected={selected}>
      <TitleImage paddingNeeded={data.paddingNeeded} src={data.titleImage} height={400} objectFit="contain" alt={`${data.name} title image`} />
      {<WebsiteLink href={data.websiteLink ? data.websiteLink : data.devpostLink}>Visit {data.websiteLink ? "Website" : "Devpost"}</WebsiteLink>}
      <Stats long={long}>
        {data.numSponsors && (
          <StatBubble>
            <FaMoneyBillWave />
            <Number>{data.numSponsors}</Number>
            <SubText>Sponsors</SubText>
          </StatBubble>
        )}
        {data.numPartners && (
          <StatBubble long>
            <FaHandshake />
            <Number>{data.numPartners}</Number>
            <SubText>Partner Orgs</SubText>
          </StatBubble>
        )}
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

const EIGHT = (props) => (
  <HackBubble data={HACKATHON_DATA.EIGHT} {...props} />
)
const GAME_JAM = (props) => (
  <HackBubble data={HACKATHON_DATA.GAME_JAM} {...props} long>
    <Vlad>
      <Image src={vlad} width={300} alt="a cute cartoon bat"/>
    </Vlad>
  </HackBubble>
)
const SEVEN = (props) => (
  <HackBubble data={HACKATHON_DATA.SEVEN} {...props} />
)
const SIX = (props) => (
  <HackBubble data={HACKATHON_DATA.SIX} {...props} />
)
const NINETEEN = (props) => (
  <HackBubble data={HACKATHON_DATA.NINETEEN} {...props} />
)
const HACK_FOR_HUMANITY = (props) => (
  <HackBubble data={HACKATHON_DATA.HACK_FOR_HUMANITY} {...props} />
)
const EIGHTEEN = (props) => (
  <HackBubble data={HACKATHON_DATA.EIGHTEEN} {...props} />
)
const SEVENTEEN = (props) => (
  <HackBubble data={HACKATHON_DATA.SEVENTEEN} {...props} />
)
const SIXTEEN = (props) => (
  <HackBubble data={HACKATHON_DATA.SIXTEEN} {...props} />
)
const FIFTEEN = (props) => (
  <HackBubble data={HACKATHON_DATA.FIFTEEN} {...props} />
)


const ALL_HACKATHONS = [EIGHT, SEVEN, GAME_JAM, SIX, NINETEEN, HACK_FOR_HUMANITY, EIGHTEEN, SEVENTEEN, SIXTEEN, FIFTEEN];

export default ALL_HACKATHONS;
