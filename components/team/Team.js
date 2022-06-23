import Header from 'components/shared/Header';
import DirectorQuote from 'components/team/DirectorQuote';
import TeamCarousel from 'components/team/TeamCarousel';

export default function Team() {
  return (
    <>
    <Header title="Meet the Team" givenId="team" />
    <DirectorQuote />
    <TeamCarousel />
    </>
  )
}