import { ListItem, Typography } from '@mui/material';
import { StyledLink } from '@/common/components/styled';
import { ChangeMenuState } from '../../interfaces';

interface Props {
  title: string;
  href: string;
  onClickItemLink: ChangeMenuState;
}

export const CatalogItem = ({ title, href, onClickItemLink }: Props) => (
  <ListItem disablePadding sx={{ mb: '16px' }}>
    <StyledLink href={href} onClick={onClickItemLink}>
      <Typography variant="p2" sx={{ color: 'primary.c300' }}>
        {title}
      </Typography>
    </StyledLink>
  </ListItem>
);
