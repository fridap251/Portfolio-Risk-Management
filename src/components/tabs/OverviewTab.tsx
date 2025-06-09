import React from 'react';
import { TrendingUp, AlertTriangle, Activity } from 'lucide-react';
import { PortfolioData, RiskMetric, PortfolioComposition, Alert } from '../../types/dashboard';
import { formatCurrency, formatPercentage } from '../../utils/formatters';
import MetricCard from '../MetricCard';
import RiskMetricsChart from '../charts/RiskMetricsChart';
import PortfolioCompositionChart from '../charts/PortfolioCompositionChart';
import AlertList from '../AlertList';

interface OverviewTabProps {
  portfolioData: PortfolioData;
  riskMetricsHistory: RiskMetric[];
  portfolioComposition: PortfolioComposition[];
  alerts: Alert[];
}

const OverviewTab: React.FC<OverviewTabProps> = ({
  portfolioData,
  riskMetricsHistory,
  portfolioComposition,
  alerts
}) => {
  const metrics = [
    {
      title: 'Portfolio Value',
      value: formatCurrency(portfolioData.totalValue),
      change: portfolioData.dailyChange,
      icon: TrendingUp,
      color: portfolioData.dailyChange >= 0 ? 'text-green-400' : 'text-red-400'
    },
    {
      title: 'Value at Risk (95%)',
      value: formatCurrency(portfolioData.var95),
      change: undefined,
      icon: AlertTriangle,
      color: 'text-red-400'
    },
    {
      title: 'Sharpe Ratio',
      value: portfolioData.sharpeRatio.toFixed(2),
      change: undefined,
      icon: TrendingUp,
      color: 'text-blue-400'
    },
    {
      title: 'Volatility',
      value: formatPercentage(portfolioData.volatility),
      change: undefined,
      icon: Activity,
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RiskMetricsChart data={riskMetricsHistory} />
        <PortfolioCompositionChart data={portfolioComposition} />
      </div>

      {/* Recent Alerts */}
      <AlertList alerts={alerts} />
    </div>
  );
};

export default OverviewTab;