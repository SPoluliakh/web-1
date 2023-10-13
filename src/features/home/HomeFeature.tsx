'use client';
import { Stack, ThemeProvider } from '@mui/material';
import { theme } from '@/common/theme';
import { AboutUs } from './AboutUs';
import { Banner } from './Banner';

export const HomeFeature = () => (
  <ThemeProvider theme={theme}>
    <Stack>
      <Banner />
      <AboutUs />
    </Stack>
  </ThemeProvider>
);
