import Header from 'components/Header';
import HackathonCarousel from 'components/HackathonCarousel';

export default function Hackathons() {
  return (
    <>
      <Header title="Hackathons" rightJustify givenId="hackathons"  />
      <HackathonCarousel />
    </>
  )
}