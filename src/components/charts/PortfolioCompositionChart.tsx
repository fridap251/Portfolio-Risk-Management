import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { PortfolioComposition } from '../../types/dashboard';

interface PortfolioCompositionChartProps {
  data: PortfolioComposition[];
}

const PortfolioCompositionChart: React.FC<PortfolioCompositionChartProps> = ({ data }) => {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
      <h3 className="text-xl font-semibold text-white mb-4">Portfolio Composition</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ name, value }) => `${name}: ${value}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)', 
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px'
            }} 
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PortfolioCompositionChart;