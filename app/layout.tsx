import type { Metadata } from 'next';
import './globals.css';
import { Lato } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import Container from '@/components/global/Container';

type Props = {
  children: React.ReactNode;
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
    <html lang='en'>
      <body className={lato.className}>
        <Navbar />
        <Container className='pt-16'>{children}</Container>
      </body>
    </html>
  );
}
