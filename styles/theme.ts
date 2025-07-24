// Material Design 3 Theme Tokens for styled-components
import { DefaultTheme } from 'styled-components';
import "styled-components";

type ColorType = {
  primary: { main: string; container: string };
  secondary: { main: string; container: string };
  tertiary: { main: string; container: string };
  neutral: { main: string; container: string };
  surface: { dim: string; bright: string };
  background: string;
  error: { main: string; container: string };
};

type TypographyType = {
  displayLarge: { fontSize: string; lineHeight: string; fontWeight: number };
  displayMedium: { fontSize: string; lineHeight: string; fontWeight: number };
  displaySmall: { fontSize: string; lineHeight: string; fontWeight: number };
  headlineLarge: { fontSize: string; lineHeight: string; fontWeight: number };
  headlineMedium: { fontSize: string; lineHeight: string; fontWeight: number };
  headlineSmall: { fontSize: string; lineHeight: string; fontWeight: number };
  titleLarge: { fontSize: string; lineHeight: string; fontWeight: number };
  titleMedium: { fontSize: string; lineHeight: string; fontWeight: number };
  titleSmall: { fontSize: string; lineHeight: string; fontWeight: number };
  bodyLarge: { fontSize: string; lineHeight: string; fontWeight: number };
  bodyMedium: { fontSize: string; lineHeight: string; fontWeight: number };
  bodySmall: { fontSize: string; lineHeight: string; fontWeight: number };
  labelLarge: { fontSize: string; lineHeight: string; fontWeight: number };
  labelMedium: { fontSize: string; lineHeight: string; fontWeight: number };
  labelSmall: { fontSize: string; lineHeight: string; fontWeight: number };
};

type ElevationType = {
  level0: string;
  level1: string;
  level2: string;
  level3: string;
  level4: string;
  level5: string;
};

type BreakpointsType = {
  mobile: string;
  desktop: string;
};

const theme: DefaultTheme = {
  colors: {
    primary: { main: '#8020cfff', container: '#EADDFF' },
    secondary: { main: '#625B71', container: '#E8DEF8' },
    tertiary: { main: '#7D5260', container: '#FFD8E4' },
    neutral: { main: '#E6E1E5', container: '#23232B' },
    surface: { dim: '#181820', bright: '#23232B' },
    background: '#14141A',
    error: { main: '#B3261E', container: '#F9DEDC' },
  },
  typography: {
    displayLarge: { fontSize: '57px', lineHeight: '64px', fontWeight: 400 },
    displayMedium: { fontSize: '45px', lineHeight: '52px', fontWeight: 400 },
    displaySmall: { fontSize: '36px', lineHeight: '44px', fontWeight: 400 },
    headlineLarge: { fontSize: '32px', lineHeight: '40px', fontWeight: 400 },
    headlineMedium: { fontSize: '28px', lineHeight: '36px', fontWeight: 400 },
    headlineSmall: { fontSize: '24px', lineHeight: '32px', fontWeight: 400 },
    titleLarge: { fontSize: '22px', lineHeight: '28px', fontWeight: 400 },
    titleMedium: { fontSize: '16px', lineHeight: '24px', fontWeight: 500 },
    titleSmall: { fontSize: '14px', lineHeight: '20px', fontWeight: 500 },
    bodyLarge: { fontSize: '16px', lineHeight: '24px', fontWeight: 400 },
    bodyMedium: { fontSize: '14px', lineHeight: '20px', fontWeight: 400 },
    bodySmall: { fontSize: '12px', lineHeight: '16px', fontWeight: 400 },
    labelLarge: { fontSize: '14px', lineHeight: '20px', fontWeight: 500 },
    labelMedium: { fontSize: '12px', lineHeight: '16px', fontWeight: 500 },
    labelSmall: { fontSize: '11px', lineHeight: '16px', fontWeight: 500 },
  },
  elevation: {
    level0: 'none',
    level1: '0px 1px 2px rgba(0,0,0,0.6), 0px 1px 3px 1px rgba(0,0,0,0.3)',
    level2: '0px 1px 2px rgba(0,0,0,0.7), 0px 2px 6px 2px rgba(0,0,0,0.3)',
    level3: '0px 4px 8px rgba(0,0,0,0.7), 0px 8px 24px 2px rgba(0,0,0,0.3)',
    level4: '0px 8px 16px rgba(0,0,0,0.7), 0px 16px 32px 4px rgba(0,0,0,0.3)',
    level5: '0px 16px 24px rgba(0,0,0,0.7), 0px 24px 40px 6px rgba(0,0,0,0.3)',
  },
  spacing: (factor: number) => `${4 * factor}px`, // 4dp base unit
  breakpoints: {
    mobile: '0px',
    desktop: '900px',
  },
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorType;
    typography: TypographyType;
    elevation: ElevationType;
    spacing: (factor: number) => string;
    breakpoints: BreakpointsType;
  }
}

export default theme; 