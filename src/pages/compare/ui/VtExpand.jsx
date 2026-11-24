import { useState, startTransition } from 'react';
import { VT } from '@/shared/lib/view-transition';
import { formatPrice } from '@/shared/lib/format';
import { getProductById } from '@/entities/product';
import { TILES } from '../config/demo.js';

export function VtExpand() {
  const [open, setOpen] = useState(null);
  const p = getProductById(open);
  const toggle = (id) => startTransition(() => setOpen(id));
  return (
    <div className="cmp-widget">
      <div className="tiles">
        {TILES.map((t) => (
          <button key={t.id} className="tile" onClick={() => toggle(t.id)} aria-label={t.name}>
            {open === t.id ? <div className="tile-ph" /> : (
              <VT name={`vt-tile-${t.id}`}><img src={t.img} alt="" /></VT>
            )}
          </button>
        ))}
      </div>
      {p && (
        <div className="expanded">
          <VT name={`vt-tile-${p.id}`}><img src={p.img} alt={p.name} /></VT>
          <div className="expanded-info">
            <p className="expanded-name">{p.name}</p>
            <p className="muted num">{formatPrice(p.price)} / кг</p>
            <button className="link-btn" onClick={() => toggle(null)}>Свернуть</button>
          </div>
        </div>
      )}
    </div>
  );
}
