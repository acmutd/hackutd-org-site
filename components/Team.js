import Header from 'components/Header';
import DirectorQuote from 'components/DirectorQuote';
import TeamCarousel from 'components/TeamCarousel';

export default function Team() {
  return (
    <>
    <Header title="Meet the Team" givenId="team" />
    <DirectorQuote />
    <TeamCarousel />
    </>
  )
}