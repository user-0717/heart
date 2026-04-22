import { create } from 'zustand';

interface WebsiteSettings {
  siteName: string;
  domain: string;
  description: string;
  logo: string;
  favicon: string;
  primaryColor: string;
  secondaryColor: string;
  isPublic: boolean;
  analyticsCode: string;
}

interface SettingsStore extends WebsiteSettings {
  updateSettings: (settings: Partial<WebsiteSettings>) => void;
  resetSettings: () => void;
  saveSettings: () => void;
}

const defaultSettings: WebsiteSettings = {
  siteName: '项目管理系统',
  domain: 'localhost:3000',
  description: '一个现代化的项目管理系统',
  logo: '',
  favicon: '',
  primaryColor: '#3b82f6',
  secondaryColor: '#10b981',
  isPublic: false,
  analyticsCode: '',
};

// 从本地存储加载设置
const loadSettingsFromLocalStorage = (): WebsiteSettings => {
  try {
    const savedSettings = localStorage.getItem('websiteSettings');
    if (savedSettings) {
      return JSON.parse(savedSettings);
    }
  } catch (error) {
    console.error('Error loading settings from localStorage:', error);
  }
  return defaultSettings;
};

export const useSettingsStore = create<SettingsStore>((set, get) => ({
  ...loadSettingsFromLocalStorage(),
  
  updateSettings: (settings) => set((state) => ({ ...state, ...settings })),
  
  resetSettings: () => set(defaultSettings),
  
  saveSettings: () => {
    const settings = get();
    // 这里可以添加保存到本地存储或API的逻辑
    localStorage.setItem('websiteSettings', JSON.stringify(settings));
    console.log('Settings saved:', settings);
  },
}));
