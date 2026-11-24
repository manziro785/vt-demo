import { ViewTransition } from 'react';
import { useSettings } from './settings-context.js';

// Обёртка: когда View Transitions выключены, рендерим детей без <ViewTransition>,
// чтобы показать «как было бы без API».
export function VT({ children, ...props }) {
  const { vtOn } = useSettings();
  if (!vtOn) return <>{children}</>;
  return <ViewTransition {...props}>{children}</ViewTransition>;
}
