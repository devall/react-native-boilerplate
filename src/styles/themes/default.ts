import { DefaultTheme } from 'styled-components';

import { fontScale, horizontalScale } from '../mixins';

const defaultTheme: DefaultTheme = {
  colors: {
    primary: '#469925',
    secondary: '#FDCA00',
    dark: '#30373C',
    gray: '#C9C9C9',
  },
  fonts: {
    regular: 'Roboto-Regular',
    medium: 'Roboto-Medium',
    bold: 'Roboto-Bold',
  },
  fontSizes: {
    size_22: fontScale(22),
    size_18: fontScale(18),
    size_16: fontScale(16),
  },
  lineHeights: {
    height_24: fontScale(24),
    height_20: fontScale(20),
    height_16: fontScale(16),
  },
  spacing: {
    SM: horizontalScale(10),
    MD: horizontalScale(20),
    LG: horizontalScale(30),
    XL: horizontalScale(40),
  },
};

export default defaultTheme;
