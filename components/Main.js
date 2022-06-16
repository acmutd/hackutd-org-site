import styled from 'styled-components';

import Hero from 'components/Hero';
import Mission from 'components/Mission';

const Container = styled.div`
  width: 100%;
  // flexy
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Main() {
  return (
    <Container>
      <Hero />
      <Mission />
    </Container>
  )
}