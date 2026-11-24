import { useLayoutEffect, useState, startTransition, addTransitionType } from 'react';
import { directionBetween } from '@/shared/lib/view-transition';

// Порядок вкладок задаёт направление слайда: вправо по списку — forward, влево — back.
export const TAB_ORDER = ['shop', 'compare', 'checkout'];

// onNavigate вызывается внутри того же startTransition, что и смена вкладки, —
// например, чтобы закрыть корзину одним переходом.
export function useTabNavigation({ onNavigate }) {
  const [tab, setTab] = useState('shop');

  useLayoutEffect(() => { window.scrollTo(0, 0); }, [tab]);

  function goTab(next, scrollTo) {
    const after = () => scrollTo && requestAnimationFrame(() => document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' }));
    if (next === tab) { after(); return; }
    startTransition(() => {
      addTransitionType(directionBetween(TAB_ORDER, tab, next));
      setTab(next);
      onNavigate();
    });
    // Скроллим к секции, когда анимация смены вкладки уже прошла.
    setTimeout(after, 400);
  }

  return { tab, goTab };
}
