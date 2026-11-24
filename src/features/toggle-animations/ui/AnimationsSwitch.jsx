import { useSettings } from '@/shared/lib/view-transition';
import { Switch } from '@/shared/ui/switch';

export function AnimationsSwitch() {
  const { vtOn, toggleVt } = useSettings();
  return <Switch checked={vtOn} onToggle={toggleVt} title="Клавиша A">Анимации</Switch>;
}
