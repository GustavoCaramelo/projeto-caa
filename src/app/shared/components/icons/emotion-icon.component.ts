import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { EmotionType } from '../../../core/models/emotion.model';

@Component({
  selector: 'app-emotion-icon',
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
        @case ('ALEGRIA') {
          <!-- Face base -->
          <circle cx="60" cy="62" r="44" fill="#FBF5EA" stroke="#7BAE84" stroke-width="4" />
          <!-- Hair tuft -->
          <path d="M54 18 C52 10 68 10 66 18" stroke="#7BAE84" stroke-width="4" stroke-linecap="round" fill="#E8F4EC" />
          <!-- Eyes: smiling arches -->
          <path d="M42 54 Q48 46 54 54" stroke="#46604D" stroke-width="4" stroke-linecap="round" fill="none" />
          <path d="M66 54 Q72 46 78 54" stroke="#46604D" stroke-width="4" stroke-linecap="round" fill="none" />
          <!-- Soft blush -->
          <circle cx="38" cy="66" r="7" fill="#F4C7C3" opacity="0.75" />
          <circle cx="82" cy="66" r="7" fill="#F4C7C3" opacity="0.75" />
          <!-- Happy mouth -->
          <path d="M46 68 Q60 84 74 68" stroke="#46604D" stroke-width="4" stroke-linecap="round" fill="#FCE5E5" />
        }

        @case ('TRISTEZA') {
          <!-- Face base -->
          <circle cx="60" cy="62" r="44" fill="#F2F6FA" stroke="#82A6C8" stroke-width="4" />
          <!-- Hair tuft -->
          <path d="M55 18 C58 12 62 12 65 18" stroke="#82A6C8" stroke-width="4" stroke-linecap="round" fill="#E3EDF7" />
          <!-- Eyebrows (sad tilt) -->
          <path d="M42 46 L54 50" stroke="#4E677F" stroke-width="3.5" stroke-linecap="round" />
          <path d="M78 46 L66 50" stroke="#4E677F" stroke-width="3.5" stroke-linecap="round" />
          <!-- Eyes (gentle sad) -->
          <circle cx="48" cy="56" r="4" fill="#4E677F" />
          <circle cx="72" cy="56" r="4" fill="#4E677F" />
          <!-- Tear (soft blue) -->
          <path d="M78 64 C76 68 76 74 80 74 C84 74 84 68 82 64 Z" fill="#A8CCE8" stroke="#82A6C8" stroke-width="1.5" />
          <!-- Sad mouth -->
          <path d="M48 76 Q60 68 72 76" stroke="#4E677F" stroke-width="4" stroke-linecap="round" fill="none" />
        }

        @case ('ANSIEDADE') {
          <!-- Face base -->
          <circle cx="60" cy="66" r="42" fill="#F2F6FA" stroke="#8DB0C9" stroke-width="4" />
          <!-- Soft worry cloud -->
          <path d="M44 22 C40 22 38 16 45 14 C48 8 58 8 62 13 C68 9 78 12 76 18 C82 20 80 26 74 26 Z" 
                fill="#DEEAF2" stroke="#8DB0C9" stroke-width="3" stroke-linejoin="round" />
          <!-- Eyes (wide curious/nervous) -->
          <circle cx="47" cy="60" r="5" stroke="#476378" stroke-width="3" fill="#FFFFFF" />
          <circle cx="48" cy="60" r="2.5" fill="#476378" />
          <circle cx="73" cy="60" r="5" stroke="#476378" stroke-width="3" fill="#FFFFFF" />
          <circle cx="72" cy="60" r="2.5" fill="#476378" />
          <!-- Soft blush -->
          <circle cx="39" cy="68" r="5" fill="#EBC4C4" opacity="0.6" />
          <circle cx="81" cy="68" r="5" fill="#EBC4C4" opacity="0.6" />
          <!-- Wavy mouth -->
          <path d="M50 78 Q56 82 60 78 T70 78" stroke="#476378" stroke-width="3.5" stroke-linecap="round" fill="none" />
        }

        @case ('MEDO') {
          <!-- Face base -->
          <circle cx="60" cy="62" r="44" fill="#F5F3FA" stroke="#A794C4" stroke-width="4" />
          <!-- Eyebrows high -->
          <path d="M42 42 Q48 38 54 42" stroke="#5E4E78" stroke-width="3.5" stroke-linecap="round" fill="none" />
          <path d="M66 42 Q72 38 78 42" stroke="#5E4E78" stroke-width="3.5" stroke-linecap="round" fill="none" />
          <!-- Wide watchful eyes -->
          <circle cx="48" cy="54" r="6" stroke="#5E4E78" stroke-width="3" fill="#FFFFFF" />
          <circle cx="48" cy="54" r="3" fill="#5E4E78" />
          <circle cx="72" cy="54" r="6" stroke="#5E4E78" stroke-width="3" fill="#FFFFFF" />
          <circle cx="72" cy="54" r="3" fill="#5E4E78" />
          <!-- Round gentle 'O' mouth -->
          <ellipse cx="60" cy="74" rx="7" ry="9" stroke="#5E4E78" stroke-width="3.5" fill="#EDE4F7" />
          <!-- Soft hugging little hands -->
          <path d="M26 72 Q36 68 40 76" stroke="#A794C4" stroke-width="4" stroke-linecap="round" fill="#FAF5FF" />
          <path d="M94 72 Q84 68 80 76" stroke="#A794C4" stroke-width="4" stroke-linecap="round" fill="#FAF5FF" />
        }

        @case ('IRRITAÇÃO') {
          <!-- Face base -->
          <circle cx="60" cy="62" r="44" fill="#FAF3EA" stroke="#C29F83" stroke-width="4" />
          <!-- Eyebrows (tilted inwards gently) -->
          <path d="M42 46 L54 50" stroke="#664D39" stroke-width="4" stroke-linecap="round" />
          <path d="M78 46 L66 50" stroke="#664D39" stroke-width="4" stroke-linecap="round" />
          <!-- Annoyed half-open eyes -->
          <path d="M42 56 Q48 52 54 56" stroke="#664D39" stroke-width="4" stroke-linecap="round" fill="none" />
          <path d="M66 56 Q72 52 78 56" stroke="#664D39" stroke-width="4" stroke-linecap="round" fill="none" />
          <!-- Straight flat mouth -->
          <path d="M50 72 L70 72" stroke="#664D39" stroke-width="4" stroke-linecap="round" />
          <!-- Cute subtle puff clouds -->
          <path d="M88 44 Q96 40 98 46" stroke="#D6B89E" stroke-width="3" stroke-linecap="round" fill="none" />
          <path d="M22 44 Q30 40 32 46" stroke="#D6B89E" stroke-width="3" stroke-linecap="round" fill="none" />
        }

        @case ('RAIVA') {
          <!-- Face base -->
          <circle cx="60" cy="62" r="44" fill="#FAE8E8" stroke="#C28484" stroke-width="4" />
          <!-- Strong but friendly eyebrows -->
          <path d="M40 44 L54 50" stroke="#6B3D3D" stroke-width="4" stroke-linecap="round" />
          <path d="M80 44 L66 50" stroke="#6B3D3D" stroke-width="4" stroke-linecap="round" />
          <!-- Determined eyes -->
          <circle cx="48" cy="56" r="4" fill="#6B3D3D" />
          <circle cx="72" cy="56" r="4" fill="#6B3D3D" />
          <!-- Rosy flushed cheeks -->
          <circle cx="38" cy="66" r="7" fill="#F0B5B5" opacity="0.8" />
          <circle cx="82" cy="66" r="7" fill="#F0B5B5" opacity="0.8" />
          <!-- Pouting determined mouth -->
          <path d="M48 76 Q60 68 72 76" stroke="#6B3D3D" stroke-width="4.5" stroke-linecap="round" fill="none" />
        }
      }
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmotionIconComponent {
  readonly code = input.required<EmotionType>();
}

