import { createContext, useContext } from 'react';

// Настройки демо: анимации вкл/выкл и замедление. Состояние живёт в app/providers,
// здесь только сам контекст — его читают компоненты всех слоёв, включая shared/VT.
export const SettingsContext = createContext({
  vtOn: true,
  slow: false,
  toggleVt: () => {},
  toggleSlow: () => {},
});

export const useSettings = () => useContext(SettingsContext);
