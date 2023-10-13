import { Box, Container, Typography } from '@mui/material';
import { Logo } from '@/common/components/Logo';

export const HeaderUp = () => (
  <Box sx={{ backgroundColor: 'primary.c700' }}>
    <Container
      sx={{
        py: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Logo variant="desktop" />
      <Box>
        <Typography component="p" variant="p1" sx={{ color: 'primary.c300' }}>
          +38 (096)-30-84-545
        </Typography>
        <Typography component="p" variant="p1" sx={{ color: 'primary.c300' }}>
          +38 (050)-30-84-545
        </Typography>
      </Box>
    </Container>
  </Box>
);
