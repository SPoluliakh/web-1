import { Metadata } from 'next';
import { ContactsFeature } from '@/features';

export const metadata: Metadata = {
  title: 'Contacts | ItKava',
  description: 'ITKava description',
};

export default async function ContactsPage() {
  return <ContactsFeature />;
}
