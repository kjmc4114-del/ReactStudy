import React from 'react';
import { Table, Tag, Avatar, Card, Row, Col, Typography, Button } from 'antd';
import { UserOutlined, ShoppingOutlined, StarOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const customers = [
  { key: '1', name: '홍길동', grade: 'VIP', totalSpent: '₩15,200,000', lastOrder: '2025-11-20', preference: '자죽염' },
  { key: '2', name: '김철수', grade: 'Gold', totalSpent: '₩5,400,000', lastOrder: '2025-11-25', preference: '죽염간장' },
  { key: '3', name: '이영희', grade: 'Silver', totalSpent: '₩1,200,000', lastOrder: '2025-10-15', preference: '마늘환' },
  { key: '4', name: '박지성', grade: 'VIP', totalSpent: '₩22,000,000', lastOrder: '2025-11-27', preference: '9회 죽염' },
  { key: '5', name: '손흥민', grade: 'Platinum', totalSpent: '₩45,000,000', lastOrder: '2025-11-26', preference: '전체' },
];

const columns = [
  {
    title: '고객명',
    dataIndex: 'name',
    key: 'name',
    render: (text) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Avatar style={{ backgroundColor: 'var(--primary-color)', color: '#000' }}>{text[0]}</Avatar>
        <span style={{ color: '#fff', fontWeight: 500 }}>{text}</span>
      </div>
    ),
  },
  {
    title: '등급',
    dataIndex: 'grade',
    key: 'grade',
    render: (grade) => {
      let color = 'default';
      if (grade === 'VIP' || grade === 'Platinum') color = '#fbbf24'; // Gold
      if (grade === 'Gold') color = 'gold';
      if (grade === 'Silver') color = 'cyan';
      return <Tag color={color} style={{ color: '#000', fontWeight: 600 }}>{grade}</Tag>;
    },
  },
  { title: '총 구매액', dataIndex: 'totalSpent', key: 'totalSpent', render: (t) => <span style={{ color: '#fff' }}>{t}</span> },
  { title: '최근 주문', dataIndex: 'lastOrder', key: 'lastOrder', render: (t) => <span style={{ color: '#94a3b8' }}>{t}</span> },
  { title: '선호 상품', dataIndex: 'preference', key: 'preference', render: (t) => <Tag color="purple">{t}</Tag> },
];

const Customers = () => {
  return (
    <div style={{ paddingBottom: '40px' }}>
      <Title level={2} style={{ color: '#fff', marginBottom: '24px' }}>고객 관리 (초개인화)</Title>
      
      <Row gutter={[24, 24]}>
        <Col span={16}>
          <Card className="glass-card">
            <Table 
              columns={columns} 
              dataSource={customers} 
              pagination={false} 
              className="glass-table"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card className="glass-card" style={{ height: '100%', border: '1px solid var(--primary-color)' }}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <Avatar size={64} icon={<UserOutlined />} style={{ backgroundColor: 'rgba(255,255,255,0.1)', marginBottom: '16px' }} />
              <Title level={4} style={{ color: '#fff', margin: 0 }}>홍길동 고객님</Title>
              <Text style={{ color: 'var(--primary-color)' }}>VIP 회원</Text>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <Text strong style={{ color: '#fff', display: 'block', marginBottom: '12px' }}>✨ AI 초개인화 분석</Text>
              <div style={{ background: 'rgba(251, 191, 36, 0.1)', padding: '16px', borderRadius: '12px', border: '1px dashed var(--primary-color)' }}>
                <Text style={{ color: '#fbbf24' }}>
                  "최근 환절기 건강 관련 검색이 늘었습니다. 기관지에 좋은 <b>인산 무엿</b>을 추천하면 구매 확률이 높습니다."
                </Text>
              </div>
            </div>

            <Button type="primary" block size="large" style={{ background: 'var(--primary-color)', color: '#000', border: 'none' }}>
              추천 상품 문자 발송
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Customers;
