import React from 'react';
import styled from 'styled-components';

import CONSTRAINTS from 'constants/constraints';

const Divider = styled.div`
  background-color: #E1E1E1;
  width: 100%;
  max-width: ${CONSTRAINTS.DEFAULT_RAW * 0.7}px;
  margin: 45px 0px;
  height: 3px;
  box-sizing: border-box;
  border-radius: 5px;
  align-self: center;

  ${CONSTRAINTS.DEFAULT_BP} {
    display: none;
  }
`

function TeamDivider({ style }) {
   return (
     <Divider style={style} />
   )
}

export default TeamDivider;