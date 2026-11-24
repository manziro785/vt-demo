import { useCartFly } from '../model/cart-fly-context.js';
import { CART_FLY_VT } from '../model/useAddToCart.js';
import './cart-fly.css';

// Точка «приземления» фото: появляется в шапке только на время полёта.
export function CartFlyTarget() {
  const { flyingImg } = useCartFly();
  if (!flyingImg) return null;
  return <img className="fly-thumb" src={flyingImg} alt="" style={{ viewTransitionName: CART_FLY_VT }} />;
}
