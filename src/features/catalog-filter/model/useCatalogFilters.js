import { useDeferredValue, useState, startTransition } from 'react';
import { PRODUCTS } from '@/entities/product';
import { filterProducts } from '../lib/filterProducts.js';

// Состояние фильтров живёт на странице магазина, а не в виджете каталога:
// каталог размонтируется, пока открыта страница товара, а фильтры должны сохраниться.
export function useCatalogFilters() {
  const [cat, setCat] = useState('all');
  const [sort, setSort] = useState('popular');
  const [query, setQuery] = useState('');
  // Поиск: ввод обновляется сразу, а список — через useDeferredValue.
  // Отложенное обновление React считает Transition и анимирует.
  const q = useDeferredValue(query.trim().toLowerCase());

  return {
    cat,
    sort,
    query,
    products: filterProducts(PRODUCTS, { cat, q, sort }),
    // Фильтры и сортировка — внутри startTransition, чтобы сетка перестроилась с анимацией.
    pickCat: (id) => startTransition(() => setCat(id)),
    pickSort: (id) => startTransition(() => setSort(id)),
    setQuery,
  };
}
