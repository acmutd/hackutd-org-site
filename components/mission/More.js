
import { FaTimes } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

import InlineGradient from 'components/shared/InlineGradient';

import CONSTRAINTS from 'constants/constraints';

const appear = keyframes`
  from {
    opacity: 0%;
  } to {
    opacity: 100%;
  }
`

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  animation: ${appear} 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 40px;
  }

  ${props => !props.isShown && `
    display: none;
  `}

  ${CONSTRAINTS.DEFAULT_BP} {
    h3 {
      font-size: 33px;
    }
  }
`

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #44444480;
  top: 0;
  left: 0;
  &:hover {
    cursor: pointer;
  }
`

const appear2 = keyframes`
  from {
    opacity: 0%;
    transform: translateY(100px);
  } to {
    opacity: 100%;
    transform: translateY(0px);
  }
`

const SubContainer = styled.div`
  // todo: change these fonts
  background-color: var(--sheet-bg);

  position: relative;

  width: 100%;
  max-width: 800px;
  height: 95%;
  margin: 3vh;
  border-radius: 30px;
  padding: 30px 60px;
  box-sizing: border-box;
  animation: ${appear2} 0.5s;

  li {
    margin-top: 30px;
  }

  ${CONSTRAINTS.DEFAULT_BP} {
    width: 100%;
    margin: 0;
    height: 100%;
    margin-top: 8vh;
    padding: 30px 5vw;
  }
`

const Content = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  ul {
    list-style: none;
    padding: 0;
  }
`

const ExitContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 30px;
  ${CONSTRAINTS.DEFAULT_BP} {
    padding: 10px;
  }
`

const Exit = styled.button`
  
  color: var(--primary);

  width: 50px;
  height: 50px;
  font-size: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`

const Question = styled.strong`
  font-size: 130%;
`

const Answer = styled.p`
  margin-top: 10px;
  p {
    margin-top: 5px;
  }
`

const uwu = keyframes`
  0% {
    transform: rotate(15deg);
  } 
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(15deg);
  }
`

const Pluwuto = styled.img`
  width: 100px;
  transform: rotate(15deg);
  filter: grayscale(50%);
  transition: filter 1s;
  display: block;
  float: right;

  &:hover {
    animation: ${uwu} 2s;
    filter: grayscale(0%);
  }
`

export default function More({ isShown, callback }) {

  return (
    <Container isShown={isShown} suppressHydrationWarning={true}>
      <Background onClick={() => {callback && callback()}}/>
      <SubContainer>
        <ExitContainer>
          <Exit>
            <FaTimes 
              onClick={() => {
                if (callback) {
                  callback();
                }
              }}
            />
          </Exit>
        </ExitContainer>
        <Content>
         <h3><InlineGradient>Questions and Answers</InlineGradient></h3>
          <ul>
            <li>
              <Question>Where is HackUTD?</Question>
              <Answer>
                    HackUTD is hosted in Richardson, TX, near Dallas and in the DFW metroplex. We&apos;re at the University of Texas at Dallas—one of the nation&apos;s fastest-growing and most promising STEM-focused universities.
                    Recently, our hackathon has been held at Engineering and Computer Science (ECS) West, one of UTD&apos;s newest and most beautiful buildings.
              </Answer>
            </li>
            <li>
              <Question>What makes HackUTD Special?</Question>
              <Answer>           
                The HackUTD team is focused on much more than just bringing about a yearly hackathon. We help sponsor other hackathons on campus and around DFW, and we host workshops to help hackers get involved before and after hacking.
              </Answer>
            </li>
            <li>
              <Question>Do you have a mascot?</Question>
              <Answer>
               We don&apos;t have an official HackUTD mascot, but we do have individual mascots for some of our hackathons. Our latest for HackUTD IX is <em>Pluwuto</em>...
                <Pluwuto src="svg/pluwuto.svg"/>
              </Answer>
            </li>
            <li>
              <Question>Are you the best hackathon in Texas?</Question>
              <Answer>We are the best hackathon in Texas.</Answer>
            </li>
          </ul>
        </Content>
      </SubContainer>
    </Container>
  )
}