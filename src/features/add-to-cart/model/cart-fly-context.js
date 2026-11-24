import { createContext, useContext } from 'react';

// Какая картинка сейчас «летит» в корзину. Её показывает CartFlyTarget в шапке.
export const CartFlyContext = createContext(null);

export function useCartFly() {
  const ctx = useContext(CartFlyContext);
  if (!ctx) throw new Error('useCartFly нужно вызывать внутри <CartFlyProvider>');
  return ctx;
}
