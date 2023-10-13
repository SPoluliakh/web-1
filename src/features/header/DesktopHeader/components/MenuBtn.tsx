import { Button, Typography } from '@mui/material';
import { MouseEvent } from 'react';
import { ArrowDown } from '@/common/components/icons/ArrowDown';

interface Props {
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  isOpen: boolean;
  title: string;
}

export const MenuBtn = ({ handleClick, isOpen, title }: Props) => (
  <Button
    aria-controls={isOpen ? 'basic-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={isOpen ? 'true' : undefined}
    variant="text"
    disableElevation
    onClick={handleClick}
    endIcon={<ArrowDown color={'#000'} />}
    sx={{
      backgroundColor: 'accent.c900',
      color: 'primary.c900',
      border: 'none',
      '&:hover': { backgroundColor: 'accent.c800,' },
    }}
  >
    <Typography variant="p2">{title}</Typography>
  </Button>
);
