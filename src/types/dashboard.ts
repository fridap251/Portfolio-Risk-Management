export interface PortfolioData {
  totalValue: number;
  dailyChange: number;
  var95: number;
  sharpeRatio: number;
  volatility: number;
}

export interface AgentStatus {
  id: string;
  name: string;
  status: 'active' | 'warning' | 'error';
  lastUpdate: string;
  health: number;
}

export interface Alert {
  id: number;
  type: string;
  message: string;
  time: string;
  severity: 'high' | 'medium' | 'low';
}

export interface PortfolioComposition {
  name: string;
  value: number;
  color: string;
}

export interface RiskMetric {
  date: string;
  var: number;
  volatility: number;
  sharpe: number;
}

export interface SectorExposure {
  sector: string;
  exposure: number;
  limit: number;
  risk: 'high' | 'medium' | 'low';
}