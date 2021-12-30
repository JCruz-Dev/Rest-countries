import { css, Global } from '@emotion/react';
import { FC } from 'react';
const AppFonts: FC = () => {
  return (
    <Global
      styles={css`
        /* cyrillic-ext */
        @font-face {
          font-family: 'Nunito Sans';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/nunitosans/v8/pe03MImSLYBIv1o4X1M8cc8WAc5gU1ECVZl_86Y.woff2)
            format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
            U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'Nunito Sans';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/nunitosans/v8/pe03MImSLYBIv1o4X1M8cc8WAc5pU1ECVZl_86Y.woff2)
            format('woff2');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Nunito Sans';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/nunitosans/v8/pe03MImSLYBIv1o4X1M8cc8WAc5iU1ECVZl_86Y.woff2)
            format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
            U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Nunito Sans';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/nunitosans/v8/pe03MImSLYBIv1o4X1M8cc8WAc5jU1ECVZl_86Y.woff2)
            format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Nunito Sans';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/nunitosans/v8/pe03MImSLYBIv1o4X1M8cc8WAc5tU1ECVZl_.woff2)
            format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
          font-family: 'Nunito Sans';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/nunitosans/v8/pe03MImSLYBIv1o4X1M8cc9iB85gU1ECVZl_86Y.woff2)
            format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
            U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'Nunito Sans';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/nunitosans/v8/pe03MImSLYBIv1o4X1M8cc9iB85pU1ECVZl_86Y.woff2)
            format('woff2');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Nunito Sans';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/nunitosans/v8/pe03MImSLYBIv1o4X1M8cc9iB85iU1ECVZl_86Y.woff2)
            format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
            U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Nunito Sans';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/nunitosans/v8/pe03MImSLYBIv1o4X1M8cc9iB85jU1ECVZl_86Y.woff2)
            format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Nunito Sans';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/nunitosans/v8/pe03MImSLYBIv1o4X1M8cc9iB85tU1ECVZl_.woff2)
            format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
          font-family: 'Nunito Sans';
          font-style: normal;
          font-weight: 800;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/nunitosans/v8/pe03MImSLYBIv1o4X1M8cc8aBc5gU1ECVZl_86Y.woff2)
            format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
            U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'Nunito Sans';
          font-style: normal;
          font-weight: 800;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/nunitosans/v8/pe03MImSLYBIv1o4X1M8cc8aBc5pU1ECVZl_86Y.woff2)
            format('woff2');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Nunito Sans';
          font-style: normal;
          font-weight: 800;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/nunitosans/v8/pe03MImSLYBIv1o4X1M8cc8aBc5iU1ECVZl_86Y.woff2)
            format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
            U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Nunito Sans';
          font-style: normal;
          font-weight: 800;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/nunitosans/v8/pe03MImSLYBIv1o4X1M8cc8aBc5jU1ECVZl_86Y.woff2)
            format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Nunito Sans';
          font-style: normal;
          font-weight: 800;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/nunitosans/v8/pe03MImSLYBIv1o4X1M8cc8aBc5tU1ECVZl_.woff2)
            format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* devanagari */
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 200;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLFj_Z11lFd2JQEl8qw.woff2)
            format('woff2');
          unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D,
            U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 200;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLFj_Z1JlFd2JQEl8qw.woff2)
            format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 200;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLFj_Z1xlFd2JQEk.woff2)
            format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* devanagari */
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJbecnFHGPezSQ.woff2)
            format('woff2');
          unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D,
            U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJnecnFHGPezSQ.woff2)
            format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2)
            format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* devanagari */
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z11lFd2JQEl8qw.woff2)
            format('woff2');
          unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D,
            U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1JlFd2JQEl8qw.woff2)
            format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2)
            format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `}
    />
  );
};
export default AppFonts;
