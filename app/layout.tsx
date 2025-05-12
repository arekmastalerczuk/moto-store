import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import Navbar from '@/components/navbar/Navbar';
import Container from '@/components/global/Container';

type Props = {
  readonly children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'Armast Store',
  description: 'Happiness is not in money, but in shopping. Enjoy!',
  keywords: ['store', 'shopping', 'armast'],
};

const lato = Lato({
  subsets: ['latin-ext'],
  weight: ['100', '400', '700'],
});

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={lato.className}>
        <Providers>
          <Navbar />
          <Container className='pt-16'>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
