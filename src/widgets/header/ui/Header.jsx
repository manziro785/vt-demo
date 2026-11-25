import { ThemeToggle } from "@/features/toggle-theme";
import { AnimationsSwitch } from "@/features/toggle-animations";
import { CartButton } from "./CartButton.jsx";
import "./header.css";

export function Header({ tab, onNavigate, onCartOpen }) {
  return (
    <header className="top">
      <div className="top-inner">
        <button className="brand" onClick={() => onNavigate("shop")}>
          Он-Арча<div className="brand-sub">мясная лавка</div>
        </button>
        <nav className="nav" aria-label="Разделы">
          <a className="nav-link" href="about.html">
            О нас
          </a>
          <button
            className="nav-link"
            aria-current={tab === "compare" ? "page" : undefined}
            onClick={() => onNavigate("compare")}
          >
            Сравнение
          </button>
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
