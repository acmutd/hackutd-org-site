import { useState } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import Sparkle from './Sparkle';
// const Sparkle = dynamic(() => import('./Sparkle', { ssr: false }))

import useRandomInterval from 'hooks/useRandomInterval';
import random, { randomFromArray } from 'functions/random';
import range from 'functions/range';

// reference: https://www.joshwcomeau.com/react/animated-sparkles-in-react/
// this is pretty much just a modified version of the above
// 慢慢来

// color of the stars
const DEFAULT_COLOR = "white";

// svg data for what we want the star(s) to look like
const STAR_1 = "M27.7245 2.76442C28.7428 0.282791 32.2572 0.282791 33.2755 2.76442L39.4559 17.8275C39.8845 18.872 40.8631 19.5875 41.9884 19.6789L58.1029 20.9885C60.7514 21.2037 61.8333 24.5016 59.8269 26.2438L47.4895 36.9569C46.648 37.6876 46.281 38.8245 46.5362 39.9093L50.2949 55.8825C50.9072 58.4843 48.068 60.5274 45.7954 59.1204L32.0793 50.6278C31.1117 50.0287 29.8883 50.0287 28.9207 50.6278L15.2046 59.1204C12.932 60.5274 10.0928 58.4843 10.7051 55.8825L14.4638 39.9093C14.719 38.8245 14.352 37.6876 13.5105 36.9569L1.17311 26.2438C-0.833248 24.5016 0.248584 21.2037 2.89706 20.9885L19.0116 19.6789C20.1369 19.5875 21.1155 18.872 21.5441 17.8275L27.7245 2.76442Z";
const STAR_2 = "M29.7749 1.91897C30.8464 -0.408225 34.1536 -0.408224 35.2251 1.91897L43.6581 20.2359C43.9527 20.8759 44.4633 21.3918 45.1002 21.6931L63.2679 30.2882C65.5573 31.3713 65.5573 34.6287 63.2679 35.7118L45.1002 44.3069C44.4633 44.6082 43.9527 45.1241 43.6581 45.7641L35.2251 64.081C34.1536 66.4082 30.8464 66.4082 29.7749 64.081L21.3419 45.7641C21.0473 45.1241 20.5367 44.6082 19.8998 44.3069L1.73211 35.7118C-0.557281 34.6287 -0.557283 31.3713 1.73211 30.2882L19.8998 21.6931C20.5367 21.3918 21.0473 20.8759 21.3419 20.2359L29.7749 1.91897Z";
const STAR_SHAPES = [STAR_1, STAR_2];

// also contains the majority of styles for the stars
const generateSparkle = color => {
  const sparkle = {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(10, 20),   // [min, max] of star width/height
    style: {
      top: `${random(0, 100)}%`,
      left: `${random(0, 100)}%`
    },
    path: randomFromArray(STAR_SHAPES),
    opacity: `${random(30,60)}%`
  };

  return sparkle;
}

const Wrapper = styled.span`
  position: absolute;
  width: 100vw;
  height: 100%;
`;
const ChildWrapper = styled.strong`
  position: relative;
  z-index: 1;
  font-weight: bold;
`;

const Sparkles = ({ color = DEFAULT_COLOR, children, ...delegated }) => {
  const [sparkles, setSparkles] = useState(() => {
    return range(3).map(() => generateSparkle(color));
  });

  useRandomInterval(() => {
    const sparkle = generateSparkle(color);
    const now = Date.now();
    const nextSparkles = sparkles.filter(sp => {
      const delta = now - sp.createdAt;
      return delta < 1500;
    });
    nextSparkles.push(sparkle);
    setSparkles(nextSparkles);
  }, 50, 450);

  return (
    <Wrapper {...delegated}>
      {sparkles.map(sparkle => (
        <Sparkle 
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
          path={sparkle.path}
        />
      ))}
      <ChildWrapper>{children}</ChildWrapper>
    </Wrapper>
  );
}

export default Sparkles;