import { ISelectableItem } from './communication-item.model';

export type BodyPartCode =
  | 'CABECAC'
  | 'DENTES'
  | 'NARIZ'
  | 'BRACOS'
  | 'BARRIGA'
  | 'PERNAS'
  | 'PES';

export interface IBodyHotspot extends ISelectableItem {
  readonly code: BodyPartCode;
  readonly xPercent: number; // Porcentagem X no mapa da silhueta
  readonly yPercent: number; // Porcentagem Y no mapa da silhueta
  readonly radiusPx: number; // Raio da área de toque recomendada (>= 24px raio -> 48px hitbox)
  readonly hintDetail?: string; // Ex: 'ENTUPIDO' para Nariz
}

