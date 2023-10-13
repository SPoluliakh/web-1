import { Metadata } from 'next';
import { AboutFeature } from '@/features';

export const metadata: Metadata = {
  title: 'About | ItKava',
  description: 'ITKava description',
};

export default async function AboutPage() {
  return <AboutFeature />;
}
