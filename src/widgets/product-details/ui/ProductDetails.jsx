import { useRef, useState } from 'react';
import { VT } from '@/shared/lib/view-transition';
import { formatPrice } from '@/shared/lib/format';
import { WEIGHTS, productPhotoVt, productTitleVt } from '@/entities/product';
import { useAddToCart } from '@/features/add-to-cart';
import './product-details.css';

// Имена photo-/title- совпадают с карточкой в каталоге — фото и заголовок «перелетают».
export function ProductDetails({ product, onBack }) {
  const [weight, setWeight] = useState(1);
  const [added, setAdded] = useState(false);
  const imgRef = useRef(null);
  const addToCart = useAddToCart();

  function add() {
    addToCart(product, weight, imgRef.current);
    setAdded(true);
  }

  return (
    <div className="detail-wrap">
      <button className="back" onClick={onBack}>← Весь каталог</button>
      <div className="detail">
        <VT name={productPhotoVt(product.id)}>
          <div className="photo big"><img ref={imgRef} src={product.img} alt={product.name} /></div>
        </VT>
        <div className="detail-info">
          <p className="detail-kind">{product.kind}</p>
          <VT name={productTitleVt(product.id)}>
            <h1 className="detail-title">{product.name}</h1>
          </VT>
          <p className="detail-price"><span className="num">{formatPrice(product.price * weight)}</span><span className="per">{formatPrice(product.price)} за кг</span></p>
          <div className="weights" role="group" aria-label="Вес">
            {WEIGHTS.map((w) => (
              <button key={w.id} className="weight" aria-pressed={weight === w.id} onClick={() => setWeight(w.id)}>{w.label}</button>
            ))}
          </div>
          <button className="buy" onClick={add}>{added ? 'Добавить ещё' : 'В корзину'}</button>
          <p className="detail-desc">{product.desc}</p>
          <ul className="facts">
            <li>Охлаждённое, не замораживали</li>
            <li>Доставка по всему Кыргызстану в рефрижераторе</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
