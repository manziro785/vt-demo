import { formatPrice } from '@/shared/lib/format';
import { PAY_METHODS } from '../../config/steps.js';

export function PaymentStep({ pay, onPayChange, total }) {
  return (
    <div className="form">
      {PAY_METHODS.map(([v, l]) => (
        <label key={v} className="radio"><input type="radio" name="pay" checked={pay === v} onChange={() => onPayChange(v)} />{l}</label>
      ))}
      <p className="total">К оплате <b className="num">{formatPrice(total)}</b></p>
    </div>
  );
}
