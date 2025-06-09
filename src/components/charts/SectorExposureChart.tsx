import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SectorExposure } from '../../types/dashboard';

interface SectorExposureChartProps {
  data: SectorExposure[];
}

const SectorExposureChart: React.FC<SectorExposureChartProps> = ({ data }) => {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
      <h3 className="text-xl font-semibold text-white mb-6">Sector Exposure Analysis</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="sector" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)', 
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px'
            }} 
          />
          <Bar dataKey="exposure" fill="#3B82F6" name="Current Exposure %" />
          <Bar dataKey="limit" fill="#6B7280" name="Limit %" opacity={0.6} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SectorExposureChart;