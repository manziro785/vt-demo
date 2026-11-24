function sortList(list, sort) {
  const l = [...list];
  if (sort === 'cheap') l.sort((a, b) => a.price - b.price);
  if (sort === 'expensive') l.sort((a, b) => b.price - a.price);
  if (sort === 'name') l.sort((a, b) => a.name.localeCompare(b.name, 'ru'));
  return l;
}

const matches = (p, cat, q) => (cat === 'all' || p.cat === cat) && (!q || (p.name + ' ' + p.kind).toLowerCase().includes(q));

export const filterProducts = (products, { cat, q, sort }) => sortList(products.filter((p) => matches(p, cat, q)), sort);
