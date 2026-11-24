import { useState } from 'react';
import { motion } from 'motion/react';
import { useSettings } from '@/shared/lib/view-transition';
import { formatPrice } from '@/shared/lib/format';
import { ROWS, motionTransition } from '../config/demo.js';
import { shuffle } from '../lib/shuffle.js';

export function MotionList() {
  const { slow } = useSettings();
  const [rows, setRows] = useState(ROWS);
  const transition = motionTransition(slow);
  return (
    <div className="cmp-widget">
      <ul className="rows">
        {rows.map((r) => (
          <motion.li layout transition={transition} key={r.id} className="row-item">
            <span>{r.name}</span><span className="num muted">{formatPrice(r.price)}</span>
          </motion.li>
        ))}
      </ul>
      <button className="ghost small" onClick={() => setRows(shuffle)}>Перемешать</button>
    </div>
  );
}
