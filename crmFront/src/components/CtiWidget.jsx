import React, { useState, useEffect } from 'react';
import { Button, Avatar, Badge, Modal, Typography, List, Tabs, Descriptions, Input, message } from 'antd';
import { PhoneOutlined, UserOutlined, MutedOutlined, ShoppingCartOutlined, FileTextOutlined, RobotOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { TextArea } = Input;

const CtiWidget = () => {
  const [isCalling, setIsCalling] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [activeTab, setActiveTab] = useState('1');

  // Simulate incoming call
  const handleSimulateCall = () => {
    setIsCalling(true);
    setIsModalOpen(true);
  };

  const handleEndCall = () => {
    setIsCalling(false);
    setIsModalOpen(false);
    setCallDuration(0);
    message.success('통화가 종료되었습니다. 상담 이력이 저장됩니다.');
  };

  const handleOrder = () => {
    message.success('주문 페이지로 이동합니다. (고객 정보 연동됨)');
    // In a real app, navigate to /orders/new?customer=1
  };

  useEffect(() => {
    let interval;
    if (isCalling) {
      interval = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCalling]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const items = [
    {
      key: '1',
      label: <span style={{color: '#fff'}}>AI 분석</span>,
      children: (
        <div style={{ padding: '10px 0' }}>
           <div style={{ background: 'rgba(251, 191, 36, 0.1)', padding: '16px', borderRadius: '12px', border: '1px dashed var(--primary-color)', marginBottom: '16px' }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              <RobotOutlined style={{ color: 'var(--primary-color)' }} />
              <Text strong style={{ color: '#fbbf24' }}>실시간 AI 코칭</Text>
            </div>
            <Text style={{ color: '#fff' }}>
              "고객님 목소리 톤에서 <b>피로감</b>이 감지됩니다. 피로 회복에 좋은 <b>죽염 마늘환</b>을 권유해보세요."
            </Text>
          </div>
          <List
            size="small"
            header={<Text style={{color: '#94a3b8'}}>추천 상품 (구매 확률 80%↑)</Text>}
            dataSource={[
              { title: '인산 자죽염 9회', reason: '재구매 주기 도래' },
              { title: '죽염 마늘환', reason: 'AI 코칭 추천' }
            ]}
            renderItem={(item) => (
              <List.Item actions={[<Button size="small" type="primary" ghost style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }} onClick={handleOrder}>주문</Button>]}>
                <List.Item.Meta
                  title={<Text style={{ color: '#fff' }}>{item.title}</Text>}
                  description={<Text style={{ color: '#94a3b8', fontSize: '12px' }}>{item.reason}</Text>}
                />
              </List.Item>
            )}
          />
        </div>
      ),
    },
    {
      key: '2',
      label: <span style={{color: '#fff'}}>고객 정보</span>,
      children: (
        <Descriptions column={1} contentStyle={{ color: '#fff' }} labelStyle={{ color: '#94a3b8' }}>
          <Descriptions.Item label="등급">VIP (상위 1%)</Descriptions.Item>
          <Descriptions.Item label="최근 구매">2025-11-20 (7일 전)</Descriptions.Item>
          <Descriptions.Item label="선호 결제">카드 (삼성)</Descriptions.Item>
          <Descriptions.Item label="주소">서울시 강남구 ...</Descriptions.Item>
        </Descriptions>
      ),
    },
    {
      key: '3',
      label: <span style={{color: '#fff'}}>상담 메모</span>,
      children: (
        <div>
          <TextArea rows={4} placeholder="상담 내용을 입력하세요..." style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none' }} />
          <Button type="primary" style={{ marginTop: '10px', float: 'right', background: 'var(--primary-color)', color: '#000' }}>저장</Button>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* Floating Widget Button */}
      <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000 }}>
        <Badge count={isCalling ? "통화중" : "대기"} color={isCalling ? "red" : "green"}>
          <Button
            type="primary"
            shape="circle"
            size="large"
            icon={<PhoneOutlined style={{ fontSize: '24px' }} />}
            style={{
              width: '60px',
              height: '60px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              background: isCalling ? '#ef4444' : '#22c55e',
              border: 'none'
            }}
            onClick={handleSimulateCall}
          />
        </Badge>
      </div>

      {/* Incoming Call / Active Call Modal */}
      <Modal
        title={null}
        open={isModalOpen}
        footer={null}
        closable={false}
        centered
        width={500}
        bodyStyle={{ padding: 0, background: 'transparent' }}
        modalRender={(modal) => (
          <div className="glass-panel" style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--primary-color)', boxShadow: '0 0 50px rgba(88, 28, 135, 0.5)' }}>
            {modal}
          </div>
        )}
      >
        {/* Call Header */}
        <div style={{ padding: '24px', background: 'linear-gradient(to right, rgba(41, 37, 36, 0.9), rgba(12, 10, 9, 0.9))', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Avatar size={64} icon={<UserOutlined />} style={{ backgroundColor: '#fbbf24', color: '#000' }} />
              <div>
                <Title level={4} style={{ color: '#fff', margin: 0 }}>홍길동 고객님</Title>
                <Text style={{ color: '#fbbf24' }}>VIP 회원</Text>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <Text style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold', display: 'block' }}>{formatTime(callDuration)}</Text>
              <Text style={{ color: '#ef4444', fontSize: '12px' }}>● REC</Text>
            </div>
          </div>
        </div>

        {/* Call Body */}
        <div style={{ padding: '0 24px 24px' }}>
          <Tabs activeKey={activeTab} items={items} onChange={setActiveTab} />
          
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
             <Button 
              type="primary" 
              icon={<ShoppingCartOutlined />} 
              style={{ flex: 1, height: '48px', background: '#fbbf24', color: '#000', border: 'none', fontSize: '16px' }}
              onClick={handleOrder}
            >
              바로 주문
            </Button>
            <Button 
              danger 
              type="primary" 
              icon={<PhoneOutlined rotate={135} />} 
              style={{ width: '60px', height: '48px' }} 
              onClick={handleEndCall} 
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CtiWidget;
