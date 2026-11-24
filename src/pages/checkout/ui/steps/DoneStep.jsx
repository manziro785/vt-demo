export function DoneStep({ region }) {
  return (
    <div className="done">
      <p className="done-title">Заказ оформлен</p>
      <p className="muted">Привезём: {region.days.toLowerCase()}, {region.name}. Это демо, заказ никуда не отправлен.</p>
    </div>
  );
}
