import { formatPrice } from '@/shared/lib/format';
import { weightLabel, CartThumb } from '@/entities/cart';

export function CartStep({ items, subtotal, isDemo }) {
  return (
    <>
      {isDemo && <p className="muted">Корзина пуста, поэтому для примера показан один товар.</p>}
      <ul className="cart-list">
        {items.map((l) => (
          <li key={l.key}>
            <CartThumb src={l.product.img} />
            <span className="cart-name">{l.product.name}<span className="muted"> · {weightLabel(l.weight)}</span></span>
            <span className="num">{formatPrice(l.product.price * l.weight)}</span>
          </li>
        ))}
      </ul>
      <p className="total">Товары <b className="num">{formatPrice(subtotal)}</b></p>
    </>
  );
}
