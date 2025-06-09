import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Alert } from '../types/dashboard';
import { getSeverityColor } from '../utils/formatters';

interface AlertListProps {
  alerts: Alert[];
}

const AlertList: React.FC<AlertListProps> = ({ alerts }) => {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
      <h3 className="text-xl font-semibold text-white mb-4">Recent Alerts</h3>
      <div className="space-y-3">
        {alerts.map(alert => (
          <div key={alert.id} className={`p-4 rounded-lg border ${getSeverityColor(alert.severity)}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-5 h-5" />
                <span className="font-medium">{alert.message}</span>
              </div>
              <span className="text-sm opacity-75">{alert.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertList;