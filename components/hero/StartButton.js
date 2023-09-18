import Link from 'next/link';

import styled, { keyframes } from 'styled-components';

import CONSTRAINTS from 'constants/constraints';


const up_down = keyframes`
  0% {
    transform: translateY(0px);
  } 50% {
    transform: translateY(-10px);
  } 100% {
    transform: translateY(0px);
  }
`

const Button = styled.div`
  position: absolute;
  ${CONSTRAINTS.ABSOLUTE_POS_CENTER_HORIZONTAL};
  bottom: 2%;
  background-color: transparent;
  outline: none;
  border: none;
  padding: 30px;
  padding-bottom: 5px;
  z-index: 2;
  
  img {
    animation: ${up_down} 0.8s ease-in-out infinite;
    width: 60px;
    transition: filter 0.5s;
    filter: drop-shadow(0px 3px 6px rgb(0 0 0 / 0.4));
  }

  &:hover {
    cursor: pointer;
    img {
      filter: drop-shadow(0px 3px 2px rgb(0 0 0 / 0.4));
      animation: none;
    }
  }

  ${CONSTRAINTS.DEFAULT_BP} {
    bottom: 0%;
  }
`

function StartButton() {
  return (
    <Link href="#mission">
    <Button>
      <img src={"svg/tri_button.svg"} alt="triangular button to move to the next section"></img>
    </Button>
    </Link>
  )
}

export default StartButton;