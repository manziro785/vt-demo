export function AnimalChart({ animal, activePartId, onPick }) {
  return (
    <svg className="chart" viewBox="0 0 600 320" role="group" aria-label={`Схема разделки: ${animal.label}`}>
      <polygon className="head" points={animal.head} />
      {animal.fringe && <polygon className="fringe" points={animal.fringe} />}
      {animal.parts.map((p) => p.pts.map((pts, i) => (
        <polygon key={p.id + i} points={pts} className={`part ${p.id === activePartId ? 'on' : ''}`}
          tabIndex={i === 0 ? 0 : -1} role="button" aria-label={p.name} aria-pressed={p.id === activePartId}
          onClick={() => onPick(p.id)}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onPick(p.id); } }} />
      )))}
      {animal.hump && <polygon className={`part ${activePartId === 'chuck' ? 'on' : ''}`} points={animal.hump} onClick={() => onPick('chuck')} aria-hidden="true" />}
    </svg>
  );
}
