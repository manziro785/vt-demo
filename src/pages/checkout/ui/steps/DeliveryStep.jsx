import { formatPrice } from '@/shared/lib/format';
import { REGIONS } from '@/entities/region';

export function DeliveryStep({ region, delivery, onRegionChange }) {
  return (
    <div className="form">
      <label className="field">Область
        <select id="region" value={region.id} onChange={(e) => onRegionChange(e.target.value)}>
          {REGIONS.map((r) => <option key={r.id} value={r.id}>{r.name}</option>)}
        </select>
      </label>
      <label className="field">Адрес<input id="addr" placeholder="Город, улица, дом" /></label>
      <label className="field">Нарезка<input id="cut" placeholder="Например: стейки по 3 см" /></label>
      <p className="muted">Срок: {region.days.toLowerCase()} · доставка {delivery ? formatPrice(delivery) : 'бесплатно'}</p>
    </div>
  );
}
