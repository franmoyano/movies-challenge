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
        root: {
          height: '40px',
          fontWeight: 400,
          fontSize: '13px'
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '5px'
        },
        outlined: {
          color: '#000'
        }
      }
    }
  }
});

export default theme;
