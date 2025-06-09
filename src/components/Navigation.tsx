import React from 'react';
import { Activity, TrendingUp, AlertTriangle, Eye } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'portfolio', label: 'Portfolio', icon: TrendingUp },
    { id: 'risk', label: 'Risk Analysis', icon: AlertTriangle },
    { id: 'agents', label: 'Agent Status', icon: Eye }
  ];

  return (
    <nav className="bg-black/10 backdrop-blur-xl border-b border-white/5">
      <div className="px-6">
        <div className="flex space-x-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-400 text-blue-400'
                  : 'border-transparent text-gray-300 hover:text-white hover:border-gray-300'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;