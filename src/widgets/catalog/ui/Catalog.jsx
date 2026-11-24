import { ProductCard } from '@/entities/product';
import { CatalogToolbar, SearchInput } from '@/features/catalog-filter';
import './catalog.css';

// filters — результат useCatalogFilters(), состояние держит страница (см. комментарий в хуке).
export function Catalog({ filters, onOpen }) {
  const { cat, sort, query, products, pickCat, pickSort, setQuery } = filters;
  return (
    <section id="catalog" className="catalog">
      <div className="section-head row-head">
        <div>
          <p className="eyebrow">Каталог</p>
          <h2 className="section-title">Сегодня на прилавке</h2>
        </div>
        <SearchInput value={query} onChange={setQuery} />
      </div>
      <CatalogToolbar cat={cat} sort={sort} onCat={pickCat} onSort={pickSort} />

      <ul className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onOpen={() => onOpen(p.id)} />
        ))}
      </ul>
      {products.length === 0 && <p className="empty">Ничего не нашли. Попробуйте «рибай» или «як».</p>}
    </section>
  );
}
