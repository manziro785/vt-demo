import { useState, startTransition } from 'react';
import { VT, SLIDE } from '@/shared/lib/view-transition';
import { ShopPage } from '@/pages/shop';
import { ComparePage } from '@/pages/compare';
import { CheckoutPage } from '@/pages/checkout';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { CartDrawer } from '@/widgets/cart-drawer';
import { useTabNavigation } from '../model/useTabNavigation.js';

const PAGES = { shop: ShopPage, compare: ComparePage, checkout: CheckoutPage };

export function AppLayout() {
  const [cartOpen, setCartOpen] = useState(false);
  const { tab, goTab } = useTabNavigation({ onNavigate: () => setCartOpen(false) });
  // Открытие/закрытие корзины — внутри startTransition, иначе enter/exit шторки не сработают.
  const toggleCart = (open) => startTransition(() => setCartOpen(open));
  const Page = PAGES[tab];

  return (
    <>
      <Header tab={tab} onNavigate={goTab} onCartOpen={() => toggleCart(true)} />

      {/* key={tab}: новая вкладка — новый элемент, срабатывают enter/exit с типом forward/back */}
      <VT key={tab} enter={SLIDE.enter} exit={SLIDE.exit} default="none">
        <main className="page">
          <Page />
        </main>
      </VT>

      <Footer onNavigate={goTab} />

      {cartOpen && <CartDrawer onClose={() => toggleCart(false)} onCheckout={() => goTab('checkout')} />}
    </>
  );
}
