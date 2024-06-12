import { createGlobalStyle } from 'styled-components';
import { ButtonVariants, Theme } from '@aplinkosministerija/design-system';

const COLORS = {
  primary: '#2A4871',
  secondary: '#1469AA',
  tertiary: '#7A7E9F',
  danger: '#FE5B78',
  success: '#027A48',
};

export const theme: Theme = {
  colors: {
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    tertiary: COLORS.tertiary,
    transparent: 'transparent',
    danger: COLORS.danger,
    success: COLORS.success,
    light: {
      success: '#F2FEF0',
      danger: '#FEF2F2',
    },
    buttons: {
      [ButtonVariants.PRIMARY]: {
        background: COLORS.primary,
        text: 'white',
        border: 'transparent',
        hover: COLORS.primary,
      },
      [ButtonVariants.SECONDARY]: {
        background: COLORS.secondary,
        text: 'white',
        border: 'transparent',
        hover: `${COLORS.secondary}E6`,
      },
      [ButtonVariants.TERTIARY]: {
        background: COLORS.tertiary,
        text: 'white',
        border: 'transparent',
        hover: `${COLORS.tertiary}E6`,
      },
      [ButtonVariants.DANGER]: {
        background: COLORS.danger,
        text: 'white',
        border: 'transparent',
        hover: `${COLORS.danger}E6`,
      },
      [ButtonVariants.SUCCESS]: {
        background: COLORS.success,
        text: 'white',
        border: 'transparent',
        hover: `${COLORS.success}E6`,
      },
      [ButtonVariants.TRANSPARENT]: {
        background: 'transparent',
        text: '#101010',
        border: 'transparent',
        hover: 'transparent',
      },
    },
    buttonBackground: {
      primary: COLORS.primary,
      secondary: COLORS.secondary,
      tertiary: COLORS.tertiary,
      success: COLORS.success,
      danger: COLORS.danger,
      transparent: 'transparent',
    },
    buttonText: {
      primary: 'white',
      secondary: 'white',
      tertiary: 'white',
      danger: 'white',
      success: 'white',
      transparent: '#101010',
    },
    hover: {
      primary: COLORS.primary,
      secondary: COLORS.secondary,
      tertiary: COLORS.tertiary,
      danger: COLORS.danger,
      success: COLORS.success,
      transparent: '#F3F3F7',
    },
    text: {
      primary: COLORS.primary,
      secondary: '#525252',
      tertiary: '#4B5565',
      label: '#56606C',
      error: COLORS.danger,
      heading: '#182639',
    },
    cardBackground: {
      primary: '#f7f7f7',
      success: '#eafbf6',
    },
    border: '#CBD1D6',
    input: '#FFFFFF',
    shadow: '#121a5529',
    grey: '#F4F7FB',
  },
  radius: {
    buttons: 0.4,
    fields: 0.4,
  },
  height: {
    buttons: 5.6,
    fields: 5.6,
  },
  fontSize: {
    buttons: 1.6,
    fields: 1.6,
  },
};

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
 *{
  box-sizing: border-box;
 }

  html { 
    font-size: 62.5%; 
    width: 100vw;
    height: 100vh;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${theme.colors.grey};
    font-size: 1.6rem;
    width: 100vw;
    height: 100vh;
    overflow: auto;
  } 
  h1 {
    font-size: 3.2rem;
    color: ${theme.colors.text.primary};
  }
  a {
    text-decoration: none;
  }
  button {
    outline: none;
    text-decoration: none;
    display: block;
    border: none;
    background-color: transparent;
  }

  textarea {
    font-size: 1.6rem;
  }

  input[type="text"], textarea { 
    background: ${theme.colors.grey};
    border: 0;
  }
`;

export const device = {
  mobileS: `(max-width: 320px)`,
  mobileM: `(max-width: 425px)`,
  mobileL: `(max-width: 788px)`,
  mobileXL: `(max-width: 1025px)`,
};
