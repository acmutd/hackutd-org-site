import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import dog from 'assets/img/placeholders/dog.jpeg';

const Wrapper = styled.div`
  // flexy
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  font-size: 14px;
  position: relative;
`
const Name = styled.div`
  font-weight: 700;
  margin-top: 5px;
`
const Team = styled.div`
  font-weight: 300;
`

const Holder = styled.div`
  position: relative;
  border-radius: 20px;
`

const PlaceholderImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`

const FunImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.01;
  border-radius: 20px;
  transition: opacity 0.5s;
  ${props => props.$hovered && `
    opacity: 1.0;
  `}
`

const NormalHolder = styled.div`
  img {
    border-radius: 20px;
  }
`

const FunHolder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.01;
  img {
    border-radius: 20px;
  }
  transition: opacity 0.5s;
  ${props => props.$hovered && `
    opacity: 1.0;
  `}
`

export default function OfficerView({ data, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Wrapper onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Holder>
        <NormalHolder>
          <Image src={data.pic ? data.pic[0] ? data.pic[0] : dog : dog} width={100} height={100} alt={`Image of ${data.name}, a HackUTD Officer.`}/>
        </NormalHolder>
        {data.pic && data.pic[1] && <FunHolder $hovered={hovered}>
            <Image src={data.pic[1]} width={100} height={100} alt={`Humorous image of ${data.name}, a HackUTD Officer.`} />
          </FunHolder>}
      </Holder>
        
      <Name>{data.name}</Name>
      <Team>{data.team}</Team>
    </Wrapper>
  )
}