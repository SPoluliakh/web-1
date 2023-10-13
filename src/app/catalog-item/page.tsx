import { Metadata } from 'next';
import { CatalogItemFeature } from '@/features';

export const metadata: Metadata = {
  title: 'Catalog item | ItKava',
  description: 'ITKava description',
};

export default async function CatalogItemPage() {
  return <CatalogItemFeature />;
}
