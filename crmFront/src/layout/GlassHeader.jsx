import React from 'react';
import { Layout, Input, Badge, Avatar, Button, Tooltip } from 'antd';
import {
  SearchOutlined,
  BellOutlined,
  UserOutlined,
  RobotOutlined
} from '@ant-design/icons';

const { Header } = Layout;

const GlassHeader = () => {
  return (
    <Header style={{
      padding: '0 24px',
      background: 'rgba(15, 23, 42, 0.6)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 99,
      width: '100%'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Input
          prefix={<SearchOutlined style={{ color: '#94a3b8' }} />}
          placeholder="검색..."
          bordered={false}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '8px',
            color: '#fff',
            width: '300px'
          }}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Tooltip title="AI 비서 호출">
          <Button 
            type="primary" 
            shape="circle" 
            icon={<RobotOutlined />} 
            style={{ 
              background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
              border: 'none',
              boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)'
            }}
          />
        </Tooltip>
        
        <Badge count={5} size="small" offset={[-2, 2]}>
          <Button 
            type="text" 
            icon={<BellOutlined style={{ fontSize: '20px', color: '#94a3b8' }} />} 
          />
        </Badge>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <Avatar 
            style={{ backgroundColor: '#3b82f6' }} 
            icon={<UserOutlined />} 
          />
          <span style={{ color: '#fff', fontWeight: 500 }}>관리자</span>
        </div>
      </div>
    </Header>
  );
};

export default GlassHeader;
