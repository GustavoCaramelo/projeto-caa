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
    <section class="w-full flex flex-col" aria-label="Estados do Corpo">
      <header class="mb-2 sm:mb-3 px-1 flex items-center justify-between">
        <h2 class="text-xs sm:text-sm font-extrabold tracking-widest text-[#52645F] uppercase">
          ESTADOS DO MEU CORPO
        </h2>
        @if (commState.selectedSystemicState()) {
          <span class="text-[11px] sm:text-xs font-bold tracking-wider text-[#68857B] bg-[#E8F0EC] px-2.5 py-0.5 rounded-full uppercase truncate max-w-[170px]">
            {{ commState.selectedSystemicState()?.label }}
          </span>
        }
      </header>

      <!-- Grid 2 cols on mobile, 3 cols on tablet/desktop for the 9 states -->
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 lg:gap-3 w-full">
        @for (state of commState.systemicStates(); track state.id) {
          <button
            type="button"
            role="button"
            [attr.aria-pressed]="isSelected(state)"
            [attr.aria-label]="state.ariaLabel + (isSelected(state) ? ' - Selecionado' : '')"
            (click)="onSelectState(state)"
            (keydown.enter)="onSelectState(state)"
            (keydown.space)="$event.preventDefault(); onSelectState(state)"
            class="relative flex flex-col items-center justify-between p-2 sm:p-2.5 lg:p-3 rounded-2xl w-full min-h-[110px] sm:min-h-[125px] lg:min-h-[135px] card-touch-target sensory-fade focus:outline-none transition-all duration-200 cursor-pointer shadow-sm overflow-hidden"
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
                class="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full sensory-fade"
                [style.backgroundColor]="state.pastelSelectedBorder"
                aria-hidden="true"
              ></span>
            }

            <div class="flex-1 flex items-center justify-center w-full max-w-[70px] sm:max-w-[85px] lg:max-w-[95px] my-0.5 pointer-events-none">
              <app-state-icon [code]="state.code" />
            </div>

            <!-- Typography: SANS-SERIF, ALL CAPS, tamanho ajustado para garantir leitura e não vazar -->
            <span
              class="mt-1 text-[10px] sm:text-[11px] lg:text-xs font-bold tracking-normal text-[#34423E] select-none text-center uppercase w-full px-0.5 break-words leading-tight"
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
