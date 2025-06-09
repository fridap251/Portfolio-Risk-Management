import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface RiskReturnChartProps {
  data: Array<{
    risk: number;
    return: number;
    name: string;
  }>;
}

const RiskReturnChart: React.FC<RiskReturnChartProps> = ({ data }) => {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
      <h3 className="text-xl font-semibold text-white mb-6">Risk-Return Analysis</h3>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="risk" stroke="#9CA3AF" name="Risk" />
          <YAxis dataKey="return" stroke="#9CA3AF" name="Return" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)', 
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px'
            }} 
          />
          <Scatter dataKey="return" fill="#8B5CF6" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RiskReturnChart;