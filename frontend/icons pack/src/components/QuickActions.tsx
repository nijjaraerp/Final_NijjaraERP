import { motion, AnimatePresence } from 'motion/react';
import { Eye, Plus } from 'lucide-react';

interface QuickActionsProps {
  show: boolean;
  subModuleName: string;
  color: string;
}

export function QuickActions({ show, subModuleName, color }: QuickActionsProps) {
  const actions = [
    { id: 'view', icon: Eye, label: 'View', angle: -45 },
    { id: 'create', icon: Plus, label: 'Create New', angle: 45 }
  ];

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Light rays emanating from the button */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`ray-${i}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              className="absolute left-1/2 top-1/2 w-1 origin-left pointer-events-none"
              style={{
                height: '60px',
                transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                background: `linear-gradient(to right, rgba(255,255,255,0.4), transparent)`,
                filter: 'blur(1px)'
              }}
            />
          ))}

          {/* Action buttons */}
          {actions.map((action, index) => {
            const Icon = action.icon;
            const distance = 100;
            const angleRad = (action.angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * distance;
            const y = Math.sin(angleRad) * distance;

            return (
              <motion.button
                key={action.id}
                initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                animate={{ scale: 1, opacity: 1, x, y }}
                exit={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                transition={{ 
                  delay: index * 0.05,
                  duration: 0.3,
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => console.log(`${action.label} ${subModuleName}`)}
                className={`
                  absolute left-1/2 top-1/2
                  w-16 h-16
                  rounded-xl
                  bg-gradient-to-br ${color}
                  shadow-[0_8px_24px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.3)]
                  border border-white/30
                  flex flex-col items-center justify-center
                  gap-1
                  text-white
                  overflow-hidden
                  group/action
                  z-30
                `}
                style={{
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/30 pointer-events-none" />
                
                {/* Shimmer */}
                <div className="absolute inset-0 opacity-0 group-hover/action:opacity-100 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/action:translate-x-full transition-transform duration-500" />
                </div>

                {/* Glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${color} blur-lg -z-10`}
                />

                <Icon size={20} className="relative z-10 drop-shadow-lg" strokeWidth={2} />
                <span className="relative z-10 text-[10px] drop-shadow-lg whitespace-nowrap">
                  {action.label}
                </span>
              </motion.button>
            );
          })}
        </>
      )}
    </AnimatePresence>
  );
}
