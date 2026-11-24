import { useState } from 'react';
import { CartContext } from './cart-context.js';

// Только данные корзины. Как анимировать изменение (startTransition, flushSync
// внутри startViewTransition) решает тот, кто вызывает addLine / removeLine.
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addLine = (line) => setCart((c) => [...c, line]);
  const removeLine = (key) => setCart((c) => c.filter((l) => l.key !== key));
  return <CartContext.Provider value={{ cart, addLine, removeLine }}>{children}</CartContext.Provider>;
}
