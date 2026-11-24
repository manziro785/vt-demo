import { VT } from '@/shared/lib/view-transition';
import { formatPrice } from '@/shared/lib/format';
import { productPhotoVt, productTitleVt } from '../lib/vt-names.js';
import './product-card.css';

// Внешний VT без имени — анимирует перестановку карточки в сетке при фильтрах и сортировке.
export function ProductCard({ product, onOpen }) {
  return (
    <VT>
      <li className="item">
        <button className="item-btn" onClick={onOpen}>
          <VT name={productPhotoVt(product.id)}>
            <div className="photo"><img src={product.img} alt={product.name} loading="lazy" /></div>
          </VT>
          <span className="item-kind">{product.kind}</span>
          <VT name={productTitleVt(product.id)}>
            <span className="item-title">{product.name}</span>
          </VT>
          <span className="item-price num">{formatPrice(product.price)} / кг</span>
        </button>
      </li>
    </VT>
  );
}
