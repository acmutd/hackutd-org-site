import styled from 'styled-components';

const GradientText = styled.span`
  background: var(--inline-gradient);
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