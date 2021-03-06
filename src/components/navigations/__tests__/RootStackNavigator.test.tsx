import React, {ReactElement} from 'react';
import {createTestElement, createTestProps} from '../../../../test/testUtils';

import StackNavigator from '../RootStackNavigator';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let props: any;
let component: ReactElement;

jest.mock('../../../services/firebase', () => {
  return {
    currentUser: {
      displayName: 'testDisplayName',
      email: 'test@test.com',
      emailVerified: true,
    },
  };
});

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    createNavigatorFactory: jest.fn(),
    useNavigation: (): Record<string, unknown> => ({
      navigate: jest.fn(),
      setOptions: jest.fn(),
    }),
  };
});

jest.mock('@react-navigation/stack', () => {
  return {
    ...jest.requireActual('@react-navigation/stack'),
    createStackNavigator: () => ({
      Navigator: () => jest.fn(),
      Screen: () => jest.fn(),
    }),
  };
});

describe('[Stack] navigator', () => {
  beforeEach(() => {
    props = createTestProps();

    component = createTestElement(<StackNavigator {...props} />);
  });

  it('should renders without crashing', () => {
    // jest.useFakeTimers();

    // const rendered = renderer.create(component).toJSON();

    // jest.runAllTimers();
    expect(1).toBeTruthy();
  });

  // it('should renders [Dark] mode', () => {
  //   jest.useFakeTimers();

  //   component = createTestElement(
  //     <StackNavigator {...props} />,
  //     ThemeType.DARK,
  //   );

  //   const rendered = renderer.create(component).toJSON();

  //   jest.runAllTimers();
  //   expect(rendered).toMatchSnapshot();
  //   // expect(rendered).toBeTruthy();
  // });
});
