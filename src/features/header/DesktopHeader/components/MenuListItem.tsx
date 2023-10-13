import { Typography } from '@mui/material';
import { StyledLink } from '@/common/components/styled';

interface Props {
  title: string;
  href: string;
}

export const MenuListItem = ({ href, title }: Props) => (
  <StyledLink
    href={href}
    sx={{
      p: '8px 8px',
      color: 'primary.c300',
      '&:hover': {
        color: 'primary.c100',
      },
    }}
  >
    <Typography variant="p2">{title}</Typography>
  </StyledLink>
);
