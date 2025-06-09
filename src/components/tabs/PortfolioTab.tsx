import React from 'react';
import { SectorExposure } from '../../types/dashboard';
import SectorExposureChart from '../charts/SectorExposureChart';
import RiskReturnChart from '../charts/RiskReturnChart';
import { riskReturnData } from '../../data/mockData';

interface PortfolioTabProps {
  sectorExposure: SectorExposure[];
}

const PortfolioTab: React.FC<PortfolioTabProps> = ({ sectorExposure }) => {
  return (
    <div className="space-y-8">
      <SectorExposureChart data={sectorExposure} />
      <RiskReturnChart data={riskReturnData} />
    </div>
  );
};

export default PortfolioTab;