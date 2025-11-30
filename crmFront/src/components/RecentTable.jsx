import React from 'react';
import { Table, Tag, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const columns = [
  {
    title: '고객',
    dataIndex: 'customer',
    key: 'customer',
    render: (text) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Avatar icon={<UserOutlined />} style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
        <span style={{ color: '#fff' }}>{text}</span>
      </div>
    ),
  },
  {
    title: '상태',
    key: 'status',
    dataIndex: 'status',
    render: (status) => {
      let color = 'default';
      if (status === '완료') color = 'success';
      if (status === '진행중') color = 'processing';
      if (status === '대기') color = 'warning';
      
      return (
        <Tag color={color} style={{ borderRadius: '10px', border: 'none' }}>
          {status}
        </Tag>
      );
    },
  },
  {
    title: '금액',
    dataIndex: 'amount',
    key: 'amount',
    render: (text) => <span style={{ color: '#fff', fontWeight: 500 }}>{text}</span>,
  },
  {
    title: '날짜',
    dataIndex: 'date',
    key: 'date',
    render: (text) => <span style={{ color: '#94a3b8' }}>{text}</span>,
  },
];

const data = [
  {
    key: '1',
    customer: '김철수',
    status: '완료',
    amount: '₩1,200,000',
    date: '2025-11-27',
  },
  {
    key: '2',
    customer: '이영희',
    status: '진행중',
    amount: '₩3,500,000',
    date: '2025-11-26',
  },
  {
    key: '3',
    customer: '박지성',
    status: '대기',
    amount: '₩800,000',
    date: '2025-11-26',
  },
  {
    key: '4',
    customer: '손흥민',
    status: '완료',
    amount: '₩5,000,000',
    date: '2025-11-25',
  },
  {
    key: '5',
    customer: '류현진',
    status: '진행중',
    amount: '₩2,100,000',
    date: '2025-11-25',
  },
];

const RecentTable = () => {
  return (
    <div className="glass-card" style={{ padding: '0' }}>
      <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <h3 style={{ margin: 0, color: '#fff' }}>최근 거래 내역</h3>
      </div>
      <Table 
        columns={columns} 
        dataSource={data} 
        pagination={false} 
        className="glass-table"
      />
    </div>
  );
};

export default RecentTable;
