import { PortfolioComposition, RiskMetric, Alert, SectorExposure, AgentStatus } from '../types/dashboard';

export const portfolioComposition: PortfolioComposition[] = [
  { name: 'US Equities', value: 35, color: '#3B82F6' },
  { name: 'International Equities', value: 25, color: '#8B5CF6' },
  { name: 'Fixed Income', value: 20, color: '#10B981' },
  { name: 'Alternative Assets', value: 12, color: '#F59E0B' },
  { name: 'Cash & Equivalents', value: 8, color: '#6B7280' }
];

export const riskMetricsHistory: RiskMetric[] = [
  { date: '09:00', var: -480000, volatility: 0.16, sharpe: 1.35 },
  { date: '10:00', var: -495000, volatility: 0.17, sharpe: 1.31 },
  { date: '11:00', var: -510000, volatility: 0.175, sharpe: 1.28 },
  { date: '12:00', var: -525000, volatility: 0.18, sharpe: 1.25 },
  { date: '13:00', var: -520000, volatility: 0.18, sharpe: 1.23 },
  { date: '14:00', var: -515000, volatility: 0.175, sharpe: 1.26 }
];

export const alerts: Alert[] = [
  { id: 1, type: 'warning', message: 'VaR threshold approaching limit', time: '2 min ago', severity: 'medium' },
  { id: 2, type: 'info', message: 'Portfolio rebalancing completed', time: '15 min ago', severity: 'low' },
  { id: 3, type: 'critical', message: 'Concentration risk detected in Tech sector', time: '1 hour ago', severity: 'high' }
];

export const sectorExposure: SectorExposure[] = [
  { sector: 'Technology', exposure: 28, limit: 30, risk: 'high' },
  { sector: 'Healthcare', exposure: 18, limit: 25, risk: 'medium' },
  { sector: 'Financial', exposure: 22, limit: 25, risk: 'low' },
  { sector: 'Consumer', exposure: 15, limit: 20, risk: 'low' },
  { sector: 'Industrial', exposure: 12, limit: 15, risk: 'low' },
  { sector: 'Energy', exposure: 5, limit: 10, risk: 'low' }
];

export const initialAgentStatus: AgentStatus[] = [
  { id: 'risk_001', name: 'Risk Assessment', status: 'active', lastUpdate: '2 min ago', health: 98 },
  { id: 'market_001', name: 'Market Data', status: 'active', lastUpdate: '1 min ago', health: 95 },
  { id: 'opt_001', name: 'Portfolio Optimization', status: 'warning', lastUpdate: '5 min ago', health: 87 },
  { id: 'compliance_001', name: 'Compliance', status: 'active', lastUpdate: '1 min ago', health: 100 },
  { id: 'alert_001', name: 'Alert Management', status: 'active', lastUpdate: '30 sec ago', health: 92 }
];

export const riskReturnData = [
  { risk: 0.12, return: 0.08, name: 'Bonds' },
  { risk: 0.18, return: 0.12, name: 'Mixed Portfolio' },
  { risk: 0.25, return: 0.15, name: 'Equities' },
  { risk: 0.35, return: 0.18, name: 'Growth Stocks' },
  { risk: 0.45, return: 0.22, name: 'Small Cap' }
];