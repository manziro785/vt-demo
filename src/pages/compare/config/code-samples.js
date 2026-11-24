export const CODE_VT = `startTransition(() => setOpen(id));

<ViewTransition name={\`tile-\${id}\`}>
  <img src={img} />
</ViewTransition>`;

export const CODE_MOTION = `<LayoutGroup>
  <motion.img layoutId={\`tile-\${id}\`} src={img} />
  <AnimatePresence>
    {open && <motion.div exit={{ opacity: 0 }}>…</motion.div>}
  </AnimatePresence>
</LayoutGroup>`;

export const lineCount = (s) => s.split('\n').length;
