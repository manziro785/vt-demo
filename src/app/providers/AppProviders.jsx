import { CartProvider } from '@/entities/cart';
import { CartFlyProvider } from '@/features/add-to-cart';
import { SettingsProvider } from './SettingsProvider.jsx';

export function AppProviders({ children }) {
  return (
    <SettingsProvider>
      <CartProvider>
        <CartFlyProvider>{children}</CartFlyProvider>
      </CartProvider>
    </SettingsProvider>
  );
}
