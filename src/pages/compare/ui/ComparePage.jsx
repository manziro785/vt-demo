import { CODE_VT, CODE_MOTION } from "../config/code-samples.js";
import { CompareTable } from "./CompareTable.jsx";
import { VtExpand } from "./VtExpand.jsx";
import { VtList } from "./VtList.jsx";
import { MotionExpand } from "./MotionExpand.jsx";
import { MotionList } from "./MotionList.jsx";
import "./compare.css";

export function ComparePage() {
  return (
    <div className="compare">
      <div className="section-head">
        <p className="eyebrow">Сравнение</p>
        <h1 className="page-title">View Transitions или Framer Motion</h1>
      </div>

      <CompareTable />

      <div className="cmp-grid">
        <section className="cmp-col">
          <h2 className="cmp-title">View Transitions</h2>
          <p className="cmp-label">Общий элемент: нажмите на фото</p>
          <VtExpand />
          <p className="cmp-label">Сортировка: нажмите дважды подряд</p>
          <VtList />
          <pre className="code">
            <code>{CODE_VT}</code>
          </pre>
        </section>
        <section className="cmp-col">
          <h2 className="cmp-title">Framer Motion</h2>
          <p className="cmp-label">Общий элемент: нажмите на фото</p>
          <MotionExpand />
          <p className="cmp-label">Сортировка: нажмите дважды подряд</p>
          <MotionList />
          <pre className="code">
            <code>{CODE_MOTION}</code>
          </pre>
        </section>
      </div>
    </div>
  );
}
