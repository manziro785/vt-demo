import { useState, startTransition, addTransitionType } from 'react';
import { VT, SLIDE } from '@/shared/lib/view-transition';
import { useCart, toCartItems, cartTotal } from '@/entities/cart';
import { getRegionById } from '@/entities/region';
import { STEPS, DEMO_CART, FREE_DELIVERY_FROM } from '../config/steps.js';
import { StepsProgress } from './StepsProgress.jsx';
import { CartStep } from './steps/CartStep.jsx';
import { DeliveryStep } from './steps/DeliveryStep.jsx';
import { PaymentStep } from './steps/PaymentStep.jsx';
import { DoneStep } from './steps/DoneStep.jsx';
import './checkout.css';

export function CheckoutPage() {
  const { cart } = useCart();
  const [step, setStep] = useState(0);
  const [pay, setPay] = useState('card');
  const [regionId, setRegionId] = useState('bishkek');

  // «Далее» — тип forward, «Назад» — back: шаг уезжает в нужную сторону.
  function go(delta) {
    const next = step + delta;
    if (next < 0 || next >= STEPS.length) return;
    startTransition(() => {
      addTransitionType(delta > 0 ? 'forward' : 'back');
      setStep(next);
    });
  }

  const items = toCartItems(cart.length ? cart : DEMO_CART);
  const subtotal = cartTotal(items);
  const region = getRegionById(regionId);
  const delivery = region.id === 'bishkek' && subtotal >= FREE_DELIVERY_FROM ? 0 : region.price;

  return (
    <div className="checkout">
      <h1 className="page-title">Оформление заказа</h1>
      <StepsProgress step={step} />

      <div className="step-frame">
        {/* key={step}: каждый шаг — новый элемент, срабатывают enter/exit */}
        <VT key={step} enter={SLIDE.enter} exit={SLIDE.exit} default="none">
          <section className="step-body">
            {step === 0 && <CartStep items={items} subtotal={subtotal} isDemo={!cart.length} />}
            {step === 1 && <DeliveryStep region={region} delivery={delivery} onRegionChange={setRegionId} />}
            {step === 2 && <PaymentStep pay={pay} onPayChange={setPay} total={subtotal + delivery} />}
            {step === 3 && <DoneStep region={region} />}
          </section>
        </VT>
      </div>

      <div className="step-actions">
        <button className="ghost" onClick={() => go(-1)} disabled={step === 0}>← Назад</button>
        <button className="buy" onClick={() => go(1)} disabled={step === STEPS.length - 1}>Далее</button>
      </div>
    </div>
  );
}
