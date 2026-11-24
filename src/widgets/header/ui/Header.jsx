import { ThemeToggle } from '@/features/toggle-theme';
import { AnimationsSwitch } from '@/features/toggle-animations';
import { CartButton } from './CartButton.jsx';
import './header.css';

export function Header({ tab, onNavigate, onCartOpen }) {
  return (
    <header className="top">
      <div className="top-inner">
        <button className="brand" onClick={() => onNavigate('shop')}>Он-Арча<span className="brand-sub">мясная лавка</span></button>
        <nav className="nav" aria-label="Разделы">
          <button className="nav-link" onClick={() => onNavigate('shop', 'catalog')}>Каталог</button>
          <button className="nav-link" onClick={() => onNavigate('shop', 'cuts')}>Разделка</button>
          <button className="nav-link" onClick={() => onNavigate('shop', 'delivery')}>Доставка</button>
          <a className="nav-link" href="about.html">О кооперативе</a>
          <button className="nav-link" aria-current={tab === 'compare' ? 'page' : undefined} onClick={() => onNavigate('compare')}>Сравнение</button>
        </nav>
        <div className="top-actions">
          <ThemeToggle />
          <AnimationsSwitch />
          <CartButton onClick={onCartOpen} />
        </div>
      </div>
    </header>
  );
}
