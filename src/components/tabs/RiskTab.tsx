import React from 'react';
import { formatCurrency } from '../../utils/formatters';

const RiskTab: React.FC = () => {
  const varData = [
    { period: '1 Day', var: -52000, confidence: '95%' },
    { period: '1 Week', var: -165000, confidence: '95%' },
    { period: '1 Month', var: -340000, confidence: '95%' },
    { period: '1 Year', var: -1200000, confidence: '95%' }
  ];

  const stressTests = [
    { scenario: '2008 Financial Crisis', impact: -2100000, probability: '2%' },
    { scenario: 'COVID-19 Market Crash', impact: -1650000, probability: '5%' },
    { scenario: 'Tech Bubble Burst', impact: -1200000, probability: '8%' },
    { scenario: 'Interest Rate Shock', impact: -890000, probability: '12%' }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-4">VaR Breakdown</h3>
          <div className="space-y-4">
            {varData.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <span className="text-gray-300">{item.period} VaR ({item.confidence})</span>
                <span className="text-red-400 font-semibold">{formatCurrency(item.var)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-4">Stress Test Scenarios</h3>
          <div className="space-y-4">
            {stressTests.map((item, index) => (
              <div key={index} className="p-3 bg-white/5 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-300 text-sm">{item.scenario}</span>
                  <span className="text-gray-400 text-xs">{item.probability}</span>
                </div>
                <span className="text-red-400 font-semibold">{formatCurrency(item.impact)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskTab;