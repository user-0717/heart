import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '../components/Card';
import { ArrowLeft, Save, RefreshCw } from 'lucide-react';
import { useSettingsStore } from '../lib/settingsStore';

export function SettingsPage() {
  const navigate = useNavigate();
  const { 
    siteName, 
    domain, 
    description, 
    logo, 
    favicon, 
    primaryColor, 
    secondaryColor, 
    isPublic, 
    analyticsCode, 
    updateSettings, 
    resetSettings, 
    saveSettings 
  } = useSettingsStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    updateSettings({ [name]: type === 'checkbox' ? checked : value });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => navigate('/')}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">设置</h1>
          <p className="text-gray-500 mt-1">系统配置与管理</p>
        </div>
      </div>

      <Card>
        <CardHeader title="网站设置" subtitle="配置您的项目网站信息" />
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">网站名称</label>
                <input
                  type="text"
                  name="siteName"
                  value={siteName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">域名</label>
                <input
                  type="text"
                  name="domain"
                  value={domain}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">网站描述</label>
              <textarea
                name="description"
                value={description}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Logo URL</label>
                <input
                  type="text"
                  name="logo"
                  value={logo}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Favicon URL</label>
                <input
                  type="text"
                  name="favicon"
                  value={favicon}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">主色调</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    name="primaryColor"
                    value={primaryColor}
                    onChange={handleInputChange}
                    className="w-10 h-10 rounded-md cursor-pointer"
                  />
                  <input
                    type="text"
                    name="primaryColor"
                    value={primaryColor}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">次色调</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    name="secondaryColor"
                    value={secondaryColor}
                    onChange={handleInputChange}
                    className="w-10 h-10 rounded-md cursor-pointer"
                  />
                  <input
                    type="text"
                    name="secondaryColor"
                    value={secondaryColor}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="isPublic"
                checked={isPublic}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <label className="text-sm font-medium text-gray-700">公开网站</label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1"> analytics 代码</label>
              <textarea
                name="analyticsCode"
                value={analyticsCode}
                onChange={handleInputChange}
                rows={2}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex space-x-2">
              <button
                onClick={saveSettings}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Save size={16} className="mr-2" />
                保存设置
              </button>
              <button
                onClick={resetSettings}
                className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              >
                <RefreshCw size={16} className="mr-2" />
                重置
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
