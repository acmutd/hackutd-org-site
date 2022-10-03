import { createGlobalStyle } from 'styled-components';

import CONSTRAINTS from 'constants/constraints';

// defining styles that should apply across the entire website
export default createGlobalStyle`
  &:root {
    --inline-gradient: linear-gradient(268.4deg, #FFB525 -4.94%, #FF56D6 102.31%);
    --get-in-touch-gradient: linear-gradient(238.86deg, #FFB524 5.36%, rgba(255, 0, 214, 0.8) 119.14%);
    --hackportal-text-gradient: radial-gradient(circle, rgba(187,131,255,1) 0%, rgba(123,129,255,1) 94%);
    --hackportal-color: #7B81FF;

    ${props => props.dark ? `
      --main-gradient: linear-gradient(191deg, rgba(89,15,183,1) 0%, rgba(180,0,201,1) 38%, rgba(212,112,15,1) 100%);
      --primary: white;
      --opposite: black;
      --raised-button: #222222;
      --open-source-subtext: white;
      --footer-gradient: linear-gradient(20deg, rgba(89,15,183,1) 0%, rgba(180,0,201,1) 38%, rgba(212,112,15,1) 100%);
      --webkit-scrollbar-gradient: linear-gradient(0deg, rgba(180,0,201,1) 38%, rgba(212,112,15,1) 100%);
      // --get-in-touch-gradient: linear-gradient(80deg, rgba(89,15,183,1) 0%, rgba(180,0,201,1) 38%, rgba(212,112,15,1) 80%);
      --subheader: #AAAAAA;
      --divider: #444444;
      --header: linear-gradient(10deg, rgba(255, 0, 214, 0.8) 20%, rgba(280,112,15, 0.95) 70%);
      --hackathon-date: #999999;
      --hackathon-chooser-bg: #444444;
      --sheet-bg: #333333;
    `:  `
      --main-gradient: linear-gradient(180deg, #FFB524 3.05%, rgba(255, 0, 214, 0.45) 100%);
      --primary: black;
      --opposite: white;
      --raised-button: white;
      --open-source-subtext: #636363;
      --footer-gradient: linear-gradient(243.93deg, #FFB524 20.24%, rgba(255, 0, 214, 0.6) 125.26%);
      --webkit-scrollbar-gradient: linear-gradient(0deg, #FFB524 3.05%, rgba(255, 0, 214, 0.45) 100%);
      --subheader: #636363;
      --divider: #CECECE;
      --header: linear-gradient(268.4deg, #FFB525 -4.94%, #FF56D6 102.31%);
      --hackathon-date: #515151;
      --hackathon-chooser-bg: #D9D9D9;
      --sheet-bg: #FFFFFF;
    `}
  }

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

    background-color: var(--opposite);
    color: var(--primary);


  }
  // scrollbar styles : kind of hokey but I think it's a good touch (Chrome/Webkit, does not apply to Firefox)
  body::-webkit-scrollbar {
    width: 12px;
  }
  body::-webkit-scrollbar {
    background-color: rgba(0, 0, 0, 0);
  }
  body::-webkit-scrollbar-thumb {
    background: var(--webkit-scrollbar-gradient);
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