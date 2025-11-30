import React from 'react';
import { Card, Button, Typography } from 'antd';
import { RobotOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const { Title, Text } = Typography;

const data = [
  { name: '1주', uv: 4000 },
  { name: '2주', uv: 3000 },
  { name: '3주', uv: 2000 },
  { name: '4주', uv: 2780 },
  { name: '5주', uv: 1890 },
  { name: '6주', uv: 2390 },
  { name: '7주', uv: 3490 },
];

const AiInsightCard = () => {
  return (
    <Card className="glass-card" style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <RobotOutlined style={{ fontSize: '20px', color: '#a855f7' }} />
            <Text style={{ color: '#a855f7', fontWeight: 600 }}>AI 인사이트</Text>
          </div>
          <Title level={4} style={{ color: '#fff', margin: 0 }}>
            다음 달 매출 15% 상승 예측
          </Title>
          <Text style={{ color: '#94a3b8' }}>
            최근 고객 유입 패턴 분석 결과, 긍정적인 신호가 감지되었습니다.
          </Text>
        </div>
        <Button 
          type="primary" 
          shape="round" 
          style={{ 
            background: 'rgba(168, 85, 247, 0.2)', 
            border: '1px solid #a855f7',
            color: '#d8b4fe'
          }}
        >
          자세히 보기
        </Button>
      </div>

      <div style={{ height: '200px', width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: 'none', borderRadius: '8px' }}
              itemStyle={{ color: '#fff' }}
            />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default AiInsightCard;
