import React from 'react';
import { Card, Typography, Switch, List, Button } from 'antd';

const { Title, Text } = Typography;

const Settings = () => {
  return (
    <div>
      <Title level={2} style={{ color: '#fff', marginBottom: '24px' }}>설정</Title>
      <Card className="glass-card">
        <List
          itemLayout="horizontal"
          dataSource={[
            { title: '다크 모드', description: '시스템 테마를 어둡게 유지합니다.', action: <Switch defaultChecked /> },
            { title: 'CTI 자동 연결', description: '전화 수신 시 자동으로 고객 정보를 팝업합니다.', action: <Switch defaultChecked /> },
            { title: 'AI 알림', description: '중요한 인사이트 발생 시 알림을 받습니다.', action: <Switch defaultChecked /> },
            { title: '시스템 초기화', description: '모든 데이터를 초기화합니다.', action: <Button danger>초기화</Button> },
          ]}
          renderItem={(item) => (
            <List.Item actions={[item.action]} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <List.Item.Meta
                title={<Text style={{ color: '#fff' }}>{item.title}</Text>}
                description={<Text style={{ color: '#94a3b8' }}>{item.description}</Text>}
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default Settings;
