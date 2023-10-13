import { ReactNode, MouseEvent } from 'react';
import { Box, Drawer, IconButton } from '@mui/material';
import { Close } from '@/common/components/icons';
import { Logo } from '@/common/components/Logo';

interface Props {
  isOpen: boolean;
  onClose: (e: MouseEvent) => void;
  children: ReactNode;
}

export const MobileMenuDrawer = ({ isOpen, onClose, children }: Props) => {
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      sx={{
        '& .MuiPaper-root': {
          width: { xs: '100%' },
          color: 'primary.c100',
          backgroundColor: 'primary.c900',
        },
      }}
    >
      <Box
        sx={{
          zIndex: 2,
          position: 'sticky',
          top: 0,
          left: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          minHeight: 52,
          marginBottom: '56px',
          padding: '0 16px',
          backgroundColor: 'secondary.c900',
        }}
      >
        <Logo variant="mobile" />
        <IconButton aria-label="close" onClick={onClose}>
          <Close />
        </IconButton>
      </Box>
      {children}
      <Box
        sx={{
          position: 'sticky',
          bottom: 0,
          left: 0,
        }}
      ></Box>
    </Drawer>
  );
};
