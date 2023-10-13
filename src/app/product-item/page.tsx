import { Metadata } from 'next';
import { ProductItemFeature } from '@/features';

export const metadata: Metadata = {
  title: 'Product item | ItKava',
  description: 'ITKava description',
};

export default async function ProductItemPage() {
  return <ProductItemFeature />;
}
