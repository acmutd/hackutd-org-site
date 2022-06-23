import Header from 'components/shared/Header';
import HackathonCarousel from 'components/hackathons/HackathonCarousel';

export default function Hackathons() {
  return (
    <>
      <Header title="Hackathons" rightJustify givenId="hackathons"  />
      <HackathonCarousel />
    </>
  )
}