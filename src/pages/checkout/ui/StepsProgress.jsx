import { VT } from '@/shared/lib/view-transition';
import { STEPS } from '../config/steps.js';

// Полоса с постоянным именем: при смене шага анимируется её ширина.
export function StepsProgress({ step }) {
  return (
    <div className="steps-head">
      <ol className="steps-labels">
        {STEPS.map((s, i) => (
          <li key={s} className={i <= step ? 'is-done' : ''}><span className="num">{i + 1}</span> {s}</li>
        ))}
      </ol>
      <div className="progress">
        <VT name="progress-bar">
          <div className="progress-bar" style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
        </VT>
      </div>
    </div>
  );
}
