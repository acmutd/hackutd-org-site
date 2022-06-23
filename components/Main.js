import styled from 'styled-components';

import Hero from 'components/Hero';
import Mission from 'components/Mission';
import Hackathons from 'components/Hackathons';
import Team from 'components/Team';
import Support from 'components/Support';
import OpenSource from 'components/OpenSource';
import Footer from 'components/Footer';

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
      <Hackathons />
      <Team />
      <Support />
      <OpenSource />
      <Footer />
    </Container>
  )
}