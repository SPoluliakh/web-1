import List from '@mui/material/List';
import { MobileMenuListItem } from './MobileMenuListItem';
import { useCatalog } from '../../DesktopHeader/hooks';
import { MobileMenuItem } from './MobileMenuItem';
import { ChangeMenuState } from '../../interfaces';

interface Props {
  onClickItemLink: ChangeMenuState;
}

export const CatalogDrawer = ({ onClickItemLink }: Props) => {
  const menuItems = useCatalog();

  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '17px',
        mb: 'auto',
        pb: '40px',
      }}
    >
      {menuItems.map(({ id, type, items, title, href }) =>
        type === 'list' ? (
          <MobileMenuListItem
            key={id}
            title={title}
            items={items}
            onClickItemLink={onClickItemLink}
          />
        ) : (
          <MobileMenuItem key={id} href={href} title={title} onClickItemLink={onClickItemLink} />
        )
      )}
    </List>
  );
};
