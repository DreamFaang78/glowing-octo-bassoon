import PrescriptionKitPage, { generateMetadata as kitMetadata } from './prescription/[slug]/page';

export async function generateMetadata() {
  return kitMetadata({ params: Promise.resolve({ slug: 'mens-wellness-kit' }) });
}

export default async function Home() {
  return <PrescriptionKitPage params={Promise.resolve({ slug: 'mens-wellness-kit' })} />;
}
