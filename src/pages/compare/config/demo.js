import { PRODUCTS } from '@/entities/product';

// Данные и настройки, общие для виджетов View Transitions и Motion — чтобы сравнение было честным.
export const TILES = PRODUCTS.slice(0, 3);
export const ROWS = PRODUCTS.slice(0, 5);

// Та же кривая, что у ::view-transition-* в app/styles/view-transitions.css.
const EASE = [0.2, 0.7, 0.2, 1];
export const motionTransition = (slow) => ({ duration: slow ? 1.75 : 0.35, ease: EASE });
