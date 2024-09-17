import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Navbar from './comps/navbar';
import { Footer } from './comps/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
