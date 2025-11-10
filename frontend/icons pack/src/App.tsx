import { useState } from 'react';
import { ModuleHub } from './components/ModuleHub';
import { GlobalActions } from './components/GlobalActions';
import { AdminActions } from './components/AdminActions';

export default function App() {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white mb-2">Enterprise Resource Planning System</h1>
            <p className="text-slate-400">Premium Icon Package & Navigation System</p>
          </div>
          <GlobalActions />
        </div>
      </div>

      {/* Main Module Hub */}
      <div className="max-w-7xl mx-auto">
        <ModuleHub 
          activeModule={activeModule}
          setActiveModule={setActiveModule}
        />
      </div>

      {/* Admin Actions - Bottom Right */}
      <AdminActions />
    </div>
  );
}
