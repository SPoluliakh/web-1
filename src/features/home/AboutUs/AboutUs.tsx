import Image from 'next/image';
import { Box, Container } from '@mui/material';
import aboutUsImg from 'public/images/aboutUs/about-us.png';
import { Text } from './components';
import { useSize, useText } from './hooks';

export const AboutUs = () => {
  const { width, height } = useSize();
  const info = useText();

  return (
    <Box
      sx={{
        py: { xs: '56px', sm: '104px' },
        backgroundColor: 'primary.c100',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text info={info} />

        <Image src={aboutUsImg} alt="warehouse" width={width} height={height} />
      </Container>
    </Box>
  );
};
