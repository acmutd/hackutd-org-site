import styled from "styled-components";
import Image from "next/image";

import CONSTRAINTS from "constants/constraints";

import salman_purva from "assets/img/salman_purva.png";

import InlineGradient from "components/shared/InlineGradient";

const Wrapper = styled.div`
  width: 100%;
  max-width: ${CONSTRAINTS.DEFAULT};
  /* display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; */

  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 35px;
  margin-bottom: 60px;

  ${CONSTRAINTS.DEFAULT_BP} {
    width: ${CONSTRAINTS.DEFAULT_MOBILE_WIDTH};
    /* flex-direction: column; */
    grid-template-columns: 1fr;
    margin-bottom: 10px;
    align-items: center;
    justify-items: center;
  }
`;

const DirectorImage = styled.div`
  img {
    border-radius: 35px;
  }
`;

const EncouragingText = styled.div`
  // margin: 30px;
  margin-right: 0px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  ${CONSTRAINTS.DEFAULT_BP} {
    br {
      display: none;
    }
    margin: 20px;
  }
`;

const Message = styled.p`
  font-weight: 200;
`;

const Citation = styled.div`
  ${CONSTRAINTS.DEFAULT_BP} {
    align-self: flex-end;
    margin-top: 8px;
  }
`;

const Name = styled.p`
  font-weight: 200;
  font-style: italic;
  position: relative;
`;

const Hyphen = styled.span`
  position: absolute;
  left: -13px;
`;

const Title = styled.p`
  font-weight: 700;
`;

function DirectorQuote() {
  return (
    <Wrapper>
      <DirectorImage>
        <Image
          src={salman_purva}
          width={300}
          height={263}
          alt="HackUTD's Director"
        />
      </DirectorImage>
      <EncouragingText>
        <Message>
          We&apos;re the directors of HackUTD this year and are very excited for
          the next iteration of our event. Our team works hard all year round to
          make our events possible, and we can&apos;t wait to put on one more
          successful hackathon!
        </Message>
        <br />
        <Citation>
          <Name>
            <Hyphen>–</Hyphen>Purva Pawar &amp; Salman Jaher
          </Name>
          <Title>Co-Directors, HackUTD &apos;24</Title>
        </Citation>
      </EncouragingText>
    </Wrapper>
  );
}

export default DirectorQuote;

