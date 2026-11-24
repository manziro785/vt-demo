import { useState, startTransition, addTransitionType } from 'react';
import { VT, SLIDE, directionBetween } from '@/shared/lib/view-transition';
import { ANIMALS, ANIMAL_ORDER, defaultPartId } from '../config/animals.js';
import { AnimalChart } from './AnimalChart.jsx';
import { PartCard } from './PartCard.jsx';
import './cuts-chart.css';

export function CutsChart() {
  const [animal, setAnimal] = useState('cow');
  const [partId, setPartId] = useState(defaultPartId('cow'));
  const a = ANIMALS[animal];
  const part = a.parts.find((p) => p.id === partId) || a.parts[2];

  // Тип перехода forward/back выбирает, в какую сторону уедет схема (см. SLIDE).
  function pickAnimal(next) {
    if (next === animal) return;
    startTransition(() => {
      addTransitionType(directionBetween(ANIMAL_ORDER, animal, next));
      setAnimal(next);
      setPartId(defaultPartId(next));
    });
  }
  const pickPart = (id) => startTransition(() => setPartId(id));

  return (
    <section className="cuts" id="cuts">
      <div className="section-head">
        <p className="eyebrow">Разделка</p>
        <h2 className="section-title">Какая часть для чего</h2>
        <p className="section-sub">Нажмите на часть туши — расскажем, что из неё готовить и как.</p>
      </div>
      <div className="animal-tabs" role="tablist" aria-label="Животное">
        {ANIMAL_ORDER.map((k) => (
          <button key={k} role="tab" aria-selected={animal === k} className="filter" onClick={() => pickAnimal(k)}>{ANIMALS[k].label}</button>
        ))}
      </div>
      <div className="cuts-body">
        <div className="chart-frame">
          {/* key={animal}: новое животное — новый элемент, срабатывают enter/exit */}
          <VT key={animal} enter={SLIDE.enter} exit={SLIDE.exit} default="none">
            <AnimalChart animal={a} activePartId={part.id} onPick={pickPart} />
          </VT>
        </div>
        <div className="part-frame">
          <VT key={animal + part.id} enter="part-in" exit="part-out" default="none">
            <PartCard animalLabel={a.label} part={part} />
          </VT>
          <div className="part-chips">
            {a.parts.map((p) => (
              <button key={p.id} className="chip" aria-pressed={p.id === part.id} onClick={() => pickPart(p.id)}>{p.name}</button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
