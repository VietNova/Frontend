import { FC } from 'react';
import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from '@ant-design/icons';

const MainFooter: FC = () => (
  <div className='bg-[#728581] px-6 py-10 text-white'>
    <div className='mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-4'>
      <div>
        <h2 className='text-2xl font-bold'>Community Sport</h2>
        <p className='mt-2 text-sm text-gray-300'>
          Transforming Homes. One Piece at a Time
        </p>
      </div>

      {/* Navigation Links */}
      <div>
        <h3 className='text-lg font-semibold'>Sports</h3>
        <ul className='space-y-2 text-sm text-gray-300'>
          <li>Football</li>
          <li>Basketball</li>
          <li>Badminton</li>
          <li>Billiard</li>
          <li>Pickle Ball</li>
          <li>Volleyball</li>
        </ul>
      </div>

      <div>
        <h3 className='text-lg font-semibold'>Teams</h3>
        <ul className='space-y-2 text-sm text-gray-300'>
          <li>About Us</li>
          <li>Careers</li>
          <li>News</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <h3 className='text-lg font-semibold'>Resources</h3>
        <ul className='space-y-2 text-sm text-gray-300'>
          <li>Blog</li>
          <li>Newsletter</li>
          <li>Help Centre</li>
          <li>Support</li>
        </ul>
      </div>
    </div>

    {/* Social & Copyright */}
    <div className='mt-6 flex flex-col items-center justify-between border-t border-gray-500 pt-4 md:flex-row'>
      <p className='text-sm text-gray-300'>
        © 2023 CCSP. All rights reserved.
      </p>
      <div className='flex space-x-4'>
        <TwitterOutlined className='cursor-pointer text-xl text-white hover:text-gray-400' />
        <LinkedinOutlined className='cursor-pointer text-xl text-white hover:text-gray-400' />
        <FacebookOutlined className='cursor-pointer text-xl text-white hover:text-gray-400' />
      </div>
    </div>
  </div>
);

export default MainFooter;