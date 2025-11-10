import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface GlossyButtonProps {
  icon: LucideIcon;
  label?: string;
  onClick: () => void;
  variant?: 'primary' | 'danger' | 'default';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export function GlossyButton({ 
  icon: Icon, 
  label, 
  onClick, 
  variant = 'default',
  size = 'md',
  showLabel = true
}: GlossyButtonProps) {
  const sizeClasses = {
    sm: 'h-10 px-4',
    md: 'h-12 px-5',
    lg: 'h-16 px-6'
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  const variantClasses = {
    primary: 'bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700',
    danger: 'bg-gradient-to-br from-red-600 to-red-800 hover:from-red-500 hover:to-red-700',
    default: 'bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        rounded-xl
        flex items-center gap-2
        text-white
        shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]
        border border-white/10
        backdrop-blur-sm
        transition-all duration-300
        relative
        overflow-hidden
        group
      `}
    >
      {/* Glossy overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/20 pointer-events-none" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      </div>
      
      <Icon size={iconSizes[size]} className="relative z-10 drop-shadow-lg" />
      {showLabel && label && (
        <span className="relative z-10 drop-shadow-lg">{label}</span>
      )}
    </motion.button>
  );
}
