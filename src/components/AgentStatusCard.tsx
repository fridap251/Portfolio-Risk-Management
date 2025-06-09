import React from 'react';
import { CheckCircle, AlertTriangle, XCircle, Clock } from 'lucide-react';
import { AgentStatus } from '../types/dashboard';

interface AgentStatusCardProps {
  agent: AgentStatus;
}

const AgentStatusCard: React.FC<AgentStatusCardProps> = ({ agent }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'error': return <XCircle className="w-4 h-4 text-red-500" />;
      default: return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-white">{agent.name}</h4>
        {getStatusIcon(agent.status)}
      </div>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-400">Status</span>
          <span className={`capitalize ${
            agent.status === 'active' ? 'text-green-400' : 
            agent.status === 'warning' ? 'text-yellow-400' : 'text-red-400'
          }`}>
            {agent.status}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Health</span>
          <span className="text-white">{agent.health}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Last Update</span>
          <span className="text-gray-300">{agent.lastUpdate}</span>
        </div>
        <div className="w-full bg-gray-600 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all ${
              agent.health >= 95 ? 'bg-green-500' : 
              agent.health >= 85 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${agent.health}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AgentStatusCard;