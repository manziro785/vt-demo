// Доставка из Бишкека. Расстояния по дороге приблизительные, сроки и цены условные.
export const REGIONS = [
  { id: 'bishkek', name: 'Бишкек', city: 'по городу', km: 15, days: 'Сегодня', price: 0 },
  { id: 'chui', name: 'Чуйская область', city: 'Токмок', km: 65, days: 'Завтра', price: 200 },
  { id: 'talas', name: 'Таласская область', city: 'Талас', km: 300, days: '2 дня', price: 400 },
  { id: 'naryn', name: 'Нарынская область', city: 'Нарын', km: 320, days: '2 дня', price: 450 },
  { id: 'issykkul', name: 'Иссык-Кульская область', city: 'Каракол', km: 390, days: '2 дня', price: 450 },
  { id: 'jalalabad', name: 'Джалал-Абадская область', city: 'Джалал-Абад', km: 580, days: '3 дня', price: 550 },
  { id: 'osh', name: 'Ошская область', city: 'Ош', km: 680, days: '3 дня', price: 600 },
  { id: 'batken', name: 'Баткенская область', city: 'Баткен', km: 900, days: '4 дня', price: 700 },
];
export const MAX_KM = 900;

export const getRegionById = (id) => REGIONS.find((r) => r.id === id);
