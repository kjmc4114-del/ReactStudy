import React from 'react';
import { Card, Typography } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const { Title } = Typography;

const data = [
  { name: '1월', 매출: 4000, 목표: 2400 },
  { name: '2월', 매출: 3000, 목표: 1398 },
  { name: '3월', 매출: 2000, 목표: 9800 },
  { name: '4월', 매출: 2780, 목표: 3908 },
  { name: '5월', 매출: 1890, 목표: 4800 },
  { name: '6월', 매출: 2390, 목표: 3800 },
  { name: '7월', 매출: 3490, 목표: 4300 },
];

const Analytics = () => {
  return (
    <div>
      <Title level={2} style={{ color: '#fff', marginBottom: '24px' }}>분석 리포트</Title>
      <Card className="glass-card" style={{ height: '400px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: 'none', borderRadius: '8px' }}
              itemStyle={{ color: '#fff' }}
            />
            <Legend />
            <Bar dataKey="매출" fill="#fbbf24" />
            <Bar dataKey="목표" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default Analytics;
