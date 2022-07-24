import { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { FaMoon, FaSun } from 'react-icons/fa';

import galaxy from 'assets/img/galaxy.jpeg';
import sky from 'assets/img/sky-4.jpg';

import CONSTRAINTS from 'constants/constraints';

const BASE_WIDTH = 140;
const BASE_HEIGHT = BASE_WIDTH * 0.5;

const Container = styled.div`
  position: relative;
  position: absolute;
  top: 20px;
  right: calc(-50px - 5vw);
  @media screen and (max-width: ${CONSTRAINTS.DEFAULT_RAW + 420}px) {
    top: 90px;
    right: 80px;
  } 
`

const Wrapper = styled.div`
  width: ${BASE_WIDTH}px;
  height: ${BASE_HEIGHT}px;
  border-radius: 45%/100%;
  box-sizing: border-box;
  border: 6px solid #DDDDDD;
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    width: 50%;
    height: 50%;
    filter: drop-shadow(0px 1px 3px rgb(0 0 0 / 0.4));
  }
`

const BALL_SIZE = BASE_HEIGHT * 1.05;

const Ball = styled.button`
  outline: none;
  border: none;
  background-color: white;
  height: ${BALL_SIZE}px;
  width: ${BALL_SIZE}px;
  border-radius: 100%;
  box-shadow: 0px 0px 5px 5px #00000020;
  position: absolute;
  left: 9%;
  top: -2px;
  &:hover {
    cursor: grab;
  }

  transition: transform 1s, width 0.5s, border-radius 0.5s;
  transform: translateX(${BASE_WIDTH * 0.4}px);
  ${props => props.on && `
    transform: translateX(-15px);
  `}

  &:active {
    width: ${BALL_SIZE + 20}px;
    border-radius: 70%/90%;
    margin: 0 auto;
    ${props => !props.on ? `
      transform: translateX(${BASE_WIDTH * 0.4 - 20}px);
    ` : `
      transform: translateX(-10px);
    `}
  }

  // drag target
  &:active {
    &:before {
      content: '';
      /* background: blue; */
      width: 500px;
      height: 100%;
      position: absolute;
      top: 0;
      ${props => !props.on && `
        transform: translateX(-100%);
      `}

    }
  }
`

const Galaxy = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

const Sunrise = styled(Galaxy)`
  opacity: 0.0;
  transition: opacity 0.5s;
  z-index: 0;
  ${props => props.on && `
    opacity: 1.0;
  `}
`

// const Sunrise = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: -1;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(180deg, #FFB524 3.05%, rgba(255, 0, 214, 1) 100%);
//   opacity: 0.0;
//   transition: opacity 0.5s;
//   ${props => props.on && `
//     opacity: 1.0;
//   `}
// `

export default function DarkModeToggle() {
  // TODO: have this automatically read from user information
  const [on, setOn] = useState(true);

  function onClick() {
    setOn(!on);
    
  }

  return (
    <Container >
      
    <Wrapper>
      <Galaxy><Image src={galaxy} width={BASE_WIDTH} height={BASE_HEIGHT} /></Galaxy>
      <Sunrise on={on}><Image src={sky} width={BASE_WIDTH} height={BASE_HEIGHT} /></Sunrise>
      <FaMoon />
      <FaSun />
    </Wrapper>
    <Ball on={on} onClick={onClick} onDragEnd={onClick} onDragLeave={onClick}/>
    </Container>
  )
}