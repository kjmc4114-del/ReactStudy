import React from 'react';
import { Card, Typography } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const StatCard = ({ title, value, trend, trendValue, icon, color }) => {
  const isPositive = trend === 'up';
  
  return (
    <Card className="glass-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <Text style={{ color: '#94a3b8', fontSize: '14px' }}>{title}</Text>
          <Title level={2} style={{ color: '#fff', margin: '8px 0' }}>
            {value}
          </Title>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ 
              color: isPositive ? '#4ade80' : '#f87171',
              display: 'flex',
              alignItems: 'center',
              fontSize: '12px',
              fontWeight: 600
            }}>
              {isPositive ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
              {trendValue}
            </span>
            <Text style={{ color: '#64748b', fontSize: '12px' }}>지난달 대비</Text>
          </div>
        </div>
        <div style={{ 
          width: '48px', 
          height: '48px', 
          borderRadius: '12px', 
          background: `rgba(${color}, 0.1)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: `rgb(${color})`,
          fontSize: '24px'
        }}>
          {icon}
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
