export type ItemCategory = 'EMOTION' | 'BODY_PART' | 'SYSTEMIC_STATE';

export interface ISelectableItem {
  readonly id: string;
  readonly label: string; // OBRIGATORIAMENTE EM CAIXA ALTA
  readonly category: ItemCategory;
  readonly pastelBg: string;
  readonly pastelBorder: string;
  readonly pastelSelectedBg: string;
  readonly pastelSelectedBorder: string;
  readonly ariaLabel: string;
}

