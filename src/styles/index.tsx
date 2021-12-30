import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { FC } from 'react';
import AppFonts from './fonts';
const GlobalStyles: FC = () => (
  <>
    <AppFonts />
    <Global
      styles={css`
        ${emotionNormalize}
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
        }
      `}
    />
  </>
);

export default GlobalStyles;
