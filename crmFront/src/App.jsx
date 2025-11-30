import React from 'react';
import { ConfigProvider, Layout, theme } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlassSidebar from './layout/GlassSidebar';
import GlassHeader from './layout/GlassHeader';
import Dashboard from './pages/Dashboard';

import Customers from './pages/Customers';
import Orders from './pages/Orders';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import CtiWidget from './components/CtiWidget';

const { Content } = Layout;
const { darkAlgorithm } = theme;

const App = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: darkAlgorithm,
        token: {
          colorPrimary: '#d6d3d1', // Warm Salt Beige
          colorBgContainer: 'transparent',
          colorBgLayout: 'transparent',
          fontFamily: 'Pretendard, sans-serif',
          colorTextBase: '#f8fafc',
        },
        components: {
          Layout: {
            bodyBg: 'transparent',
            headerBg: 'transparent',
            siderBg: 'transparent',
          },
          Menu: {
            itemBg: 'transparent',
            subMenuItemBg: 'transparent',
          },
        },
      }}
    >
      <Router>
        <Layout style={{ minHeight: '100vh', background: 'transparent' }}>
          <GlassSidebar />
          <Layout style={{ marginLeft: 250, background: 'transparent' }}>
            <GlassHeader />
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<div style={{color: 'white', padding: 20}}>준비 중입니다...</div>} />
              </Routes>
            </Content>
            <CtiWidget />
          </Layout>
        </Layout>
      </Router>
    </ConfigProvider>
  );
};

export default App;
