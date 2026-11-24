import { useEffect } from 'react';

// Горячие клавиши для доклада: A — анимации вкл/выкл, S — замедление.
export function useAnimationHotkeys({ onToggleVt, onToggleSlow }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.target.closest('input, textarea, select') || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.code === 'KeyA') onToggleVt();
      if (e.code === 'KeyS') onToggleSlow();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onToggleVt, onToggleSlow]);
}
