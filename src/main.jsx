import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
// Глобальные стили — первыми, чтобы стили слайсов шли после них в каскаде.
import './app/styles/index.css';
import { App } from './app';

// Первый рендер — синхронно, а скрипт подключён с blocking="render":
// браузер не покажет страницу, пока React её не нарисует. Иначе при переходе
// с about.html обратно фото для «перелёта» ещё не было бы на странице.
const root = createRoot(document.getElementById('root'));
flushSync(() => root.render(<App />));
