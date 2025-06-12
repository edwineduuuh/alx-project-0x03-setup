import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { LayoutProps } from '@/interface';


export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;