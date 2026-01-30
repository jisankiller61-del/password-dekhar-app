
export enum AppView {
  DASHBOARD = 'dashboard',
  PASSWORD_CHECK = 'password_check',
  PHISHING_INFO = 'phishing_info',
  AI_CONSULTANT = 'ai_consultant'
}

export interface SecurityTip {
  title: string;
  description: string;
  category: 'password' | 'mfa' | 'privacy' | 'general';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
