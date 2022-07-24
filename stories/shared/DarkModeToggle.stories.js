import React from 'react';
import styled from 'styled-components';

import DarkModeToggle from 'components/shared/DarkModeToggle';

export default {
  title: 'Shared/DarkModeToggle',
  component: DarkModeToggle,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'fullscreen',
  },
};

export const Default = () => <DarkModeToggle />

// const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
// `

// export const Default = () => <Wrapper><DarkModeToggle /></Wrapper>;