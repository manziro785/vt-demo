import { AppProviders } from './providers/AppProviders.jsx';
import { AppLayout } from './layout/AppLayout.jsx';

export function App() {
  return (
    <AppProviders>
      <AppLayout />
    </AppProviders>
  );
}
