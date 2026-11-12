import { ISelectableItem } from './communication-item.model';

export type SystemicStateCode =
  | 'FOME'
  | 'SONO'
  | 'SEDE'
  | 'XIXI'
  | 'COCO'
  | 'COCÔ'
  | 'DOR'
  | 'ALIVIO'
  | 'ALÍVIO'
  | 'AGITACAO'
  | 'AGITAÇÃO'
  | 'BARULHO'
  | 'SENSIBILIDADE_BARULHO';

export interface ISystemicState extends ISelectableItem {
  readonly code: SystemicStateCode;
  readonly visualCue: string;
}
