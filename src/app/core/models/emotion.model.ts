import { ISelectableItem } from './communication-item.model';

export type EmotionType = 'RAIVA' | 'IRRITACAO' | 'IRRITAÇÃO' | 'MEDO' | 'ANSIEDADE' | 'ALEGRIA' | 'TRISTEZA';

export interface IEmotionItem extends ISelectableItem {
  readonly code: EmotionType;
  readonly visualCue: string;
}
