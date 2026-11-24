import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import { useSettings } from '@/shared/lib/view-transition';
import { formatPrice } from '@/shared/lib/format';
import { getProductById } from '@/entities/product';
import { TILES, motionTransition } from '../config/demo.js';

export function MotionExpand() {
  const { slow } = useSettings();
  const [open, setOpen] = useState(null);
  const p = getProductById(open);
  const transition = motionTransition(slow);
  return (
    <LayoutGroup id="motion-expand">
      <div className="cmp-widget">
        <div className="tiles">
          {TILES.map((t) => (
            <button key={t.id} className="tile" onClick={() => setOpen(t.id)} aria-label={t.name}>
              {open === t.id ? <div className="tile-ph" /> : (
                <motion.img layoutId={`m-tile-${t.id}`} transition={transition} src={t.img} alt="" />
              )}
            </button>
          ))}
        </div>
        <AnimatePresence>
          {p && (
            <motion.div className="expanded" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transition}>
              <motion.img layoutId={`m-tile-${p.id}`} transition={transition} src={p.img} alt={p.name} />
              <div className="expanded-info">
                <p className="expanded-name">{p.name}</p>
                <p className="muted num">{formatPrice(p.price)} / кг</p>
                <button className="link-btn" onClick={() => setOpen(null)}>Свернуть</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </LayoutGroup>
  );
}
