// Сколько Motion добавляет к бандлу (gzip), замерено скриптом measure/run.mjs:
// минимальное React-приложение без Motion — 66,0 КБ, то же с motion/react
// (motion, AnimatePresence, LayoutGroup, layout-анимации) — 111,8 КБ. Разница ≈ 45,8 КБ.
// Версии: react 19.3.1, motion 14.10.1, сборка Vite 8.
export const MOTION_KB = 46;
