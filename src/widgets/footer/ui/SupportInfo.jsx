import {
  supportsVT,
  supportsCrossDocVT,
  supportsVTTypes,
} from "@/shared/lib/view-transition";

const yes = (v) => (v ? "да" : "нет");

// Индикатор поддержки браузера: показываем, что сайт работает и без API.
export function SupportInfo() {
  return <></>;
}
