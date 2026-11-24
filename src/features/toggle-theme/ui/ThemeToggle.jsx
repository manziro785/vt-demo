import { useTheme } from '../model/useTheme.js';
import './theme-toggle.css';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return <button className="theme-btn" onClick={toggleTheme}>{theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}</button>;
}
