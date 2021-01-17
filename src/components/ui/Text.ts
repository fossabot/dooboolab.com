import styled, {css} from 'styled-components/native';

export const Title = styled.Text`
  font-size: 26px;
  text-align: center;
  max-width: 60%;
  color: ${({theme}): string => theme.text};
  font-family: futura;
  font-weight: 700;

  ${({theme: {isDesktop}}) =>
    isDesktop &&
    css`
      font-size: 40px;
    `}
`;

export const SubTitle = styled.Text`
  font-size: 20px;
  text-align: center;
  max-width: 60%;
  color: ${({theme}): string => theme.text};
  font-family: futura;
  font-weight: 700;

  ${({theme: {isDesktop}}) =>
    isDesktop &&
    css`
      font-size: 28px;
    `}
`;

export const Description = styled.Text`
  font-size: 18px;
  line-height: 165%;
  text-align: center;
  max-width: 60%;
  color: ${({theme}): string => theme.text};
  font-family: avenir;
  font-weight: 300;

  ${({theme: {isDesktop}}) =>
    isDesktop &&
    css`
      font-size: 20px;
    `}
`;