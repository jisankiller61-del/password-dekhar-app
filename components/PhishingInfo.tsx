
import React from 'react';

const PhishingInfo: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="p-2 bg-red-600 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            Anatomy of a Phish
          </h2>
          <p className="text-slate-400 mb-6">Phishing is the #1 way Facebook accounts are "hacked". It's not magic—it's trickery.</p>
          
          <div className="space-y-4">
            <div className="p-4 bg-slate-900 rounded-xl border-l-4 border-red-500">
              <h4 className="font-bold text-white mb-1">1. The Urgent Hook</h4>
              <p className="text-sm text-slate-400">"Your account will be deleted in 24 hours! Click here to verify." They use fear to stop you from thinking clearly.</p>
            </div>
            <div className="p-4 bg-slate-900 rounded-xl border-l-4 border-orange-500">
              <h4 className="font-bold text-white mb-1">2. The Fake Domain</h4>
              <p className="text-sm text-slate-400">The link might look like <code className="bg-slate-800 px-1 rounded text-red-300">facébook.com</code> or <code className="bg-slate-800 px-1 rounded text-red-300">security-fb.net</code>. It's not the real site.</p>
            </div>
            <div className="p-4 bg-slate-900 rounded-xl border-l-4 border-yellow-500">
              <h4 className="font-bold text-white mb-1">3. The Lookalike Page</h4>
              <p className="text-sm text-slate-400">The page looks identical to the real Facebook login. Once you type your email and password, the hacker receives them immediately.</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl">
          <h3 className="text-xl font-bold mb-6 text-emerald-400">How to Spot the Fake</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="h-8 w-8 rounded-full bg-emerald-600/20 text-emerald-500 flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <div>
                <h4 className="font-semibold mb-1">Check the URL Bar</h4>
                <p className="text-sm text-slate-400">Ensure it says exactly <strong>facebook.com</strong>. No hyphens, no extra words, no weird characters.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-8 w-8 rounded-full bg-emerald-600/20 text-emerald-500 flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <div>
                <h4 className="font-semibold mb-1">Look for HTTPS</h4>
                <p className="text-sm text-slate-400">Modern browsers show a lock icon. However, even fake sites use SSL now, so don't rely on it alone.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-8 w-8 rounded-full bg-emerald-600/20 text-emerald-500 flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <div>
                <h4 className="font-semibold mb-1">Use a Password Manager</h4>
                <p className="text-sm text-slate-400">A password manager won't autofill your password if the URL doesn't match exactly. This is your best defense.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-blue-900/20 border border-blue-500/30 rounded-xl">
            <h4 className="font-bold text-blue-400 mb-2">Pro Tip: 2FA is King</h4>
            <p className="text-xs text-blue-200 leading-relaxed">
              If you have Two-Factor Authentication enabled, even if a hacker steals your password, 
              they still can't get in without the one-time code from your phone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhishingInfo;
