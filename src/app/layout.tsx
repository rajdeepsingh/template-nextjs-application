import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@app/globals.css';
import { Header } from '@common/Header';
import { Footer } from '@common/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Example Next App',
  description: 'This is an example next.js app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
