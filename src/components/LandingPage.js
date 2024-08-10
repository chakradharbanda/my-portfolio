import * as React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from './AppAppBar';
import App from '../App';
import Features from './Features';
import Footer from './Footer';
import Pricing from './Pricing';
import Hero from './Hero';
import Testimonials from './Testimonials';
import LogoCollection from './LogoCollection';
import AchievementsAndHonors from './AchievementsAndHonors';

export default function LandingPage() {
  const [mode, setMode] = React.useState('light');
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} /> 
      <Hero/>
      <LogoCollection/>
      <Features/>  
      <AchievementsAndHonors/>
      <Footer />
    </ThemeProvider>
  );
}