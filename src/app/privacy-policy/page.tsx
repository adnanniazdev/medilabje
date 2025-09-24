import { generateMetadata, seoData } from '@/utils/seo';
import PrivacyPolicyClient from './PrivacyPolicyClient';

export const metadata = generateMetadata(seoData.privacy);

export default function PrivacyPolicyPage() {
    return <PrivacyPolicyClient />;
}