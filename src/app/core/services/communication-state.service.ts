import { Injectable, computed, signal } from '@angular/core';
import { ISelectableItem } from '../models/communication-item.model';
import { IEmotionItem } from '../models/emotion.model';
import { IBodyHotspot } from '../models/body-hotspot.model';
import { ISystemicState } from '../models/systemic-state.model';
import { EMOTIONS_DATA } from '../data/emotions.data';
import { BODY_HOTSPOTS_DATA } from '../data/body-hotspots.data';
import { SYSTEMIC_STATES_DATA } from '../data/systemic-states.data';

export type TabCategory = 'EMOTIONS' | 'BODY' | 'SYSTEMIC';

export interface IActiveCommunication {
  item: ISelectableItem;
  prefix: string; // Ex: 'EU SINTO', 'ONDE DÓI', 'ESTADO'
  fullMessage: string;
}

/**
 * CommunicationStateService
 * 
 * Gerencia o estado reativo da prancha de CAA através de Angular Signals.
 * Garante previsibilidade para a criança, mantendo as seleções claras,
 * sem efeitos colaterais surpresa e em CAIXA ALTA.
 */
@Injectable({
  providedIn: 'root'
})
export class CommunicationStateService {
  // Dados imutáveis
  readonly emotions = signal<readonly IEmotionItem[]>(EMOTIONS_DATA);
  readonly bodyHotspots = signal<readonly IBodyHotspot[]>(BODY_HOTSPOTS_DATA);
  readonly systemicStates = signal<readonly ISystemicState[]>(SYSTEMIC_STATES_DATA);

  // Estados selecionados
  readonly selectedEmotion = signal<IEmotionItem | null>(null);
  readonly selectedBodyPart = signal<IBodyHotspot | null>(null);
  readonly selectedSystemicState = signal<ISystemicState | null>(null);

  // Aba ativa para visão Tablet/Split Screen
  readonly activeTab = signal<TabCategory>('EMOTIONS');

  // Item ativo mais recente para feedback visual focado
  readonly activeItem = signal<ISelectableItem | null>(null);

  // Mensagem composta em CAIXA ALTA com máxima legibilidade
  readonly composedMessage = computed<string>(() => {
    const item = this.activeItem();
    if (!item) {
      return 'TOQUE EM UMA IMAGEM';
    }

    switch (item.category) {
      case 'EMOTION':
        return `EU SINTO: ${item.label}`;
      case 'BODY_PART':
        return `ONDE INCOMODA: ${item.label}`;
      case 'SYSTEMIC_STATE':
        return `ESTADO: ${item.label}`;
      default:
        return item.label;
    }
  });

  // Flag indicando se há alguma seleção ativa
  readonly hasActiveSelection = computed<boolean>(() => this.activeItem() !== null);

  /**
   * Seleciona uma emoção. Clique repetido no mesmo item desmarca suavemente (toggle previsível).
   */
  selectEmotion(emotion: IEmotionItem): void {
    if (this.selectedEmotion()?.id === emotion.id) {
      this.selectedEmotion.set(null);
      if (this.activeItem()?.id === emotion.id) {
        this.activeItem.set(null);
      }
      return;
    }

    this.selectedEmotion.set(emotion);
    this.activeItem.set(emotion);
  }

  /**
   * Seleciona uma parte do corpo / ponto de calor na silhueta.
   */
  selectBodyPart(hotspot: IBodyHotspot): void {
    if (this.selectedBodyPart()?.id === hotspot.id) {
      this.selectedBodyPart.set(null);
      if (this.activeItem()?.id === hotspot.id) {
        this.activeItem.set(null);
      }
      return;
    }

    this.selectedBodyPart.set(hotspot);
    this.activeItem.set(hotspot);
  }

  /**
   * Seleciona um estado sistêmico (FOME ou SONO).
   */
  selectSystemicState(state: ISystemicState): void {
    if (this.selectedSystemicState()?.id === state.id) {
      this.selectedSystemicState.set(null);
      if (this.activeItem()?.id === state.id) {
        this.activeItem.set(null);
      }
      return;
    }

    this.selectedSystemicState.set(state);
    this.activeItem.set(state);
  }

  /**
   * Altera a aba de categoria (utilizado no Tablet Split-Screen)
   */
  setActiveTab(tab: TabCategory): void {
    this.activeTab.set(tab);
  }

  /**
   * Limpa todas as seleções de forma suave e previsível
   */
  clearAllSelections(): void {
    this.selectedEmotion.set(null);
    this.selectedBodyPart.set(null);
    this.selectedSystemicState.set(null);
    this.activeItem.set(null);
  }
}

