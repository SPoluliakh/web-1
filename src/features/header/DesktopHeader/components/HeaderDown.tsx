import { Box, Container, Typography } from '@mui/material';
import { StyledLink } from '@/common/components/styled';
import { CatalogMenu } from './CatalogMenu';
import { useCatalog } from '../hooks';

export const HeaderDown = () => {
  const [catalog] = useCatalog();

  return (
    <Box sx={{ backgroundColor: 'primary.c900', position: 'sticky', top: 0, left: 0, zIndex: 10 }}>
      <Container
        sx={{
          py: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <CatalogMenu catalog={catalog} />
        <Box>
          <StyledLink href="/" sx={{ color: 'primary.c100', mr: '32px' }}>
            <Typography variant="p2">Головна</Typography>
          </StyledLink>
          <Typography variant="p2" sx={{ color: 'primary.c100', cursor: 'pointer' }}>
            Контакти
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
