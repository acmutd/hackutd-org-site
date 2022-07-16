import styled from 'styled-components';

import Hero from 'components/hero/Hero';
import Mission from 'components/mission/Mission';
import Hackathons from 'components/hackathons/Hackathons';
import Team from 'components/team/Team';
import Support from 'components/support/Support';
import Sponsors from 'components/sponsors/Sponsors';
import OpenSource from 'components/open_source/OpenSource';
import Footer from 'components/navigation/Footer';

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
      <Sponsors />
      <OpenSource />
      <Footer />
    </Container>
  )
}