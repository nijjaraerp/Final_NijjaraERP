import { Settings, FileText } from 'lucide-react';
import { GlossyButton } from './GlossyButton';

export function AdminActions() {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-3">
      <GlossyButton
        icon={Settings}
        label="Run Setup"
        onClick={() => console.log('Run Setup')}
        size="md"
      />
      <GlossyButton
        icon={FileText}
        label="Open Logs"
        onClick={() => console.log('Open Logs')}
        size="md"
      />
    </div>
  );
}
