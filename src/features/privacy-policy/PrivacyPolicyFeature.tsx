'use client';
import { Container, Stack, ThemeProvider, Typography } from '@mui/material';
import { theme } from '@/common/theme';

export const PrivacyPolicyFeature = () => (
  <ThemeProvider theme={theme}>
    <Stack gap={{ xs: 8, sm: 16 }}>
      <Container>
        <Typography>PrivacyPolicyFeature</Typography>
      </Container>
    </Stack>
  </ThemeProvider>
);
