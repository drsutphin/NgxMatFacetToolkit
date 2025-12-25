export interface FacetValue {
  value: string | number | boolean | Date | null;
  label?: string;
  count?: number;
  description?: string;
  icon?: string;
  iconClass?: string;
  cssClass?: string;
  selected?: boolean;
  meta?: Record<string, unknown>;
}
