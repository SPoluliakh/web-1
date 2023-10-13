import { Metadata } from 'next';
import { HomeFeature } from '@/features';

export const metadata: Metadata = {
  title: 'Home | ItKava',
  description: 'ITKava description',
};

export default async function RootPage() {
  return <HomeFeature />;
}
