import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Hervé Boris | Telecommunications Engineer · Full Stack · Cloud & DevOps',
  description: 'Professional portfolio of Hervé Boris: telecommunications engineering, full stack development, Cloud, DevOps and digital consulting.',
  alternates: { canonical: 'https://herveboris.com/en' },
};
export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
