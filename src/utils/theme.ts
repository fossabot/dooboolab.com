export enum ThemeType {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export type Colors = {
  success: string;
  darkGray: string;
  mediumGray: string;
  lightGray: string;
};

export const colors: Colors = {
  success: '#00BA90',
  darkGray: '#00000070',
  mediumGray: '#00000030',
  lightGray: '#CFCED0',
};

export const light = {
  background: '#FFFFFF',
  paper: '#EAEBF4',
  link: '#393D7A',
  heading: '#393D7A',
  titleText: '#000000',
  subText: '#404040',
  text: '#000000',
  textContrast: '#D3D8E8',
  disabled: colors.mediumGray,
};

export type Theme = typeof light;

export const dark = {
  background: '#232323',
  paper: '#EAEBF4',
  link: '#E0E0E0',
  heading: '#FFFFFF',
  titleText: '#8A96DC',
  subText: '#D3D8E8',
  text: '#D3D8E8',
  textContrast: '#000000',
  disabled: colors.mediumGray,
};

export const theme = {
  light,
  dark,
};
