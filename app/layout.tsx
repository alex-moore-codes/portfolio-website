import { ReactNode } from 'react';
import './globals.css';
import { Montserrat } from 'next/font/google';

const mont = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Alex Moore | Full Stack Developer',
  description: 'The portfolio website for Full Stack Developer Alex Moore',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${mont.className} flex w-screen flex-col items-center justify-center bg-gray-50 p-20`}
      >
        <main className="space-y-11 lg:w-2/3 xl:w-3/4">{children}</main>
      </body>
    </html>
  );
}
