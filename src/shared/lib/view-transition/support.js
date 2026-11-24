export const supportsVT = () => typeof document !== 'undefined' && typeof document.startViewTransition === 'function';
export const supportsCrossDocVT = () => typeof window !== 'undefined' && typeof window.CSSViewTransitionRule !== 'undefined';
export function supportsVTTypes() {
  try { return typeof CSS !== 'undefined' && CSS.supports('selector(:active-view-transition-type(a))'); } catch { return false; }
}
