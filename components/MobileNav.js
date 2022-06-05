import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { GoThreeBars } from 'react-icons/go';
import { IoMdClose } from 'react-icons/io';

import CONSTRAINTS from 'constants/constraints';


const NavButton = styled.div`
  display: none;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;
  ${CONSTRAINTS.DEFAULT_BP} {
    display: block;
  }

  &:before {
    content: '';
    
    background-color: #DF82AE90;
   backdrop-filter: blur(20px) saturate(160%) contrast(45%) brightness(140%);
   position: absolute;
   height: 40vw;
   width: 40vw;
   border-radius: 30vw;
   z-index: -1;
   transform: translate(-5vw, -20vw);

   
  }
`


const Hamburger = styled.button`
  color: white;
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
  
  svg {
    width: 15vw;
    height: 15vw;
  }

`

const onAppear = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1.0;
  }
`

const MobileSelector = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  min-height: -webkit-fill-available;
 
  
  background-color: #00000090;
  backdrop-filter: blur(20px) saturate(160%) contrast(45%) brightness(140%);
  z-index: 4;

  animation: ${onAppear} 0.3s forwards;
`

const ExitContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 60%;
`

const Item = styled.div`
  font-size: 8vw;
  color: white;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`

const ExitButton = styled.div`
color: white;
  font-size: 15vw;
  font-weight: bold;
  margin: 20px;
  &:hover {
    cursor: pointer;
  }
`

function MobileNav({ refs }) {
  const [mobilePressed, setMobilePressed] = useState(false);

  function scrollInto(reference) {
    setMobilePressed(false);
    reference.current.scrollIntoView();
  }

  return(
    <>
    <NavButton onClick={() => {
      console.log("Pressed");
      setMobilePressed(true);
    }}>
      <Hamburger><GoThreeBars /></Hamburger>
    </NavButton>
    {mobilePressed && 
    <MobileSelector>
      <ExitContainer>
        <ExitButton onClick={() => setMobilePressed(false)}><IoMdClose /></ExitButton>
      </ExitContainer>
      <Items>
        <Item onClick={() => scrollInto(refs[0])}>Our Mission</Item>
        <Item onClick={() => scrollInto(refs[1])}>Hackathons</Item>
        <Item onClick={() => scrollInto(refs[2])}>Meet the Team</Item>
        <Item onClick={() => scrollInto(refs[3])}>Support Us</Item>
        <Item onClick={() => scrollInto(refs[4])}>Open Source</Item>
      </Items>
    </MobileSelector>
    }
    </>
  )
}

export default MobileNav;