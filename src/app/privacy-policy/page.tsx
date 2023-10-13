import { Metadata } from 'next';
import { PrivacyPolicyFeature } from '@/features';

export const metadata: Metadata = {
  title: 'PrivacyPolicy | ItKava',
  description: 'ITKava description',
};

export default async function PrivacyPolicyPage() {
  return <PrivacyPolicyFeature />;
}
