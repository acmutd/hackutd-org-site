import React from 'react';
import styled from 'styled-components';

import HackPortalButton from "components/open_source/HackPortalButton";

export default {
  title: 'Open Source/HackPortalButton',
  component: HackPortalButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'fullscreen',
  },
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Default = () => <Wrapper><HackPortalButton /></Wrapper>;