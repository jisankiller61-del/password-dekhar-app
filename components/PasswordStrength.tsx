
import React, { useState, useEffect } from 'react';

const PasswordStrength: React.FC = () => {
  const [password, setPassword] = useState('');
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<string[]>([]);

  useEffect(() => {
    analyzePassword(password);
  }, [password]);

  const analyzePassword = (pw: string) => {
    let s = 0;
    let f: string[] = [];

    if (pw.length === 0) {
      setScore(0);
      setFeedback([]);
      return;
    }

    if (pw.length < 8) {
      f.push("Too short. Minimum 12 characters recommended.");
    } else if (pw.length >= 12) {
      s += 2;
    } else {
      s += 1;
    }

    if (/[A-Z]/.test(pw)) s += 1;
    else f.push("Add uppercase letters.");

    if (/[0-9]/.test(pw)) s += 1;
    else f.push("Add numbers.");

    if (/[^A-Za-z0-9]/.test(pw)) s += 1;
    else f.push("Add special characters (e.g. @, #, $).");

    if (/(.)\1{2,}/.test(pw)) {
      s = Math.max(0, s - 1);
      f.push("Avoid repeating characters.");
    }

    setScore(s);
    setFeedback(f);
  };

  const getStrengthLabel = () => {
    if (password.length === 0) return "Enter a password";
    if (score <= 1) return "Dangerously Weak";
    if (score === 2) return "Weak";
    if (score === 3) return "Moderate";
    if (score === 4) return "Strong";
    return "Very Secure";
  };

  const getColorClass = () => {
    if (score <= 1) return "bg-red-500";
    if (score === 2) return "bg-orange-500";
    if (score === 3) return "bg-yellow-500";
    if (score === 4) return "bg-blue-500";
    return "bg-emerald-500";
  };

  return (
    <div className="max-w-2xl mx-auto animate-fadeIn">
      <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl">
        <h2 className="text-2xl font-bold mb-2">Password Strength Lab</h2>
        <p className="text-slate-400 mb-8">Test how long it would take a hacker to crack your password using modern hardware.</p>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Test a password (don't use your real one!)</label>
            <input 
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-mono"
              placeholder="e.g. CorrectHorseBatteryStaple7!"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-medium">
              <span>Security Level: <span className={score <= 2 ? "text-red-400" : "text-emerald-400"}>{getStrengthLabel()}</span></span>
              <span>{Math.min(100, (score / 5) * 100)}%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
              <div 
                className={`h-full transition-all duration-500 ${getColorClass()}`}
                style={{ width: `${Math.min(100, (score / 5) * 100)}%` }}
              />
            </div>
          </div>

          {feedback.length > 0 && (
            <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
              <h4 className="text-sm font-semibold text-slate-300 mb-2 uppercase tracking-wider">Improvement Tips:</h4>
              <ul className="space-y-1">
                {feedback.map((f, i) => (
                  <li key={i} className="text-sm text-slate-400 flex items-center gap-2">
                    <span className="text-red-500">•</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
              <p className="text-xs text-slate-500 uppercase font-bold mb-1">Time to Crack (Brute Force)</p>
              <p className="text-xl font-bold text-slate-200">
                {score <= 1 ? "Seconds" : score === 2 ? "Minutes" : score === 3 ? "Months" : "Centuries"}
              </p>
            </div>
            <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
              <p className="text-xs text-slate-500 uppercase font-bold mb-1">Complexity Rating</p>
              <p className="text-xl font-bold text-slate-200">
                {score}/5 Bits
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordStrength;
