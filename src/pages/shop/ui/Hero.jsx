import heroImg from "../assets/hero.webp";
import "./hero.css";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="eyebrow">Мясная лавка · Бишкек</p>
        <h1 className="hero-title">Свежее мясо с пастбищ Нарына</h1>
        <p className="hero-sub">
          Говядина, як, птица и деликатесы. Нарежем как скажете, привезём в
          любую область.
        </p>
        <div className="hero-stats">
          <div>
            <b className="num">7</b>
            <span>областей доставки</span>
          </div>
          <div>
            <b className="num">+2…+4 °C</b>
            <span>в пути</span>
          </div>
          <div>
            <b className="num">24 ч</b>
            <span>от фермы до прилавка</span>
          </div>
        </div>
      </div>
      <div className="hero-photo">
        <img
          src={heroImg}
          alt="Стейк рибай на каменной доске с чесноком и розмарином"
        />
      </div>
    </section>
  );
}
