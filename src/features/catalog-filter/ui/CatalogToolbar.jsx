import { CATEGORIES } from '@/entities/product';
import { SORTS } from '../config/sorts.js';
import './catalog-filter.css';

export function CatalogToolbar({ cat, sort, onCat, onSort }) {
  return (
    <div className="toolbar">
      <div className="filters" role="group" aria-label="Категория">
        {CATEGORIES.map((c) => (
          <button key={c.id} className="filter" aria-pressed={cat === c.id} onClick={() => onCat(c.id)}>{c.label}</button>
        ))}
      </div>
      <div className="filters" role="group" aria-label="Сортировка">
        {SORTS.map((s) => (
          <button key={s.id} className="filter sort" aria-pressed={sort === s.id} onClick={() => onSort(s.id)}>{s.label}</button>
        ))}
      </div>
    </div>
  );
}
