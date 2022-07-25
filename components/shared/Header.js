import styled from 'styled-components';

import CONSTRAINTS from 'constants/constraints';

const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: ${CONSTRAINTS.DEFAULT};
  ${props => props.rightJustify ? `
    text-align: right;
    h2 {
      margin-right: 10px;
    }
  ` : `
    text-align: left;
    h2 {
      margin-left: 10px;
    }
  `}

  ${CONSTRAINTS.DEFAULT_BP} {
    width: ${CONSTRAINTS.DEFAULT_MOBILE_WIDTH};
  }
`

const HeaderText = styled.h2`
  font-size: 36px;
  margin-bottom: 12px;

  background: var(--header);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  display: inline-block;
`

const Divider = styled.div`
  height: 6px;
  background-color: var(--divider);
  width: 100%;
  border-radius: 5px;
`

export default function Header({ title, givenId, rightJustify }) {
  return (
    <Container rightJustify={rightJustify} id={givenId}>
      <HeaderText>{title}</HeaderText>
      <Divider />
    </Container>
  )
}