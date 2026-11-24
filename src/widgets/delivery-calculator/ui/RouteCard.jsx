import { VT } from '@/shared/lib/view-transition';
import { formatPrice } from '@/shared/lib/format';
import { MAX_KM } from '@/entities/region';

// Срок и полоса с постоянными именами: при смене региона браузер анимирует update —
// текст срока «всплывает» (класс part-in), а полоса плавно меняет ширину.
export function RouteCard({ region }) {
  return (
    <div className="route-card">
      <VT name="route-days" update="part-in">
        <p className="route-days">{region.days}</p>
      </VT>
      <p className="route-to">Бишкек → {region.city}</p>
      <div className="route-track" aria-hidden="true">
        <VT name="route-bar">
          <div className="route-bar" style={{ width: `${Math.max(6, (region.km / MAX_KM) * 100)}%` }} />
        </VT>
      </div>
      <dl className="route-facts">
        <div><dt>Расстояние</dt><dd className="num">≈ {region.km} км</dd></div>
        <div><dt>Доставка</dt><dd className="num">{region.price ? formatPrice(region.price) : 'Бесплатно от 3 000 сом'}</dd></div>
      </dl>
    </div>
  );
}
