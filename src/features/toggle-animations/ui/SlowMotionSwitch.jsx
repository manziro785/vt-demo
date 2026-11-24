import { useSettings } from '@/shared/lib/view-transition';
import { Switch } from '@/shared/ui/switch';

export function SlowMotionSwitch() {
  const { slow, toggleSlow } = useSettings();
  return <Switch checked={slow} onToggle={toggleSlow} title="Клавиша S">Замедлить анимации ×5</Switch>;
}
