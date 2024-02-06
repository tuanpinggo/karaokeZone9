import { Roboto_Slab } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

export const robotoSlab = Roboto_Slab({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#F2B879'
    },
    secondary: {
      main: '#C19D60',
    },
    error: {
      main: '#CF0026',
    },
    white: {
      main: '#fff'
    },
    black:{
      main: '#222'
    },
    gray:{
      main: '#888'
    },
  },
  typography: {
    fontFamily: robotoSlab.style.fontFamily,
    h1:{
      fontSize: '2rem',
      color: '#F80759',
      fontWeight: 700,
      lineHeight: 1.5
    },
    h2:{
      fontSize: '1.6rem',
      color: '#F80759',
      fontWeight: 700,
      lineHeight: 1.5
    },
    h3:{
      fontSize: '1.4rem',
      color: '#F80759',
      fontWeight: 700,
      lineHeight: 1.5
    },
    h4:{
      fontSize: '1.2rem',
      color: '#F80759',
      fontWeight: 700,
      lineHeight: 1.5
    },
    h5:{
      fontSize: '1rem',
      color: '#F80759',
      fontWeight: 700,
      lineHeight: 1.5
    },
    h6:{
      fontSize: '1rem',
      color: '#F80759',
      fontWeight: 500,
      lineHeight: 1.5
    },
    body1:{
      fontSize: '1rem',
      color: '#333',
      fontWeight: 400,
      lineHeight: 1.5
    },
    body2:{
      fontSize: '0.9rem',
      color: '#333',
      fontWeight: 300,
      lineHeight: 1.5
    }
  },
});

export default theme;