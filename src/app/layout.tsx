import type { ReactNode } from 'react';
import './globals.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter, Zilla_Slab } from 'next/font/google';

type Props = { children: ReactNode };

const inter = Inter({ subsets: ['latin'] });
const zillaSlab = Zilla_Slab({
  subsets: ['latin'],
  weight: ['400', '500', '600']
});

export const metadata: Metadata = {
  title: 'Formhuby',
  description: 'Form builder application',
  authors: [
    {
      name: 'Kain Nhantumbo',
      url: 'codenut-dev.vercel.app'
    }
  ],
  category: 'web application',
  keywords: ['form builder', 'builder', 'form'],
  generator: 'React.js and Next.js'
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body className={clsx(inter.className, zillaSlab.className)}>
        {children}
      </body>
    </html>
  );
}
