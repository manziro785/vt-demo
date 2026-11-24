import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
createRoot(document.getElementById('root')).render(<LayoutGroup><AnimatePresence>{<motion.img layoutId="x" />}</AnimatePresence><motion.li layout /></LayoutGroup>);
