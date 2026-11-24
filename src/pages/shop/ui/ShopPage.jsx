import { useLayoutEffect, useState, startTransition } from 'react';
import { getProductById } from '@/entities/product';
import { useCatalogFilters } from '@/features/catalog-filter';
import { Catalog } from '@/widgets/catalog';
import { ProductDetails } from '@/widgets/product-details';
import { CutsChart } from '@/widgets/cuts-chart';
import { DeliveryCalculator } from '@/widgets/delivery-calculator';
import { Hero } from './Hero.jsx';

export function ShopPage() {
  const [openId, setOpenId] = useState(null);
  const filters = useCatalogFilters();

  // Открыть/закрыть товар — внутри startTransition: так React запускает
  // View Transition, и фото с заголовком перелетают между карточкой и страницей.
  const open = (id) => startTransition(() => setOpenId(id));
  useLayoutEffect(() => { if (openId) window.scrollTo(0, 0); }, [openId]);

  const product = getProductById(openId);
  if (product) {
    return <ProductDetails product={product} onBack={() => open(null)} />;
  }

  return (
    <div>
      <Hero />
      <Catalog filters={filters} onOpen={open} />
      <CutsChart />
      <DeliveryCalculator />
    </div>
  );
}
