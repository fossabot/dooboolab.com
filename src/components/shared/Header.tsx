import {IC_DOOBOOLAB, IC_DOOBOOLAB_DARK} from '../../utils/Icons';
import React, {FC, ReactElement, useState} from 'react';
import {ThemeType, useTheme} from '../../providers/ThemeProvider';
import styled, {css} from 'styled-components/native';

import Hoverable from '../../utils/Hoverable';
import ToggleSwitch from 'toggle-switch-react-native';
import {useNavigation} from '@react-navigation/native';

const Container = styled.View`
  width: 100%;
  padding: 0 24px;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  ${({theme: {isDesktop}}) =>
    isDesktop &&
    css`
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    `}
`;

const Logo = styled.Image`
  width: 180px;
  height: 66.54px;
  margin-top: 8px;
`;

const LinkWrapper = styled.View`
  flex-direction: row;
  align-items: center;

  ${({theme: {isDesktop}}) =>
    isDesktop &&
    css`
      margin-right: 48px;
    `}
`;

const LinkTouch = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

const LinkText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  padding: 20px;
`;

const SwitchWrapper = styled.View`
  position: absolute;
  right: 20px;
  top: 20px;

  ${({theme: {isDesktop}}) =>
    isDesktop &&
    css`
      top: 24px;
    `}
`;

type LinkProps = {
  url: string;
  text: string;
  selected?: boolean;
};

const Link: FC<LinkProps> = ({url, text, selected}): ReactElement => {
  const navigation = useNavigation();
  const {theme} = useTheme();

  return (
    <Hoverable>
      {(isHovered) => (
        <LinkTouch
          style={{marginRight: 20}}
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate('');
          }}>
          <LinkText
            style={
              isHovered && {
                color: theme.heading,
                textDecorationLine: 'underline',
              }
            }>
            {text}
          </LinkText>
        </LinkTouch>
      )}
    </Hoverable>
  );
};

const Header: FC = () => {
  const {theme, themeType} = useTheme();
  const [switchOn, setSwitchOn] = useState(themeType === ThemeType.DARK);

  return (
    <Container>
      <Logo
        source={
          themeType === ThemeType.LIGHT ? IC_DOOBOOLAB : IC_DOOBOOLAB_DARK
        }
      />
      <LinkWrapper>
        <Link text="Story" url="" />
        <Link text="Work" url="" />
        <Link text="Contact" url="" />
      </LinkWrapper>
      <SwitchWrapper>
        <ToggleSwitch
          isOn={switchOn}
          onToggle={(val: boolean) => setSwitchOn(val)}
          onColor={theme.text}
        />
      </SwitchWrapper>
    </Container>
  );
};

export default Header;
