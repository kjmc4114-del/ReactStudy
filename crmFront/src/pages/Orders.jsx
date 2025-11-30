import React from 'react';
import { Table, Tag, Steps, Card, Typography } from 'antd';
import { CarOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';

const { Title } = Typography;

const orders = [
  { key: '1', id: 'ORD-2025-001', customer: '홍길동', product: '인산 자죽염 9회', amount: '₩250,000', status: '배송중', date: '2025-11-27' },
  { key: '2', id: 'ORD-2025-002', customer: '김철수', product: '죽염 간장 500ml', amount: '₩45,000', status: '결제완료', date: '2025-11-27' },
  { key: '3', id: 'ORD-2025-003', customer: '이영희', product: '마늘환 1kg', amount: '₩120,000', status: '배송완료', date: '2025-11-26' },
  { key: '4', id: 'ORD-2025-004', customer: '박지성', product: '죽염 비누 세트', amount: '₩35,000', status: '배송준비', date: '2025-11-26' },
];

const columns = [
  { title: '주문번호', dataIndex: 'id', key: 'id', render: (t) => <span style={{ color: '#fff' }}>{t}</span> },
  { title: '고객명', dataIndex: 'customer', key: 'customer', render: (t) => <span style={{ color: '#94a3b8' }}>{t}</span> },
  { title: '상품명', dataIndex: 'product', key: 'product', render: (t) => <span style={{ color: '#fff' }}>{t}</span> },
  { title: '결제금액', dataIndex: 'amount', key: 'amount', render: (t) => <span style={{ color: '#fbbf24', fontWeight: 600 }}>{t}</span> },
  { 
    title: '상태', 
    dataIndex: 'status', 
    key: 'status',
    render: (status) => {
      let color = 'default';
      if (status === '배송완료') color = 'success';
      if (status === '배송중') color = 'processing';
      if (status === '배송준비') color = 'warning';
      if (status === '결제완료') color = 'default';
      return <Tag color={color}>{status}</Tag>;
    }
  },
  { title: '주문일자', dataIndex: 'date', key: 'date', render: (t) => <span style={{ color: '#94a3b8' }}>{t}</span> },
];

const Orders = () => {
  return (
    <div style={{ paddingBottom: '40px' }}>
      <Title level={2} style={{ color: '#fff', marginBottom: '24px' }}>주문 관리</Title>
      
      <Card className="glass-card" style={{ marginBottom: '24px' }}>
        <Title level={4} style={{ color: '#fff', marginBottom: '24px' }}>실시간 주문 현황</Title>
        <Steps
          current={1}
          items={[
            { title: '결제완료', icon: <SolutionOutlined />, description: '15건' },
            { title: '배송준비', icon: <LoadingOutlined />, description: '8건' },
            { title: '배송중', icon: <CarOutlined />, description: '12건' },
            { title: '배송완료', icon: <SmileOutlined />, description: '45건' },
          ]}
        />
      </Card>

      <Card className="glass-card">
        <Table 
          columns={columns} 
          dataSource={orders} 
          pagination={false} 
          className="glass-table"
        />
      </Card>
    </div>
  );
};

export default Orders;
