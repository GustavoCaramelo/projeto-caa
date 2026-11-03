import {
  ChangeDetectionStrategy,
  Component,
  inject
} from '@angular/core';
import { CommunicationStateService } from '../../../core/services/communication-state.service';
import { EmotionIconComponent } from '../icons/emotion-icon.component';
import { StateIconComponent } from '../icons/state-icon.component';
import { IEmotionItem } from '../../../core/models/emotion.model';
import { ISystemicState } from '../../../core/models/systemic-state.model';

@Component({
  selector: 'app-sensory-phrase-bar',
  standalone: true,
  imports: [EmotionIconComponent, StateIconComponent],
  template: `
    <header
      class="w-full bg-[#EBF3EE] border-2 border-[#CFDFD5] rounded-3xl p-3 sm:p-4 sensory-fade shadow-sm flex items-center justify-between gap-3 min-h-[72px] sm:min-h-[84px]"
      role="region"
      aria-label="Barra de Comunicação Ativa"
    >
      <!-- Visual communication display -->
      <div class="flex items-center gap-3 sm:gap-4 flex-1 overflow-hidden">
        <!-- Visual Pictogram preview if selected -->
        @if (commState.activeItem(); as item) {
          <div
            class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center p-1 border-2 shrink-0 sensory-fade"
            [style.backgroundColor]="item.pastelSelectedBg"
            [style.borderColor]="item.pastelSelectedBorder"
          >
            @if (item.category === 'EMOTION') {
              <app-emotion-icon [code]="asEmotion(item).code" />
            } @else if (item.category === 'SYSTEMIC_STATE') {
              <app-state-icon [code]="asSystemicState(item).code" />
            } @else {
              <!-- Icon for Body Part (Silhouette heart/dot) -->
              <svg viewBox="0 0 40 40" class="w-8 h-8 select-none" fill="none">
                <circle cx="20" cy="20" r="14" fill="#F5C7A9" stroke="#C9865B" stroke-width="2" />
                <path d="M16 20 Q20 16 24 20 Q20 25 16 20 Z" fill="#985A32" />
              </svg>
            }
          </div>
        } @else {
          <!-- Placeholder calm icon -->
          <div
            class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#DFEBE3] border-2 border-[#CBDCD1] flex items-center justify-center shrink-0"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 text-[#758E81]" fill="none" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
        }

        <!-- Composed text in Sans-serif, ALL CAPS, Large Font -->
        <div class="flex flex-col justify-center overflow-hidden">
          <span class="text-[11px] sm:text-xs font-bold tracking-wider text-[#647C73] uppercase">
            MENSAGEM:
          </span>
          <span
            class="text-base sm:text-xl lg:text-2xl font-black tracking-wide text-[#2F3D39] uppercase truncate"
          >
            {{ commState.composedMessage() }}
          </span>
        </div>
      </div>

      <!-- Action Button: LIMPAR (Clear) with min 48x48px touch target -->
      @if (commState.hasActiveSelection()) {
        <button
          type="button"
          (click)="onClear()"
          class="min-h-[48px] min-w-[48px] px-3.5 sm:px-5 py-2.5 rounded-2xl bg-[#F7EBEB] hover:bg-[#F2DCDC] border-2 border-[#DFBEBE] text-[#7A4B4B] font-bold text-xs sm:text-sm tracking-widest uppercase sensory-fade flex items-center gap-2 cursor-pointer focus:outline-none shrink-0"
          aria-label="Limpar mensagem atual"
        >
          <svg viewBox="0 0 24 24" class="w-4 h-4 stroke-current" fill="none" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span class="hidden xs:inline">LIMPAR</span>
        </button>
      }
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SensoryPhraseBarComponent {
  protected readonly commState = inject(CommunicationStateService);

  asEmotion(item: unknown): IEmotionItem {
    return item as IEmotionItem;
  }

  asSystemicState(item: unknown): ISystemicState {
    return item as ISystemicState;
  }

  onClear(): void {
    this.commState.clearAllSelections();
  }
}

