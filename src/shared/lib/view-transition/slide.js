// Направленный «слайд»: класс анимации выбирается по типу перехода,
// который задаём через addTransitionType('forward' | 'back').
// Используется для вкладок, схемы разделки и шагов оформления.
export const SLIDE = {
  enter: { forward: 'from-right', back: 'from-left', default: 'none' },
  exit: { forward: 'to-left', back: 'to-right', default: 'none' },
};

export const directionBetween = (order, from, to) => (order.indexOf(to) > order.indexOf(from) ? 'forward' : 'back');
