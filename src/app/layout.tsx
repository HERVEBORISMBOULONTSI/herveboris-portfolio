import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Hervé Boris | Ingénieur Télécoms · Full Stack · Cloud & DevOps',
  description: 'Portfolio professionnel de Hervé Boris : ingénierie télécoms, développement full stack, Cloud, DevOps et conseil digital.',
  metadataBase: new URL('https://herveboris.com'),
  openGraph: { title: 'Hervé Boris — Engineer & Digital Consultant', description: 'Building digital experiences and reliable solutions.', type: 'website' }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
