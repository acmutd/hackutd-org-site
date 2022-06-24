import { createGlobalStyle } from 'styled-components';

import CONSTRAINTS from 'constants/constraints';

// defining styles that should apply across the entire website
export default createGlobalStyle`
  html {
    scroll-behavior: smooth;
    width: 100vw;
    overflow-x: hidden;
  }
  // need to make sure margin is 0 for styling to work correctly
  // (I find it kind of annoying that a margin is applied normally)
  body {
    margin: 0;
    overflow-x: hidden;
    font-family: 'Inter', sans-serif;
  }
  // scrollbar styles : kind of hokey but I think it's a good touch (Chrome/Webkit, does not apply to Firefox)
  body::-webkit-scrollbar {
    width: 12px;
  }
  body::-webkit-scrollbar {
    background-color: #DDDDDD;
  }
  body::-webkit-scrollbar-thumb {
    background: linear-gradient(0deg, #FFB524 3.05%, rgba(255, 0, 214, 0.45) 100%);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    margin: 5px;
    border-radius: 10px;
  }
  // default paragraph styles : relatively large font, gets a bit smaller on mobile
  p {
    margin: 0;
    padding: 0;
    font-weight: 400;
    line-height: 1.5;
    font-size: 18px;

    ${CONSTRAINTS.DEFAULT_BP} {
      font-size: 16px;
    }
  }
`