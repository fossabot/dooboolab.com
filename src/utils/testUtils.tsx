import 'react-native';

import React, {ReactElement} from 'react';

import RootProvider from '../providers';
import {ThemeType} from './theme';

export const createTestElement = (
  child: ReactElement,
  themeType?: ThemeType,
): ReactElement => (
  <RootProvider initialThemeType={themeType}>{child}</RootProvider>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createTestProps = (
  obj?: Record<string, unknown>,
): Record<string, unknown> | unknown | any => ({
  navigation: {
    navigate: jest.fn(),
    goBack: jest.fn(),
  },
  ...obj,
});
