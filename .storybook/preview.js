import { addDecorator } from '@storybook/react';

import GlobalStyle from '../components/GlobalStyle';

import * as NextImage from "next/image";

// https://storybook.js.org/blog/get-started-with-storybook-and-next-js/
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

// allows us to apply our styles to the storybook
addDecorator(s => <><GlobalStyle />{s()}</>)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}