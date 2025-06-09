import React from 'react';
import { Activity, AlertTriangle } from 'lucide-react';
import { AgentStatus } from '../../types/dashboard';
import AgentStatusCard from '../AgentStatusCard';

interface AgentsTabProps {
  agentStatus: AgentStatus[];
}

const AgentsTab: React.FC<AgentsTabProps> = ({ agentStatus }) => {
  return (
    <div className="space-y-8">
      {/* Agent Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agentStatus.map(agent => (
          <AgentStatusCard key={agent.id} agent={agent} />
        ))}
      </div>

      {/* Agent Communication Flow */}
      <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-6">Agent Communication Flow</h3>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                <Activity className="w-8 h-8 text-blue-400" />
              </div>
              <p className="text-sm text-gray-300">Market Data</p>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-0.5 bg-gray-400"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full mx-1"></div>
              <div className="w-8 h-0.5 bg-gray-400"></div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                <AlertTriangle className="w-8 h-8 text-purple-400" />
              </div>
              <p className="text-sm text-gray-300">Risk Assessment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentsTab;