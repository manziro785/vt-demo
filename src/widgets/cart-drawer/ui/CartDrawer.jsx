import { startTransition } from 'react';
import { VT } from '@/shared/lib/view-transition';
import { formatPrice } from '@/shared/lib/format';
import { useCart, toCartItems, cartTotal, weightLabel, CartThumb } from '@/entities/cart';
import './cart-drawer.css';

// Шторка и подложка появляются/исчезают через enter/exit с классами drawer-*/fade-*.
export function CartDrawer({ onClose, onCheckout }) {
  const { cart, removeLine } = useCart();
  const items = toCartItems(cart);
  const total = cartTotal(items);
  // startTransition — чтобы строка исчезла с анимацией exit.
  const remove = (key) => startTransition(() => removeLine(key));

  return (
    <>
      <VT enter="fade-in" exit="fade-out" default="none">
        <div className="backdrop" onClick={onClose} />
      </VT>
      <VT enter="drawer-in" exit="drawer-out" default="none">
        <aside className="drawer" aria-label="Корзина">
          <div className="drawer-head">
            <h2 className="drawer-title">Корзина</h2>
            <button className="link-btn" onClick={onClose}>Закрыть</button>
          </div>
          {items.length === 0 && <p className="muted">Пока пусто. Добавьте что-нибудь из каталога.</p>}
          <ul className="drawer-list">
            {items.map((l) => (
              <VT key={l.key}>
                <li className="drawer-line">
                  <CartThumb src={l.product.img} />
                  <div className="drawer-line-text">
                    <span>{l.product.name}</span>
                    <span className="muted num">{weightLabel(l.weight)} · {formatPrice(l.product.price * l.weight)}</span>
                  </div>
                  <button className="link-btn" onClick={() => remove(l.key)}>Убрать</button>
                </li>
              </VT>
            ))}
          </ul>
          <div className="drawer-foot">
            <p className="total">Итого <b className="num">{formatPrice(total)}</b></p>
            <button className="buy" disabled={!items.length} onClick={onCheckout}>Оформить заказ</button>
          </div>
        </aside>
      </VT>
    </>
  );
}
