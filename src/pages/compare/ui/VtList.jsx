import { useState, startTransition } from 'react';
import { VT } from '@/shared/lib/view-transition';
import { formatPrice } from '@/shared/lib/format';
import { ROWS } from '../config/demo.js';
import { shuffle } from '../lib/shuffle.js';

export function VtList() {
  const [rows, setRows] = useState(ROWS);
  return (
    <div className="cmp-widget">
      <ul className="rows">
        {rows.map((r) => (
          <VT key={r.id}>
            <li className="row-item"><span>{r.name}</span><span className="num muted">{formatPrice(r.price)}</span></li>
          </VT>
        ))}
      </ul>
      <button className="ghost small" onClick={() => startTransition(() => setRows(shuffle))}>Перемешать</button>
    </div>
  );
}
