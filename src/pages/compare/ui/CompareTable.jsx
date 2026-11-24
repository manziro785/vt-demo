import { MOTION_KB } from '../config/bundle-size.js';
import { CODE_VT, CODE_MOTION, lineCount } from '../config/code-samples.js';

export function CompareTable() {
  return (
    <div className="cmp-table-wrap">
      <table className="cmp-table">
        <thead>
          <tr><th>Что сравниваем</th><th>View Transitions</th><th>Framer Motion</th></tr>
        </thead>
        <tbody>
          <tr><td>Вес в бандле</td><td className="good">0 КБ, встроен в браузер</td><td className="num">≈ {MOTION_KB} КБ (gzip)</td></tr>
          <tr><td>Код общего элемента</td><td className="num">{lineCount(CODE_VT)} строк</td><td className="num">{lineCount(CODE_MOTION)} строк</td></tr>
          <tr><td>Переходы между страницами</td><td className="good">Да, одной строкой CSS</td><td className="bad">Нет, только внутри React</td></tr>
          <tr><td>Клик посреди анимации</td><td className="bad">Не доходит, следующая анимация начнётся с нуля</td><td className="good">Подхватывает с текущего места</td></tr>
          <tr><td>Жесты, перетаскивание, пружины</td><td className="bad">Нет</td><td className="good">Да</td></tr>
        </tbody>
      </table>
    </div>
  );
}
