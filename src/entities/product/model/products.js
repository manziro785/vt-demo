import p1 from '../assets/p1.webp';
import p2 from '../assets/p2.webp';
import p4 from '../assets/p4.webp';
import p5 from '../assets/p5.webp';
import p6 from '../assets/p6.webp';

// Демо-каталог: названия и цены условные.
export const PRODUCTS = [
  { id: 1, name: 'Рибай мраморный', kind: 'Говядина, стейк', cat: 'beef', price: 2400, img: p1,
    desc: 'Толстый край с выраженной мраморностью. Жарить 3–4 минуты с каждой стороны, затем дать отдохнуть.' },
  { id: 3, name: 'Толстый край яка', kind: 'Як, целый отруб', cat: 'yak', price: 2900, img: p2,
    desc: 'Мясо яка с высокогорных пастбищ: постное, с насыщенным вкусом. Нарежем стейки по вашему размеру.' },
  { id: 4, name: 'Вяленое мясо с перцем', kind: 'Деликатесы', cat: 'deli', price: 3600, img: p4,
    desc: 'Тонкие пластины вяленой говядины в остром маринаде с сычуаньским перцем.' },
  { id: 5, name: 'Филе индейки', kind: 'Птица, охлаждённое', cat: 'bird', price: 850, img: p5,
    desc: 'Грудка без кожи и костей. Подходит для запекания и гриля.' },
  { id: 6, name: 'Форель холодного копчения', kind: 'Деликатесы, рыба', cat: 'deli', price: 2200, img: p6,
    desc: 'Иссык-кульская форель, копчение на ольхе. Нарезка тонкими ломтиками.' },
];

export const getProductById = (id) => PRODUCTS.find((p) => p.id === id);
