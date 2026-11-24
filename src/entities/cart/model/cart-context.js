import { createContext, useContext } from 'react';

export const CartContext = createContext(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart нужно вызывать внутри <CartProvider>');
  return ctx;
}
