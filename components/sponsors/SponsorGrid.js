import { useContext } from "react";
import Image from "next/image";
import styled from "styled-components";

import SPONSORS from "constants/sponsors";
import CONSTRAINTS from "constants/constraints";
import ThemeContext from "context/ThemeContext";

import shadow from "assets/img/half_shadow.png";

const Holder = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
`;
function SponsorImg({ sponsor }) {
  return (
    <Holder>
      <a href={sponsor.link} target="_blank" rel="noreferrer">
        <Image src={sponsor.img} layout="fill" objectFit="contain" />
      </a>
    </Holder>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: ${CONSTRAINTS.DEFAULT};
  position: relative;
  padding: 20px;
  box-sizing: border-box;

  ${(props) =>
    props.dark
      ? `
    background-color: rgb(150, 150, 150);
    margin-top: 20px;
    ${CONSTRAINTS.DEFAULT_BP_INVERSE} {
      border-radius: 43px;
    }
  `
      : `
    background-color: rgb(210, 210, 210);
    margin-top: 20px;
    ${CONSTRAINTS.DEFAULT_BP_INVERSE} {
      border-radius: 43px;
    }
  `}

  ${CONSTRAINTS.DEFAULT_BP} {
    padding: 15px;
  }
  ${CONSTRAINTS.DEFAULT_BP} {
    &:before {
      content: "";
      ${CONSTRAINTS.ABSOLUTE_POS_CENTER_HORIZONTAL};
      width: 100vw;
      height: 100%;
      top: 0;
      background: linear-gradient(
        0deg,
        rgba(200, 200, 200, 1) 0%,
        rgba(205, 205, 205, 0.6012780112044818) 8%,
        rgba(0, 0, 0, 0) 100%,
        rgba(0, 0, 0, 0) 100%
      );
    }
  }
`;

const GridRow = styled.div`
  display: grid;
  height: 100px;
  grid-gap: 30px;
  margin: 20px;

  ${CONSTRAINTS.DEFAULT_BP} {
    grid-gap: 15px;
    margin: 0px;
  }
`;

const TitleSponsor = styled(GridRow)``;

const One = styled(GridRow)`
  box-sizing: border-box;
  padding: 0px 15%;

  ${(props) =>
    props.jpmorgan &&
    `
    margin-top: -25px;
  `}
`;

const Two = styled(GridRow)`
  grid-template-columns: 1fr 1fr;
`;

const Three = styled(GridRow)`
  grid-template-columns: 1fr 1fr 1fr;
`;

const Four = styled(GridRow)`
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const ShadowHolder = styled.div`
  position: absolute;
  top: -100px;
  opacity: 0.7;
  ${(props) =>
    props.right
      ? `
    right: -40px;
    // background-color: green;
  `
      : `
    left: -40px;
    transform: scaleX(-1);
    // background-color: blue;
  `}
  height: 130%;
  width: 140px;
`;

export default function SponsorGrid() {
  const { dark } = useContext(ThemeContext);

  return (
    <Container dark={dark}>
      <Two>
        <SponsorImg sponsor={SPONSORS.PNC} />
        <SponsorImg sponsor={SPONSORS.BENQ} />
      </Two>
      <Three>
        <SponsorImg sponsor={SPONSORS.GOLDMAN_SACHS} />
        <SponsorImg sponsor={SPONSORS.TOYOTA} />
        <SponsorImg sponsor={SPONSORS.FIDELITY} />
      </Three>
      <Four>
        <SponsorImg sponsor={SPONSORS.STATEFARM} />
        <SponsorImg sponsor={SPONSORS.EOG} />
        <SponsorImg sponsor={SPONSORS.CBRE} />
        <SponsorImg sponsor={SPONSORS.FRONTIER} />
      </Four>
      <Three>
        <SponsorImg sponsor={SPONSORS.FANNIE_MAE} />
        <SponsorImg sponsor={SPONSORS.JPMORGAN_CHASE} />
        <SponsorImg sponsor={SPONSORS.GEICO} />
      </Three>
      <Three>
        <SponsorImg sponsor={SPONSORS.PRHI} />
        <SponsorImg sponsor={SPONSORS.AXXESS} />
        <SponsorImg sponsor={SPONSORS.CORE_LOGIC} />
      </Three>
      <Two>
        <SponsorImg sponsor={SPONSORS.NORDVPN} />
        <SponsorImg sponsor={SPONSORS.INCOGNI} />
      </Two>
      <Two>
        <SponsorImg sponsor={SPONSORS.RING_CENTRAL} />
        <SponsorImg sponsor={SPONSORS.L3_HARRIS} />
      </Two>
      <Two>
        <SponsorImg sponsor={SPONSORS.TI} />
        <SponsorImg sponsor={SPONSORS.VEOLIA} />
      </Two>
      <Two>
        <SponsorImg sponsor={SPONSORS.STUDENT_GOV} />
        <SponsorImg sponsor={SPONSORS.CAPITAL_ONE} />
      </Two>
      <Three>
        <SponsorImg sponsor={SPONSORS.STANDOUT_STICKERS} />
        <SponsorImg sponsor={SPONSORS.MME} />
        <SponsorImg sponsor={SPONSORS.STICKER_MULE} />
      </Three>

      <ShadowHolder>
        <Image src={shadow} layout="fill" objectFit="contain" />
      </ShadowHolder>
      <ShadowHolder right>
        <Image src={shadow} layout="fill" objectFit="contain" />
      </ShadowHolder>
    </Container>
  );
}

