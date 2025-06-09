import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { RiskMetric } from '../../types/dashboard';

interface RiskMetricsChartProps {
  data: RiskMetric[];
}

const RiskMetricsChart: React.FC<RiskMetricsChartProps> = ({ data }) => {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
      <h3 className="text-xl font-semibold text-white mb-4">Risk Metrics Timeline</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="date" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)', 
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px'
            }} 
          />
          <Legend />
          <Line type="monotone" dataKey="var" stroke="#EF4444" strokeWidth={2} name="VaR" />
          <Line type="monotone" dataKey="sharpe" stroke="#3B82F6" strokeWidth={2} name="Sharpe Ratio" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RiskMetricsChart;