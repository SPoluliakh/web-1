import { ListItem, Typography } from '@mui/material';
import { StyledLink } from '@/common/components/styled';
import { ChangeMenuState } from '../../interfaces';

interface Props {
  title: string;
  href?: string;
  onClickItemLink: ChangeMenuState;
}

export const MobileMenuItem = ({ title, onClickItemLink, href }: Props) => {
  return (
    <ListItem disablePadding sx={{ px: '16px' }}>
      {href ? (
        <StyledLink href={href} onClick={onClickItemLink}>
          <Typography variant="h4">{title}</Typography>
        </StyledLink>
      ) : (
        <Typography variant="h4">{title}</Typography>
      )}
    </ListItem>
  );
};
