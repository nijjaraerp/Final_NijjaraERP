import { LogIn, LogOut, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { GlossyButton } from './GlossyButton';

export function GlobalActions() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <GlossyButton
        icon={passwordVisible ? Eye : EyeOff}
        label="Password"
        onClick={() => setPasswordVisible(!passwordVisible)}
        size="sm"
      />
      {isLoggedIn ? (
        <GlossyButton
          icon={LogOut}
          label="Logout"
          onClick={() => setIsLoggedIn(false)}
          variant="danger"
          size="sm"
        />
      ) : (
        <GlossyButton
          icon={LogIn}
          label="Login"
          onClick={() => setIsLoggedIn(true)}
          variant="primary"
          size="sm"
        />
      )}
    </div>
  );
}
