import React from 'react';
import Navigation from './components/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';


function Layout() {
  
  return (
    <>
    <div className = 'flex flex-col w-full overflow-x-hidden'>
      <Navigation/>
      <Outlet/>
      <Footer/>
    </div>
    </>
  );
}

export default Layout;
