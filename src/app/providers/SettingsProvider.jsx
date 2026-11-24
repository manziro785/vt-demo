import { useCallback, useEffect, useState } from 'react';
import { SettingsContext } from '@/shared/lib/view-transition';
import { useAnimationHotkeys } from '@/features/toggle-animations';

export function SettingsProvider({ children }) {
  const [vtOn, setVtOn] = useState(true);
  const [slow, setSlow] = useState(false);
  // useCallback — чтобы хоткеи не переподписывались на каждый рендер.
  const toggleVt = useCallback(() => setVtOn((v) => !v), []);
  const toggleSlow = useCallback(() => setSlow((v) => !v), []);

  // Замедление ×5 — одна CSS-переменная, её читают все ::view-transition-* правила.
  useEffect(() => {
    document.documentElement.style.setProperty('--vt-dur', slow ? '1750ms' : '350ms');
  }, [slow]);

  useAnimationHotkeys({ onToggleVt: toggleVt, onToggleSlow: toggleSlow });

  return (
    <SettingsContext.Provider value={{ vtOn, slow, toggleVt, toggleSlow }}>
      {children}
    </SettingsContext.Provider>
  );
}
