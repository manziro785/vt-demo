import { SlowMotionSwitch } from '@/features/toggle-animations';
import { SupportInfo } from './SupportInfo.jsx';
import './footer.css';

export function Footer({ onNavigate }) {
  return (
    <footer className="foot">
      <div className="foot-inner">
        <div>
          <p className="foot-brand">Он-Арча</p>
          <p className="muted">Демо-магазин к семинару о View Transitions API. Товары, цены и сроки условные.</p>
          <p className="foot-links">
            <a href="about.html">О кооперативе</a>
            <button className="link-btn" onClick={() => onNavigate('compare')}>Сравнение с Framer Motion</button>
          </p>
        </div>
        <div className="foot-controls">
          <SlowMotionSwitch />
          <SupportInfo />
        </div>
      </div>
    </footer>
  );
}
