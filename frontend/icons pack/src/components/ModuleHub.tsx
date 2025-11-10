import { useState } from 'react';
import { ModuleButton } from './ModuleButton';
import { 
  Settings, 
  Users, 
  Briefcase, 
  DollarSign,
  LayoutDashboard,
  UserCog,
  Shield,
  FileText,
  History,
  UserCheck,
  Calendar,
  Plane,
  TrendingDown,
  TrendingUp,
  Building,
  FolderKanban,
  CheckSquare,
  Package,
  BarChart3,
  Receipt,
  Clock,
  Timer,
  Coins,
  Wallet,
  CreditCard
} from 'lucide-react';

interface ModuleHubProps {
  activeModule: string | null;
  setActiveModule: (module: string | null) => void;
}

export function ModuleHub({ activeModule, setActiveModule }: ModuleHubProps) {
  const modules = [
    {
      id: 'SYS',
      name: 'System Management',
      icon: Settings,
      color: 'from-cyan-600 to-cyan-800',
      subModules: [
        { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
        { id: 'users', name: 'Users', icon: Users },
        { id: 'roles', name: 'Roles', icon: UserCog },
        { id: 'permissions', name: 'Permissions', icon: Shield },
        { id: 'documents', name: 'Documents', icon: FileText },
        { id: 'audit', name: 'Audit Log', icon: History }
      ]
    },
    {
      id: 'HRM',
      name: 'Human Resources',
      icon: Users,
      color: 'from-purple-600 to-purple-800',
      subModules: [
        { id: 'employees', name: 'Employees', icon: UserCheck },
        { id: 'attendance', name: 'Attendance', icon: Calendar },
        { id: 'leave', name: 'Leave', icon: Plane },
        { id: 'advances', name: 'Advances', icon: TrendingUp },
        { id: 'deductions', name: 'Deductions', icon: TrendingDown }
      ]
    },
    {
      id: 'PRJ',
      name: 'Projects',
      icon: Briefcase,
      color: 'from-emerald-600 to-emerald-800',
      subModules: [
        { id: 'clients', name: 'Clients', icon: Building },
        { id: 'projects', name: 'Projects', icon: FolderKanban },
        { id: 'tasks', name: 'Tasks', icon: CheckSquare },
        { id: 'material', name: 'Material', icon: Package },
        { id: 'planactual', name: 'Plan vs Actual', icon: BarChart3 }
      ]
    },
    {
      id: 'FIN',
      name: 'Finance',
      icon: DollarSign,
      color: 'from-amber-600 to-amber-800',
      subModules: [
        { id: 'directexp', name: 'Direct Expenses', icon: Receipt },
        { id: 'indirecttime', name: 'Indirect (Time)', icon: Clock },
        { id: 'indirectnotime', name: 'Indirect (No Time)', icon: Timer },
        { id: 'revenue', name: 'Revenue', icon: Coins },
        { id: 'custody', name: 'Custody', icon: Wallet },
        { id: 'payroll', name: 'Payroll', icon: CreditCard }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
      {modules.map((module) => (
        <ModuleButton
          key={module.id}
          module={module}
          isActive={activeModule === module.id}
          onToggle={() => setActiveModule(activeModule === module.id ? null : module.id)}
        />
      ))}
    </div>
  );
}
