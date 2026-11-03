import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  input
} from '@angular/core';
import { IEmotionItem } from '../../../core/models/emotion.model';
import { EmotionIconComponent } from '../../../shared/components/icons/emotion-icon.component';

@Component({
  selector: 'app-emotion-card',
  standalone: true,
  imports: [EmotionIconComponent],
  template: `
    <button
      type="button"
      role="button"
      [attr.aria-pressed]="isSelected()"
      [attr.aria-label]="emotion().ariaLabel + (isSelected() ? ' - Selecionado' : '')"
      (click)="onClick()"
      (keydown.enter)="onClick()"
      (keydown.space)="$event.preventDefault(); onClick()"
      class="group relative flex flex-col items-center justify-between p-2.5 sm:p-3.5 rounded-3xl w-full min-h-[130px] sm:min-h-[155px] lg:min-h-[175px] card-touch-target sensory-fade focus:outline-none transition-all duration-200 cursor-pointer shadow-sm overflow-hidden"
      [style.backgroundColor]="isSelected() ? emotion().pastelSelectedBg : emotion().pastelBg"
      [style.borderColor]="isSelected() ? emotion().pastelSelectedBorder : emotion().pastelBorder"
      [class.border-4]="isSelected()"
      [class.border-2]="!isSelected()"
      [class.ring-4]="isSelected()"
      [class.ring-opacity-40]="isSelected()"
      [style.--tw-ring-color]="emotion().pastelSelectedBorder"
    >
      <!-- Subtle top badge showing active selection in gentle pastel -->
      @if (isSelected()) {
        <span
          class="absolute top-2 right-2 w-3 h-3 rounded-full sensory-fade"
          [style.backgroundColor]="emotion().pastelSelectedBorder"
          aria-hidden="true"
        ></span>
      }

      <!-- 2D Cartoon Pictogram Area -->
      <div class="flex-1 flex items-center justify-center w-full max-w-[95px] sm:max-w-[115px] my-1 pointer-events-none">
        <app-emotion-icon [code]="emotion().code" />
      </div>

      <!-- Typography: SANS-SERIF, ALL CAPS, ajustado para caber perfeitamente no card sem vazar -->
      <span
        class="mt-1 text-xs sm:text-sm lg:text-base font-bold tracking-normal text-[#34423E] select-none text-center uppercase w-full px-1 break-words leading-tight"
      >
        {{ emotion().label }}
      </span>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmotionCardComponent {
  readonly emotion = input.required<IEmotionItem>();
  readonly isSelected = input<boolean>(false);

  @Output() readonly cardClick = new EventEmitter<IEmotionItem>();

  onClick(): void {
    this.cardClick.emit(this.emotion());
  }
}
