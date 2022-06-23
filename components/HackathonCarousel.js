import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa';

import CONSTRAINTS from 'constants/constraints';
import HACKATHON_DATA from 'constants/hackathon_data';

const TopWrapper = styled.div`
  margin-top: 40px;
  position: relative;

  width: 100%;
  max-width: ${CONSTRAINTS.DEFAULT};
  height: 350px;
`

const Button = styled.div`
  border: none;
  background-color: rgba(217, 217, 217, 0.75);
  // size management
  width: 50px;
  height: 50px;
  border-radius: 25px;
  color: #8C8C8C;
  font-size: 30px;

  transition: background-color 0.5s;
  &:hover {
    cursor: pointer;
    background-color: rgba(217, 217, 217, 1.0);
  }
  // flexy
  display: flex;
  align-items: center;
  justify-content: center;

  // positioning
  position: absolute;
  top: 50%;
  z-index: 1;
  ${props => props.left ? `
    left: -25px;
    transform: translateY(-50%) scaleX(-1);
    ${CONSTRAINTS.DEFAULT_BP} {
      left: 5px;
    }
  ` : `
    right: -25px;
    transform: translateY(-50%);
    ${CONSTRAINTS.DEFAULT_BP} {
      right: 5px;
    }
  `}

`

const HackathonDate = styled.div`
  color: #515151;
  font-size: 22px;
  font-weight: 700;
  margin-top: 16px;
`

const ChooserContainer = styled.div`
  background: #D9D9D9;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
  padding: 6px 10px;
  border-radius: 20px;

  margin-top: 10px;
`

const ChooserButton = styled.div`
  border: none;
  background: #BEBEBE;
  // sizing
  height: 20px;
  width: 20px;
  border-radius: 20px;
  ${props => props.selected && `
    background: ${props.gradientColor};
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  `}
  &:hover {
    cursor: pointer;
  }
`

import HACK_BUBBLES from 'components/HackathonBubble';

const HACKATHONS_IN_ORDER = [HACKATHON_DATA.EIGHT, HACKATHON_DATA.SEVEN, HACKATHON_DATA.GAME_JAM];

export default function HackathonCarousel() {
  const [index, setIndex] = useState(0);
  const [currentHackathon, setCurrentHackathon] = useState(HACKATHONS_IN_ORDER[0]);

  function onLeftButtonPress() {
    if (index == 0) {
      setIndex(HACKATHONS_IN_ORDER.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function onRightButtonPress() {
   if ((index + 1) == HACKATHONS_IN_ORDER.length) {
     setIndex(0);
   } else {
     setIndex(index + 1);
   }
  }
  useEffect(() => {
    setCurrentHackathon(HACKATHONS_IN_ORDER[index]);
  }, [index])

  return (
    <>
    <TopWrapper>
      <Button onClick={onLeftButtonPress} left><FaChevronRight /></Button>
      {HACK_BUBBLES.map((HackBubble, mapIndex) => {
        return <HackBubble selected={index == mapIndex} />
      })}
      <Button onClick={onRightButtonPress}><FaChevronRight /></Button>
    </TopWrapper>
    <HackathonDate>{currentHackathon.date}</HackathonDate>
    <ChooserContainer>
      {HACKATHONS_IN_ORDER.map((data, mapIndex) => {
        return (
          <ChooserButton 
            onClick={() => setIndex(mapIndex)}
            selected={index == mapIndex} 
            gradientColor={data.gradientColor} 
          />
        )
      })}
    </ChooserContainer>
    </>
  )
}