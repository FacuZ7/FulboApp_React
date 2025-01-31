import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { blueWhiteTheme } from './blueWhiteTheme';

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ blueWhiteTheme }>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      
      { children }
    </ThemeProvider>
  )
}