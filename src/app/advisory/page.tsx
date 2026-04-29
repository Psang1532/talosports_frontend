// src/app/advisory/page.tsx

import AdvisoryHero      from '@/components/advisory/AdvisoryHero';
import AdvisoryServices  from '@/components/advisory/AdvisoryServices';
import AdvisoryProcess   from '@/components/advisory/AdvisoryProcess';
import AdvisoryImpact    from '@/components/advisory/AdvisoryImpact';
import AdvisoryCtaBanner from '@/components/advisory/AdvisoryCtaBanner';

export const metadata = {
  title: 'Advisory & Commercial Studio | TALO',
  description:
    'TALO Advisory and Commercial Studio — helping rights holders, brands, investors and institutions unlock value and drive commercial growth.',
};

export default function AdvisoryPage() {
  return (
    <main className="adv-page">
      <AdvisoryHero />
      <AdvisoryServices />
      <AdvisoryProcess />
      <AdvisoryImpact />
      <AdvisoryCtaBanner />
    </main>
  );
}
