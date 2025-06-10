import { FC, useState } from 'react';
import { Input, Layout, Menu, Tabs } from 'antd';
import { motion } from 'framer-motion'; // Thêm hiệu ứng chuyển đổi

import Banner from '../organisms/Banner';
import HeaderHompage from '../organisms/HeaderHomepage';
import MainFooter from '../organisms/MainFooter';

const { Header, Content, Sider } = Layout;

const HompageTemplate: FC = () => {
  const [activeTab, setActiveTab] = useState('team');

  return (
    <Layout className='flex min-h-screen flex-col'>
      {/* Header */}
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
        className='relative border-b border-gray-100 p-10 shadow-md'
      >
        <HeaderHompage />
      </Header>

      {/* Content */}
      <Content
        style={{ padding: '0 48px', backgroundColor: 'white' }}
        className='flex-1'
      >
        <div className='border-b border-gray-300'>
          <Banner />
        </div>

        <Layout>
          {/* Sidebar bộ lọc */}
          <Sider width={250} className='border-r border-gray-200 bg-white p-4'>
            <h2 className='mb-4 text-lg font-bold'>Filters</h2>
            <Menu mode='inline'>
              <Menu.SubMenu key='category' title='Category'>
                <Menu.Item key='1'>Team</Menu.Item>
                <Menu.Item key='2'>Tournament</Menu.Item>
                <Menu.Item key='3'>Players</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key='typeSport' title='Type of sport'>
                <Menu.Item key='4'>Football</Menu.Item>
                <Menu.Item key='5'>Basketball</Menu.Item>
                <Menu.Item key='6'>Pickle Ball</Menu.Item>
                <Menu.Item key='7'>Badminton</Menu.Item>
                <Menu.Item key='8'>Billiards</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key='level' title='Level'>
                <Menu.Item key='9'>Beginner</Menu.Item>
                <Menu.Item key='10'>Intermediate</Menu.Item>
                <Menu.Item key='11'>Competent</Menu.Item>
                <Menu.Item key='12'>Amateur</Menu.Item>
                <Menu.Item key='13'>Semi-pro</Menu.Item>
                <Menu.Item key='14'>Pro</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key='classification' title='Classification'>
                <Menu.Item key='15'>Team</Menu.Item>
                <Menu.Item key='16'>Individual</Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Sider>

          <Content className='p-6'>
            <Tabs
              defaultActiveKey='team'
              onChange={setActiveTab}
              className='mb-4'
            >
              <Tabs.TabPane tab='Team' key='team' />
              <Tabs.TabPane tab='Tournament' key='tournament' />
              <Tabs.TabPane tab='Players' key='players' />
            </Tabs>

            {/* Thanh tìm kiếm và bộ lọc */}
            <div className='mb-4 flex items-center justify-between'>
              <Input placeholder='Enter the team name' className='w-10' />
            </div>

            {/* Khu vực hiển thị nội dung */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='min-h-[600px]'
            >
              {/* Content will be added here */}
            </motion.div>
          </Content>
        </Layout>
      </Content>

      {/* Footer */}
      <MainFooter />
    </Layout>
  );
};

export default HompageTemplate;