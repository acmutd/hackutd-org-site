import styled from 'styled-components';

import CONSTRAINTS from 'constants/constraints';

import NavBar from 'components/Navbar';


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
  background: black;

  ${CONSTRAINTS.DEFAULT_BP} {
    height: 85vh;
    min-height: initial;
  }
`

export default function Hero() {
  return (
    <Container>
      <NavBar />
    </Container>
  )
}