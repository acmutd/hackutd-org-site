import React from 'react';
import styled from 'styled-components';

import GetInTouchButton from 'components/support/GetInTouchButton';

export default {
  title: 'Support/GetInTouchButton',
  component: GetInTouchButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'fullscreen',
  },
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Default = () => <Wrapper><GetInTouchButton /></Wrapper>;