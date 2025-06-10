import React from 'react';

import Logo from '../atoms/Logo.tsx';
import Navigation from '../molecules/Navigation';

const HeaderHomepage: React.FC = () => (
  <div className='flex w-200 items-center justify-between border-none pr-5 pl-5'>
    <Logo />
    <Navigation />
    <button className='rounded-md bg-blue-500 px-4 py-3 text-sm text-white hover:bg-blue-600'>
      Login
    </button>
  </div>
);

export default HeaderHomepage;