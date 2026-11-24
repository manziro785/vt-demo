// Перемешивание, которое гарантированно меняет порядок (иначе анимации не будет видно).
export function shuffle(list) {
  const l = [...list];
  for (let i = l.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [l[i], l[j]] = [l[j], l[i]];
  }
  if (l.every((x, i) => x.id === list[i].id)) l.push(l.shift());
  return l;
}
