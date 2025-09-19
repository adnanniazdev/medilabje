import { generateMetadata, seoData } from '@/utils/seo';
import CorporateInformationClient from './CorporateInformationClient';

export const metadata = generateMetadata(seoData.corporate);

export default function CorporateInformationPage() {
    return <CorporateInformationClient />;
}