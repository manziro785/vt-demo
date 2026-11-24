import { startTransition } from 'react';
import { flushSync } from 'react-dom';
import { useSettings, supportsVT } from '@/shared/lib/view-transition';
import { useCart, createCartLine } from '@/entities/cart';
import { useCartFly } from './cart-fly-context.js';

export const CART_FLY_VT = 'cart-fly';

// Полёт фото в корзину — нативный document.startViewTransition:
// у фото «до» и у маленькой картинки в шапке «после» одно имя cart-fly.
export function useAddToCart() {
  const { vtOn } = useSettings();
  const { addLine } = useCart();
  const { setFlyingImg } = useCartFly();

  return function addToCart(product, weight, imgEl) {
    const line = createCartLine(product.id, weight);
    if (!vtOn || !supportsVT() || !imgEl) {
      startTransition(() => addLine(line));
      return;
    }
    imgEl.style.viewTransitionName = CART_FLY_VT;
    const t = document.startViewTransition(() => {
      // flushSync: браузер делает снимок «после» сразу после колбэка,
      // поэтому React должен успеть отрисовать изменения синхронно.
      flushSync(() => {
        addLine(line);
        setFlyingImg(product.img);
      });
      imgEl.style.viewTransitionName = '';
    });
    t.finished.finally(() => setFlyingImg(null));
  };
}
