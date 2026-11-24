import { getProductById } from '@/entities/product/@x/cart';

export const createCartLine = (productId, weight) => ({ key: `${productId}-${Date.now()}`, id: productId, weight });

export const weightLabel = (w) => (w < 1 ? `${w * 1000} г` : `${w} кг`);

// Строки корзины вместе с товаром — для шторки и оформления.
export const toCartItems = (cart) => cart.map((l) => ({ ...l, product: getProductById(l.id) }));
export const cartTotal = (items) => items.reduce((s, l) => s + l.product.price * l.weight, 0);
