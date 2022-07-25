import { useState, useEffect } from 'react';
import styled from 'styled-components';
// lmao why tf did I choose to implement this by hand i'm dying

import OfficerView from 'components/team/OfficerView';

import CONSTRAINTS from 'constants/constraints';
import OFFICERS from 'constants/officers';

const Wrapper = styled.div`
  width: 100%;
  max-width: ${CONSTRAINTS.DEFAULT_RAW + 150}px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  position: relative;

  // interesting experiement
  // my mom liked this one better so I'm implementing it lmao
  &:before {
    position: absolute;
    left: 50%;
    transform: translateX(-50%) rotate(-5deg);
    content: '';
    z-index: -1;
    width: 120vw;
    position: absolute;
    height: 115%;
    background: var(--main-gradient);
    opacity: 0.5;

    box-shadow: inset 0 0 15px #00000085;
  }

  @media screen and (max-width: 900px) {
    &:before {
      content: '';
      background-color: #EDEDED;
      ${CONSTRAINTS.ABSOLUTE_POS_CENTER_HORIZONTAL}
      height: 100%;
      width: 100vw;
      top: 0;
      z-index: -1; // allows scrollbar to be shown
      box-shadow: inset 0 0 14px #00000070;
    }
  }
`
const ButtonWrapper = styled.div`
  
`
const Button = styled.button`
  border: none;
  background-color: transparent;
  @media screen and (max-width: 900px) {
    display: none;
  }
`
const ButtonImage = styled.img`
  filter: drop-shadow(0px 0px 3px rgb(0 0 0 / 0.4));
  width: 50px;

  ${props => props.left && 'transform: scaleX(-1);'}
  ${props => props.inactive && 'opacity: 0.5;'}
  ${props => !props.inactive && `
    &:hover {
      cursor: pointer;
    }
  `}
`
const TeamGridWrapper = styled.div`
  width: ${CONSTRAINTS.DEFAULT};
  overflow: hidden;
  
  @media screen and (max-width: 900px) {
    overflow-x: scroll;
  }
`
const TeamGridContents = styled.div`
  display: flex;
  transition: transform 1s;
  ${props => {
    return `transform: translateX(-${CONSTRAINTS.DEFAULT_RAW * props.index}px);`
  }}
`
// grid reference: https://grid.layoutit.com/ 
const TeamGrid = styled.div`
  display: grid;
  
  min-width: ${CONSTRAINTS.DEFAULT}; // might be a hack dk
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr; 
  justify-items: center;
  box-sizing: border-box;

  // keep these the same
  grid-gap: 20px;
  padding: 20px;

  @media screen and (max-width: 900px) {
    grid-auto-flow: column;
  }
`

const PlaceHolder = styled.div`
  background-color: gray;
  width: 100px;
  height: 100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`
const PLACEHOLDER_ARR = Array.from(Array(28).keys());

function TeamCarousel() {
  const [index, setIndex] = useState(0);
  const [teamArrays, setTeamArrays] = useState([]);


  function decrementIndex() {
    if (index != 0) {
      setIndex(index -1);
    }
  }

  function incrementIndex() {
    if ((index + 1) != teamArrays.length) {
      setIndex(index + 1);
    }
  }

  function resetTeamArrays() {
    let tempArr = [];
    const arrayLength = 10;
    for (let i = 0; i < Math.ceil(OFFICERS.length / arrayLength); ++i) {
      tempArr.push([]);
      for (let j = 0; j < arrayLength; ++j) {
        let adjustedIndex = (i * arrayLength) + j;
        let potentialItem = OFFICERS[adjustedIndex];
        if (potentialItem !== undefined) {
          tempArr[i][j] = OFFICERS[adjustedIndex];
        }
      }
    }
    setTeamArrays(tempArr);
  }

  // do this at the beginning
  useEffect(() => {
    resetTeamArrays();
  }, [])

  return (
    <Wrapper>
      <ButtonWrapper>
        <Button onClick={decrementIndex}><ButtonImage src={'svg/carousel_button.svg'} left={true} inactive={index == 0} /></Button>
      </ButtonWrapper>
      <TeamGridWrapper>
        <TeamGridContents index={index}>
        {teamArrays.map((arr, index) => {
          return (
            <TeamGrid key={index}>
              {arr.map((item, index) => {
                return (
                  <OfficerView data={item} index={index} key={index} />
                )
              })}
            </TeamGrid>
          )
        })}
        </TeamGridContents>
      </TeamGridWrapper>
      <ButtonWrapper>
        <Button onClick={incrementIndex}><ButtonImage src={'svg/carousel_button.svg'} inactive={((index + 1) == teamArrays.length)}/></Button>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default TeamCarousel;