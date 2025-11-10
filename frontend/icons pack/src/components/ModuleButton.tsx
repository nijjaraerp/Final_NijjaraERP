import { LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SubModuleButton } from './SubModuleButton';

interface SubModule {
  id: string;
  name: string;
  icon: LucideIcon;
}

interface Module {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
  subModules: SubModule[];
}

interface ModuleButtonProps {
  module: Module;
  isActive: boolean;
  onToggle: () => void;
}

export function ModuleButton({ module, isActive, onToggle }: ModuleButtonProps) {
  const Icon = module.icon;

  // Calculate positions for sub-modules in a circular pattern
  const getSubModulePosition = (index: number, total: number) => {
    const radius = 180;
    const startAngle = -90; // Start from top
    const angleStep = 360 / total;
    const angle = (startAngle + angleStep * index) * (Math.PI / 180);
    
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  };

  return (
    <div className="relative flex items-center justify-center h-[500px]">
      {/* Sub-modules */}
      <AnimatePresence>
        {isActive && module.subModules.map((subModule, index) => {
          const position = getSubModulePosition(index, module.subModules.length);
          
          return (
            <SubModuleButton
              key={subModule.id}
              subModule={subModule}
              position={position}
              delay={index * 0.05}
              color={module.color}
            />
          );
        })}
      </AnimatePresence>

      {/* Main Module Button */}
      <motion.button
        onClick={onToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          scale: isActive ? 1.1 : 1
        }}
        className={`
          relative
          w-32 h-32
          rounded-3xl
          bg-gradient-to-br ${module.color}
          shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.3)]
          border-2 border-white/20
          flex flex-col items-center justify-center
          gap-2
          text-white
          overflow-hidden
          group
          z-20
          transition-all duration-500
        `}
      >
        {/* Base glossy overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/30 pointer-events-none" />
        
        {/* Glass reflection effect - top left highlight */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/40 via-white/10 to-transparent rounded-full blur-xl" />
        </div>

        {/* Glass reflection effect - diagonal shine */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-white/20 via-transparent to-transparent rotate-45 blur-sm" />
        </div>

        {/* Animated glance reflection on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            animate={{
              x: ['-100%', '200%']
            }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 2
            }}
            style={{
              width: '50%',
              transform: 'skewX(-20deg)'
            }}
          />
        </div>

        {/* Circular glass shine effect */}
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <div className="absolute top-4 left-4 w-12 h-12 bg-white/30 rounded-full blur-md" />
          <div className="absolute top-6 left-6 w-6 h-6 bg-white/50 rounded-full blur-sm" />
        </div>

        {/* Glow effect when active */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute inset-0 bg-gradient-to-br ${module.color} blur-2xl -z-10`}
          />
        )}

        <Icon size={48} className="relative z-10 drop-shadow-2xl" strokeWidth={1.5} />
        <span className="relative z-10 text-center px-2 drop-shadow-lg">{module.name}</span>
        <span className="relative z-10 text-xs opacity-75 tracking-wider">{module.id}</span>
      </motion.button>
    </div>
  );
}
