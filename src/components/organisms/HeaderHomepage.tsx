import React from 'react';

import Logo from '../atoms/Logo.tsx';
import Navigation from '../molecules/Navigation';

const HeaderHomepage: React.FC = () => (
  <header className='fixed top-0 left-0 right-0 z-50 flex h-20 w-full items-center justify-between bg-white px-8 shadow-sm transition-all duration-300'>
    <div className='flex items-center'>
      <Logo />
    </div>
    <div className='flex-1 px-8'>
      <Navigation />
    </div>
    <div className='flex items-center gap-4'>
      <button className='rounded-full border border-blue-500 bg-transparent px-6 py-2 text-sm font-medium text-blue-500 transition-colors hover:bg-blue-50'>
        Sign Up
      </button>
      <button className='rounded-full bg-blue-500 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600'>
        Login
      </button>
    </div>
  </header>
);

export default HeaderHomepage;