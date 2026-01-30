
import React from 'react';
import { AppView } from '../types';

interface DashboardProps {
  onViewChange: (view: AppView) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onViewChange }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-8 border border-blue-500/30 shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Protect Your Digital Life</h2>
          <p className="text-blue-100 max-w-2xl text-lg leading-relaxed">
            Hacking into accounts is illegal and unethical. Instead, learn how to audit your own security
            and stay one step ahead of real-world threats like phishing, brute-force attacks, and social engineering.
          </p>
        </div>
        <div className="absolute right-[-5%] top-[-10%] opacity-10">
          <svg width="400" height="400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          onClick={() => onViewChange(AppView.PASSWORD_CHECK)}
          className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 cursor-pointer transition-all group"
        >
          <div className="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/40">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Password Strength</h3>
          <p className="text-slate-400 text-sm">Analyze how resistant your passwords are to modern brute-force techniques.</p>
        </div>

        <div 
          onClick={() => onViewChange(AppView.PHISHING_INFO)}
          className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-red-500 cursor-pointer transition-all group"
        >
          <div className="bg-red-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/40">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Phishing Defense</h3>
          <p className="text-slate-400 text-sm">Learn to identify fake login pages and malicious links used to steal credentials.</p>
        </div>

        <div 
          onClick={() => onViewChange(AppView.AI_CONSULTANT)}
          className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-emerald-500 cursor-pointer transition-all group"
        >
          <div className="bg-emerald-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600/40">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Expert Consultation</h3>
          <p className="text-slate-400 text-sm">Ask our AI security consultant about best practices for protecting your social media.</p>
        </div>
      </div>

      <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
        <h3 className="text-2xl font-bold mb-6">Quick Security Checklist</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Enable Two-Factor Authentication (2FA) on all accounts.",
            "Use a different password for every single service.",
            "Install a reputable Password Manager (like Bitwarden).",
            "Never click on login links from unsolicited emails.",
            "Review 'Logged In Devices' regularly in settings.",
            "Set up 'Trusted Contacts' or recovery emails."
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900 rounded-lg border border-slate-800">
              <div className="mt-1 h-5 w-5 rounded-full border-2 border-emerald-500 flex-shrink-0 flex items-center justify-center">
                <div className="h-2 w-2 bg-emerald-500 rounded-full" />
              </div>
              <span className="text-slate-300 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
