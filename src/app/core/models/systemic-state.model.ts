import { ISelectableItem } from './communication-item.model';

export type SystemicStateCode = 'FOME' | 'SONO';

export interface ISystemicState extends ISelectableItem {
  readonly code: SystemicStateCode;
  readonly visualCue: string;
}

