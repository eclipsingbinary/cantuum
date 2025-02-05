import '@emotion/react'

export const theme = {
  colors: {
    background: '#000000',
    primary: '#ffffff',
    secondary: '#666666',
    accent: '#ff0000', // We can adjust this color later
  },
  fonts: {
    spincycle: '"Spincycle", sans-serif', // We'll need to import this font
    joystream: 'system-ui', // Placeholder until we get the actual Joystream font
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  }
} as const

// Add theme type declaration
declare module '@emotion/react' {
  export interface Theme {
    colors: {
      background: string;
      primary: string;
      secondary: string;
      accent: string;
    };
    fonts: {
      spincycle: string;
      joystream: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
  }
}

export type Theme = typeof theme; 