import { useLayoutEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { useSettings, supportsVT } from '@/shared/lib/view-transition';

// Тот же ключ читает public/about.html, чтобы тема совпадала на обеих страницах.
const THEME_KEY = 'onarcha-theme';

function initialTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
  } catch { /* хранилище недоступно */ }
  const attr = document.documentElement.dataset.theme;
  if (attr === 'dark' || attr === 'light') return attr;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useTheme() {
  const { vtOn, slow } = useSettings();
  const [theme, setTheme] = useState(initialTheme);

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem(THEME_KEY, theme); } catch { /* ок */ }
  }, [theme]);

  // Смена темы: круг раскрывается от кнопки. Анимацию задаём сами через
  // Web Animations API, когда псевдоэлементы готовы (промис ready).
  function toggleTheme(e) {
    const next = theme === 'dark' ? 'light' : 'dark';
    const apply = () => flushSync(() => setTheme(next));
    if (!vtOn || !supportsVT()) { apply(); return; }
    const x = e.clientX || window.innerWidth - 40;
    const y = e.clientY || 32;
    const r = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    const root = document.documentElement;
    root.classList.add('theme-switching');
    const t = document.startViewTransition(apply);
    t.ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: slow ? 2200 : 600, easing: 'cubic-bezier(.4, 0, .2, 1)', pseudoElement: '::view-transition-new(root)' },
      );
    });
    t.finished.finally(() => root.classList.remove('theme-switching'));
  }

  return { theme, toggleTheme };
}
