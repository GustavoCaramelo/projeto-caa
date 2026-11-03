import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommunicationStateService } from '../../../core/services/communication-state.service';
import { EmotionCardComponent } from '../emotion-card/emotion-card.component';
import { IEmotionItem } from '../../../core/models/emotion.model';

@Component({
  selector: 'app-emotions-board',
  standalone: true,
  imports: [EmotionCardComponent],
  template: `
    <section class="w-full flex flex-col" aria-label="Prancha de Emoções: O que eu sinto">
      <header class="mb-3 px-1 flex items-center justify-between">
        <h2 class="text-sm sm:text-base font-extrabold tracking-widest text-[#52645F] uppercase">
          O QUE EU SINTO?
        </h2>
        @if (commState.selectedEmotion()) {
          <span class="text-xs sm:text-sm font-semibold tracking-wider text-[#68857B] bg-[#E8F0EC] px-3 py-1 rounded-full uppercase">
            {{ commState.selectedEmotion()?.label }}
          </span>
        }
      </header>

      <!-- Responsive Grid: 2 cols on mobile (2x2 with scroll/flow) -->
      <div class="grid grid-cols-2 gap-2.5 sm:gap-3.5 lg:gap-4 w-full">
        @for (emotion of commState.emotions(); track emotion.id) {
          <app-emotion-card
            [emotion]="emotion"
            [isSelected]="commState.selectedEmotion()?.id === emotion.id"
            (cardClick)="onSelectEmotion($event)"
          />
        }
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmotionsBoardComponent {
  protected readonly commState = inject(CommunicationStateService);

  onSelectEmotion(emotion: IEmotionItem): void {
    this.commState.selectEmotion(emotion);
  }
}

