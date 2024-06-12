'use client';

import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          height: '15px',
          padding: '12px 20px',
          fontWeight: 500
        }
      }
    }
  }
});

export default theme;
