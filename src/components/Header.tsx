import React from 'react';
import { Shield, Bell, Settings } from 'lucide-react';

interface HeaderProps {
  currentTime: Date;
  alertCount: number;
}

const Header: React.FC<HeaderProps> = ({ currentTime, alertCount }) => {
  return (
    <header className="bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-400" />
              <h1 className="text-2xl font-bold text-white">Portfolio Risk Management</h1>
            </div>
            <div className="text-sm text-gray-300">
              {currentTime.toLocaleString()}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
              {alertCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {alertCount}
                </span>
              )}
            </div>
            <Settings className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;