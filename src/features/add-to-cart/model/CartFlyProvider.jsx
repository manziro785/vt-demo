import { useState } from 'react';
import { CartFlyContext } from './cart-fly-context.js';

export function CartFlyProvider({ children }) {
  const [flyingImg, setFlyingImg] = useState(null);
  return <CartFlyContext.Provider value={{ flyingImg, setFlyingImg }}>{children}</CartFlyContext.Provider>;
}
