import { supportsVT, supportsCrossDocVT, supportsVTTypes } from '@/shared/lib/view-transition';

const yes = (v) => (v ? 'да' : 'нет');

// Индикатор поддержки браузера: показываем, что сайт работает и без API.
export function SupportInfo() {
  return (
    <>
      <p className="support-line">
        Ваш браузер: переходы на странице — <b className={supportsVT() ? 'ok' : 'no'}>{yes(supportsVT())}</b>,
        между страницами — <b className={supportsCrossDocVT() ? 'ok' : 'no'}>{yes(supportsCrossDocVT())}</b>,
        типы переходов — <b className={supportsVTTypes() ? 'ok' : 'no'}>{yes(supportsVTTypes())}</b>
      </p>
      {!supportsVT() && <p className="foot-warn">Сайт работает, просто без анимаций.</p>}
    </>
  );
}
