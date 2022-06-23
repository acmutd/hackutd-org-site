import styled from 'styled-components';

const GradientText = styled.span`
  background: linear-gradient(268.4deg, #FFB525 -4.94%, #FF56D6 102.31%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  font-weight: bold;
`

export default function InlineGradient({ children }) {
  return (
    <GradientText>
      {children}
    </GradientText>
  )
}