import { useState, startTransition } from "react";
import { REGIONS, getRegionById } from "@/entities/region";
import { RouteCard } from "./RouteCard.jsx";
import "./delivery-calculator.css";

export function DeliveryCalculator() {
  const [regionId, setRegionId] = useState("issykkul");
  const region = getRegionById(regionId);
  const pick = (id) => startTransition(() => setRegionId(id));

  return (
    <section className="delivery" id="delivery">
      <div className="section-head">
        <p className="eyebrow">Доставка</p>
        <h2 className="section-title">Везём по всей стране</h2>
        <p className="section-sub">
          Рефрижератор от +2 до +4 °C. Выберите область, чтобы узнать срок и
          цену.
        </p>
      </div>
      <div className="delivery-body">
        <ul className="regions">
          {REGIONS.map((x) => (
            <li key={x.id}>
              <button
                className="region"
                aria-pressed={x.id === regionId}
                onClick={() => pick(x.id)}
              >
                <span>{x.name}</span>
                <span className="region-city">{x.city}</span>
              </button>
            </li>
          ))}
        </ul>
        <RouteCard region={region} />
      </div>
    </section>
  );
}
