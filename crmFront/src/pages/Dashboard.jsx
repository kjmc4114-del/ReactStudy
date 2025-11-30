import React from 'react';
import { Row, Col } from 'antd';
import { DollarCircleOutlined, UserAddOutlined, ShoppingCartOutlined, RiseOutlined } from '@ant-design/icons';
import StatCard from '../components/StatCard';
import AiInsightCard from '../components/AiInsightCard';
import RecentTable from '../components/RecentTable';

const Dashboard = () => {
  return (
    <div style={{ paddingBottom: '40px' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ color: '#fff', fontSize: '28px', marginBottom: '8px' }}>안녕하세요, 관리자님 👋</h1>
        <p style={{ color: '#94a3b8' }}>오늘의 CRM 현황을 확인하세요.</p>
      </div>

      {/* Stats Row */}
      <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
        <Col xs={24} sm={12} lg={6}>
          <StatCard 
            title="총 매출" 
            value="₩128,430,000" 
            trend="up" 
            trendValue="12.5%" 
            icon={<DollarCircleOutlined />}
            color="99, 102, 241" // Indigo
          />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <StatCard 
            title="신규 고객" 
            value="1,429" 
            trend="up" 
            trendValue="8.2%" 
            icon={<UserAddOutlined />}
            color="168, 85, 247" // Purple
          />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <StatCard 
            title="주문 건수" 
            value="8,540" 
            trend="down" 
            trendValue="2.1%" 
            icon={<ShoppingCartOutlined />}
            color="236, 72, 153" // Pink
          />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <StatCard 
            title="전환율" 
            value="24.8%" 
            trend="up" 
            trendValue="4.3%" 
            icon={<RiseOutlined />}
            color="34, 197, 94" // Green
          />
        </Col>
      </Row>

      {/* Main Content Row */}
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16}>
          <AiInsightCard />
        </Col>
        <Col xs={24} lg={8}>
          {/* Placeholder for another widget or just spacing for now, maybe a mini calendar or notifications */}
          <div className="glass-card" style={{ height: '100%', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: '#fff', marginBottom: '10px' }}>AI 비서 대기중</h3>
              <p style={{ color: '#94a3b8' }}>"이번 달 마케팅 리포트 생성해줘" 라고 물어보세요.</p>
            </div>
          </div>
        </Col>
      </Row>

      {/* Recent Activity Row */}
      <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
        <Col span={24}>
          <RecentTable />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
