import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SystemicStateCode } from '../../../core/models/systemic-state.model';

@Component({
  selector: 'app-state-icon',
  standalone: true,
  template: `
    <svg
      viewBox="0 0 120 120"
      class="w-full h-full max-h-36 drop-shadow-none select-none pointer-events-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      [attr.aria-label]="code()"
    >
      @switch (code()) {
        @case ('FOME') {
          <!-- Friendly bowl base -->
          <ellipse cx="60" cy="85" rx="42" ry="16" fill="#DEC7B2" opacity="0.4" />
          <path d="M26 64 C26 90 40 98 60 98 C80 98 94 90 94 64 Z" fill="#FDF4EA" stroke="#BF9B7B" stroke-width="4" />
          <!-- Bowl rim -->
          <ellipse cx="60" cy="64" rx="34" ry="10" fill="#F3E5D4" stroke="#BF9B7B" stroke-width="3" />
          <!-- Gentle smiley on bowl -->
          <circle cx="50" cy="78" r="2.5" fill="#75563D" />
          <circle cx="70" cy="78" r="2.5" fill="#75563D" />
          <path d="M56 82 Q60 86 64 82" stroke="#75563D" stroke-width="2.5" stroke-linecap="round" fill="none" />
          <!-- Soft blush on bowl -->
          <circle cx="44" cy="80" r="3.5" fill="#F0C2BC" opacity="0.7" />
          <circle cx="76" cy="80" r="3.5" fill="#F0C2BC" opacity="0.7" />
          <!-- Friendly spoon -->
          <path d="M72 44 L86 20 C88 16 94 18 92 24 L78 50" stroke="#BF9B7B" stroke-width="4" stroke-linecap="round" fill="#EED8C3" />
          <!-- Warm aroma puffs -->
          <path d="M48 46 Q44 38 48 30" stroke="#CBB099" stroke-width="3" stroke-linecap="round" fill="none" />
          <path d="M60 48 Q64 36 60 26" stroke="#CBB099" stroke-width="3" stroke-linecap="round" fill="none" />
        }

        @case ('SONO') {
          <!-- Cute sleeping crescent moon -->
          <path d="M66 22 C44 22 26 40 26 62 C26 84 44 102 66 102 C74 102 82 100 88 94 C70 92 56 78 56 62 C56 46 70 32 88 30 C82 24 74 22 66 22 Z" 
                fill="#ECEEF8" stroke="#909BC8" stroke-width="4" stroke-linejoin="round" />
          <!-- Sleeping peaceful eye -->
          <path d="M48 60 Q54 66 60 60" stroke="#4C5887" stroke-width="3.5" stroke-linecap="round" fill="none" />
          <!-- Soft cheek blush -->
          <circle cx="48" cy="70" r="5" fill="#F4C7C3" opacity="0.7" />
          <!-- Gentle soft nightcap / stars -->
          <!-- Soft dreamy star -->
          <path d="M92 40 L94 44 L98 45 L95 48 L96 52 L92 50 L88 52 L89 48 L86 45 L90 44 Z" fill="#F7E6B5" stroke="#D1B875" stroke-width="2" />
          <!-- Little soft Zzz -->
          <path d="M80 72 L86 72 L80 80 L86 80" stroke="#909BC8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
          <path d="M90 62 L94 62 L90 67 L94 67" stroke="#909BC8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        }
      }
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StateIconComponent {
  readonly code = input.required<SystemicStateCode>();
}

