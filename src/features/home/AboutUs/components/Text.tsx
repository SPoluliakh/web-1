import { Box, Typography } from '@mui/material';
import { IAboutUs } from '../interfaces';

interface Props {
  info: IAboutUs;
}

export const Text = ({ info }: Props) => (
  <Box
    sx={{
      mt: { xs: 3, sm: 0 },
      width: { xs: '100%', sm: '536px' },
      height: { xs: '100%', sm: '160px' },
    }}
  >
    <Typography variant="h3" component="h2" color="primary.c900" sx={{ mb: { xs: 2, sm: 1 } }}>
      {info.title}
    </Typography>
    <Typography variant="p1eb" component="p" color="primary.c900" sx={{ display: 'inline' }}>
      {info.text[0]}
    </Typography>
    <Typography variant="p1" component="p" color="primary.c900" sx={{ display: 'inline' }}>
      {info.text[1]}
    </Typography>
  </Box>
);
