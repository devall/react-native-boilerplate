import { css } from 'styled-components/native';

export default {
  heading: {
    h1: css`
      font-family: ${p => p.theme.fonts.bold};
      font-size: ${p => p.theme.fontSizes.size_22};
      line-height: ${p => p.theme.lineHeights.height_24};
      color: ${p => p.theme.colors.primary};
    `,
  },
};
