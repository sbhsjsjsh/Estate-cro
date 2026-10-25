import type {Metadata} from 'next';
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Estate CRO | Private Real Estate Sales Toolkit',
  description: 'Close deals faster with Estate CRO. High-converting property pages, EMI calculators, and professional branding for Indian Realtors.',
  openGraph: {
    title: 'Estate CRO',
    description: 'Your Private Real Estate Sales System.',
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased text-slate-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
