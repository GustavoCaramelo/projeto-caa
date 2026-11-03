import {
  ChangeDetectionStrategy,
  Component,
  inject
} from '@angular/core';
import { CommunicationStateService } from '../../../core/services/communication-state.service';
import { ISystemicState } from '../../../core/models/systemic-state.model';
import { StateIconComponent } from '../../../shared/components/icons/state-icon.component';

@Component({
  selector: 'app-systemic-states',
  standalone: true,
  imports: [StateIconComponent],
  template: `
    <section class="w-full flex flex-col" aria-label="Estados Gerais: Fome e Sono">
      <header class="mb-3 px-1 flex items-center justify-between">
        <h2 class="text-sm sm:text-base font-extrabold tracking-widest text-[#52645F] uppercase">
          ESTADOS DO MEU CORPO
        </h2>
        @if (commState.selectedSystemicState()) {
          <span class="text-xs sm:text-sm font-semibold tracking-wider text-[#68857B] bg-[#E8F0EC] px-3 py-1 rounded-full uppercase">
            {{ commState.selectedSystemicState()?.label }}
          </span>
        }
      </header>

      <!-- 2 Cards: FOME and SONO -->
      <div class="grid grid-cols-2 gap-2.5 sm:gap-3.5 lg:gap-4 w-full">
        @for (state of commState.systemicStates(); track state.id) {
          <button
            type="button"
            role="button"
            [attr.aria-pressed]="isSelected(state)"
            [attr.aria-label]="state.ariaLabel + (isSelected(state) ? ' - Selecionado' : '')"
            (click)="onSelectState(state)"
            (keydown.enter)="onSelectState(state)"
            (keydown.space)="$event.preventDefault(); onSelectState(state)"
            class="relative flex flex-col items-center justify-between p-2.5 sm:p-3.5 rounded-3xl w-full min-h-[130px] sm:min-h-[155px] lg:min-h-[175px] card-touch-target sensory-fade focus:outline-none transition-all duration-200 cursor-pointer shadow-sm overflow-hidden"
            [style.backgroundColor]="isSelected(state) ? state.pastelSelectedBg : state.pastelBg"
            [style.borderColor]="isSelected(state) ? state.pastelSelectedBorder : state.pastelBorder"
            [class.border-4]="isSelected(state)"
            [class.border-2]="!isSelected(state)"
            [class.ring-4]="isSelected(state)"
            [class.ring-opacity-40]="isSelected(state)"
            [style.--tw-ring-color]="state.pastelSelectedBorder"
          >
            @if (isSelected(state)) {
              <span
                class="absolute top-2 right-2 w-3 h-3 rounded-full sensory-fade"
                [style.backgroundColor]="state.pastelSelectedBorder"
                aria-hidden="true"
              ></span>
            }

            <div class="flex-1 flex items-center justify-center w-full max-w-[95px] sm:max-w-[115px] my-1 pointer-events-none">
              <app-state-icon [code]="state.code" />
            </div>

            <!-- Typography: SANS-SERIF, ALL CAPS, tamanho ajustado -->
            <span
              class="mt-1 text-xs sm:text-sm lg:text-base font-bold tracking-normal text-[#34423E] select-none text-center uppercase w-full px-1 break-words leading-tight"
            >
              {{ state.label }}
            </span>
          </button>
        }
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemicStatesComponent {
  protected readonly commState = inject(CommunicationStateService);

  isSelected(state: ISystemicState): boolean {
    return this.commState.selectedSystemicState()?.id === state.id;
  }

  onSelectState(state: ISystemicState): void {
    this.commState.selectSystemicState(state);
  }
}
