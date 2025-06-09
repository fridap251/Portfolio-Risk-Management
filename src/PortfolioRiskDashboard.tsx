import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import OverviewTab from './components/tabs/OverviewTab';
import PortfolioTab from './components/tabs/PortfolioTab';
import RiskTab from './components/tabs/RiskTab';
import AgentsTab from './components/tabs/AgentsTab';
import { useRealTimeData } from './hooks/useRealTimeData';
import {
  portfolioComposition,
  riskMetricsHistory,
  alerts,
  sectorExposure,
  initialAgentStatus
} from './data/mockData';

const PortfolioRiskDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [alertCount, setAlertCount] = useState(3);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [agentStatus, setAgentStatus] = useState(initialAgentStatus);

  const portfolioData = useRealTimeData({
    totalValue: 10500000,
    dailyChange: -125000,
    var95: -520000,
    sharpeRatio: 1.23,
    volatility: 0.18
  });

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <OverviewTab
            portfolioData={portfolioData}
            riskMetricsHistory={riskMetricsHistory}
            portfolioComposition={portfolioComposition}
            alerts={alerts}
          />
        );
      case 'portfolio':
        return <PortfolioTab sectorExposure={sectorExposure} />;
      case 'risk':
        return <RiskTab />;
      case 'agents':
        return <AgentsTab agentStatus={agentStatus} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header currentTime={currentTime} alertCount={alertCount} />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="px-6 py-8">
        {renderActiveTab()}
      </main>
    </div>
  );
};

export default PortfolioRiskDashboard;