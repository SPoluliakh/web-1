import Image from 'next/image';
import { Box, Container } from '@mui/material';
import { useText } from './hooks';
import { BannerText } from './components';
import { useMedia } from '@/common/hooks';
import banner from 'public/images/banner/banner.png';

export const Banner = () => {
  const bannerText = useText();
  const { isSmUp } = useMedia();
  return (
    <Box
      sx={{
        pt: { xs: '134px', sm: 0 },
        pb: { xs: '54px', sm: '32px' },
        backgroundColor: 'primary.c900',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: { xs: 'flex-start', sm: 'center' },
        }}
      >
        <BannerText text={bannerText} />
        {isSmUp && <Image src={banner} alt="warehouse" width={818} height={828} />}
      </Container>
    </Box>
  );
};
