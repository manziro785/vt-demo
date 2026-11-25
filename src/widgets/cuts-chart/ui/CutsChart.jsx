import { useState, startTransition, addTransitionType } from "react";
import { VT, SLIDE, directionBetween } from "@/shared/lib/view-transition";
import { ANIMALS, ANIMAL_ORDER, defaultPartId } from "../config/animals.js";
import { AnimalChart } from "./AnimalChart.jsx";
import { PartCard } from "./PartCard.jsx";
import "./cuts-chart.css";

export function CutsChart() {
  const [animal, setAnimal] = useState("cow");
  const [partId, setPartId] = useState(defaultPartId("cow"));
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

  return <></>;
}
