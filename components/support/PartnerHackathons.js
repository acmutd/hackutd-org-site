import React from 'react';
import styled from 'styled-components';

import LINKS from 'constants/links';

const PartnerDescription = styled.p`

`
const WEHackLink = styled.a`
  font-weight: 700;
  color: #D275FE;
`

function PartnerHackathons() {
  return (
    <>
    <PartnerDescription>We currently partner with <WEHackLink href={LINKS.WEHACK}>WEHack@UTD</WEHackLink>, Dallas&apos; largest inclusive hackathon. 
    Be sure to check them out next spring!</PartnerDescription>
    </>
  )
}

export default PartnerHackathons;