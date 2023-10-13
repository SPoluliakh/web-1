import { Box, Container, IconButton } from '@mui/material';
import { Logo } from '@/common/components/Logo';
import { BurgerMenu } from '@/common/components/icons';
import { useMobileMenu } from './hooks';
import { CatalogDrawer, MobileMenuDrawer } from './components';

export const MobileHeader = () => {
  const { isOpen, onClose, onOpen } = useMobileMenu();
  return (
    <Box sx={{ py: 2, backgroundColor: 'primary.c900' }}>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Logo variant="mobile" />
        <IconButton onClick={onOpen}>
          <BurgerMenu />
        </IconButton>
        <MobileMenuDrawer isOpen={isOpen} onClose={onClose}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '100vw',
            }}
          >
            <CatalogDrawer onClickItemLink={onClose} />
          </Box>
        </MobileMenuDrawer>
      </Container>
    </Box>
  );
};
