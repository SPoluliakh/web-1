import { Menu, MenuItem } from '@mui/material';
import { MenuListItem } from './MenuListItem';
import { useMenuList } from '../hooks';
import { ICatalog } from '../../interfaces';
import { MenuBtn } from './MenuBtn';

interface Props {
  catalog: ICatalog;
}

export const CatalogMenu = ({ catalog: { title, items } }: Props) => {
  const { handleClick, handleClose, isOpen, anchorEl } = useMenuList();
  return (
    <>
      <MenuBtn title={title} handleClick={handleClick} isOpen={isOpen} />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
          top: '16px',
          left: '-60px',
          '& .MuiPaper-root': {
            p: '16px',
            backgroundColor: 'primary.c800',
            borderRadius: '4px',
          },
          '& .MuiList-root': {
            p: 0,
          },
        }}
      >
        {items.map(({ id, title, href }) => (
          <MenuItem
            key={id}
            onClick={handleClose}
            sx={{
              width: '100%',
              p: 0,
            }}
          >
            <MenuListItem href={`/${href}`} title={title} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
