import './catalog-filter.css';

export function SearchInput({ value, onChange }) {
  return (
    <label className="search">
      <span className="sr">Поиск</span>
      <input id="search" type="search" placeholder="Поиск: рибай, як, форель…" value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
  );
}
