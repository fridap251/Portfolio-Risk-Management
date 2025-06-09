import { useState, useEffect } from 'react';
import { PortfolioData } from '../types/dashboard';

export const useRealTimeData = (initialData: PortfolioData) => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setPortfolioData(prev => ({
        ...prev,
        dailyChange: prev.dailyChange + (Math.random() - 0.5) * 10000,
        var95: prev.var95 + (Math.random() - 0.5) * 5000,
        sharpeRatio: Math.max(0, prev.sharpeRatio + (Math.random() - 0.5) * 0.05),
        volatility: Math.max(0.1, prev.volatility + (Math.random() - 0.5) * 0.01)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return portfolioData;
};