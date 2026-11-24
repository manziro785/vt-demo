export function PartCard({ animalLabel, part }) {
  return (
    <article className="part-card">
      <p className="part-animal">{animalLabel}</p>
      <h3 className="part-name">{part.name}</h3>
      <dl className="part-facts">
        <div><dt>Для чего</dt><dd>{part.use}</dd></div>
        <div><dt>Как готовить</dt><dd>{part.how}</dd></div>
      </dl>
    </article>
  );
}
