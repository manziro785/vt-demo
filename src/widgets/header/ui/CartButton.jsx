import { VT } from '@/shared/lib/view-transition';
import { useCart } from '@/entities/cart';
import { CartFlyTarget } from '@/features/add-to-cart';

export function CartButton({ onClick }) {
  const { cart } = useCart();
  return (
    <button className="cart-btn" onClick={onClick}>
      Корзина
      <span className="count-wrap">
        <VT update="pop"><span className="count num">{cart.length}</span></VT>
        <CartFlyTarget />
      </span>
    </button>
  );
}
