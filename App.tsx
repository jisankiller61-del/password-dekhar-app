
import React, { useState } from 'react';
import { AppView } from './types';
import Dashboard from './components/Dashboard';
import PasswordStrength from './components/PasswordStrength';
import PhishingInfo from './components/PhishingInfo';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);

  const renderView = () => {
    switch (currentView) {
      case AppView.DASHBOARD:
        return <Dashboard onViewChange={setCurrentView} />;
      case AppView.PASSWORD_CHECK:
        return <PasswordStrength />;
      case AppView.PHISHING_INFO:
        return <PhishingInfo />;
      case AppView.AI_CONSULTANT:
        return <AIConsultant />;
      default:
        return <Dashboard onViewChange={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      {/* Navigation Header */}
      <nav className="bg-slate-800 border-b border-slate-700 p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setCurrentView(AppView.DASHBOARD)}
          >
            <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold tracking-tight">SecureGuard</h1>
          </div>
          
          <div className="flex gap-2 sm:gap-4 text-sm font-medium overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
            <button 
              onClick={() => setCurrentView(AppView.DASHBOARD)}
              className={`px-3 py-2 rounded-md transition-all whitespace-nowrap ${currentView === AppView.DASHBOARD ? 'bg-slate-700 text-blue-400' : 'hover:bg-slate-700 text-slate-400'}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setCurrentView(AppView.PASSWORD_CHECK)}
              className={`px-3 py-2 rounded-md transition-all whitespace-nowrap ${currentView === AppView.PASSWORD_CHECK ? 'bg-slate-700 text-blue-400' : 'hover:bg-slate-700 text-slate-400'}`}
            >
              Password Lab
            </button>
            <button 
              onClick={() => setCurrentView(AppView.PHISHING_INFO)}
              className={`px-3 py-2 rounded-md transition-all whitespace-nowrap ${currentView === AppView.PHISHING_INFO ? 'bg-slate-700 text-blue-400' : 'hover:bg-slate-700 text-slate-400'}`}
            >
              Threat Defense
            </button>
            <button 
              onClick={() => setCurrentView(AppView.AI_CONSULTANT)}
              className={`px-3 py-2 rounded-md transition-all whitespace-nowrap ${currentView === AppView.AI_CONSULTANT ? 'bg-slate-700 text-blue-400' : 'hover:bg-slate-700 text-slate-400'}`}
            >
              Security Expert AI
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow max-w-6xl mx-auto w-full p-4 sm:p-8">
        {renderView()}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 p-6 mt-auto">
        <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm">
          <p>© 2024 SecureGuard. This application is for educational purposes only. Promoting hacking or illegal activities is strictly prohibited.</p>
          <p className="mt-2">Stay safe, stay ethical, and protect your digital identity.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
