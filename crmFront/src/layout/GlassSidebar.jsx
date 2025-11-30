import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  BarChartOutlined,
  SettingOutlined,
  TeamOutlined,
  RobotOutlined
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const { Sider } = Layout;

const GlassSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: '대시보드',
    },
    {
      key: '/customers',
      icon: <TeamOutlined />,
      label: '고객 관리',
    },
    {
      key: '/orders',
      icon: <UserOutlined />, // Using UserOutlined as placeholder or ShoppingCartOutlined if imported
      label: '주문 관리',
    },
    {
      key: '/analytics',
      icon: <BarChartOutlined />,
      label: '분석',
    },
    {
      key: '/settings',
      icon: <SettingOutlined />,
      label: '설정',
    },
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={250}
      style={{
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 100,
      }}
    >
      <div style={{ 
        height: '64px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <h2 style={{ 
          color: '#fff', 
          margin: 0, 
          fontSize: collapsed ? '16px' : '20px',
          fontWeight: 'bold',
          background: 'linear-gradient(to right, #6366f1, #a855f7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          {collapsed ? 'CRM' : 'Future CRM'}
        </h2>
      </div>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        onClick={({ key }) => navigate(key)}
        style={{ marginTop: '20px' }}
      />
    </Sider>
  );
};

export default GlassSidebar;
