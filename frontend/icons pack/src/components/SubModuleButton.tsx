import { LucideIcon, Eye, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { QuickActions } from './QuickActions';

interface SubModule {
  id: string;
  name: string;
  icon: LucideIcon;
}

interface SubModuleButtonProps {
  subModule: SubModule;
  position: { x: number; y: number };
  delay: number;
  color: string;
}

export function SubModuleButton({ subModule, position, delay, color }: SubModuleButtonProps) {
  const [showActions, setShowActions] = useState(false);
  const Icon = subModule.icon;

  return (
    <>
      {/* Connection line to parent */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ delay, duration: 0.3 }}
        className="absolute w-0.5 h-full origin-center pointer-events-none z-0"
        style={{
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -50%) rotate(${Math.atan2(position.y, position.x)}rad)`,
          background: `linear-gradient(to right, transparent, rgba(255,255,255,0.1) 50%, transparent)`,
          width: Math.sqrt(position.x ** 2 + position.y ** 2)
        }}
      />

      {/* Sub-module button */}
      <motion.div
        initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1, 
          x: position.x, 
          y: position.y 
        }}
        exit={{ scale: 0, opacity: 0, x: 0, y: 0 }}
        transition={{ 
          delay, 
          duration: 0.4,
          type: 'spring',
          stiffness: 200,
          damping: 15
        }}
        className="absolute"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        onMouseEnter={() => setShowActions(true)}
        onMouseLeave={() => setShowActions(false)}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`
            relative
            w-24 h-24
            rounded-2xl
            bg-gradient-to-br ${color}
            shadow-[0_12px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.25)]
            border border-white/20
            flex flex-col items-center justify-center
            gap-1
            text-white
            overflow-hidden
            group
            z-10
          `}
        >
          {/* Glossy overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-black/25 pointer-events-none" />
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </div>

          {/* Hover glow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className={`absolute inset-0 bg-gradient-to-br ${color} blur-xl -z-10`}
          />

          <Icon size={32} className="relative z-10 drop-shadow-xl" strokeWidth={1.5} />
          <span className="relative z-10 text-xs text-center px-1 drop-shadow-lg leading-tight">
            {subModule.name}
          </span>
        </motion.button>

        {/* Quick Actions with Rays */}
        <QuickActions 
          show={showActions} 
          subModuleName={subModule.name}
          color={color}
        />
      </motion.div>
    </>
  );
}
