import {
  Accordion,
  AccordionDetails,
  List,
  AccordionSummary,
  Typography,
  ListItem,
} from '@mui/material';
import { ArrowDown } from '@/common/components/icons/ArrowDown';
import { ICatalogItems, ChangeMenuState } from '../../interfaces';
import { CatalogItem } from './CatalogItem';

interface Props {
  title: string;
  items: ICatalogItems[];
  onClickItemLink: ChangeMenuState;
}

export const MobileMenuListItem = ({ title, items, onClickItemLink }: Props) => (
  <ListItem disablePadding>
    <Accordion
      sx={{
        pr: '12px',
        borderBottom: '1px solid ',
        borderColor: 'primary.c300',
        '& .MuiAccordionSummary-root, & .MuiAccordionSummary-root.Mui-expanded': {
          minHeight: '48px',
        },
        '& .MuiAccordionSummary-content': {
          my: '12px',
        },
        '& .MuiAccordionDetails-root': {
          pt: '5px',
          mb: '24px',
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ArrowDown color={'#fff'} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          maxHeight: '48px',
        }}
      >
        <Typography variant="h4">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          pt: '10px',
          pb: 0,
        }}
      >
        <List disablePadding>
          {items.map(({ href, id, title }) => (
            <CatalogItem key={id} title={title} href={href} onClickItemLink={onClickItemLink} />
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  </ListItem>
);
