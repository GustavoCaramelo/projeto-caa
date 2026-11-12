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
          <!-- Soft dreamy star -->
          <path d="M92 40 L94 44 L98 45 L95 48 L96 52 L92 50 L88 52 L89 48 L86 45 L90 44 Z" fill="#F7E6B5" stroke="#D1B875" stroke-width="2" />
          <!-- Little soft Zzz -->
          <path d="M80 72 L86 72 L80 80 L86 80" stroke="#909BC8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
          <path d="M90 62 L94 62 L90 67 L94 67" stroke="#909BC8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        }

        @case ('SEDE') {
          <!-- Cute glass with water and straw -->
          <!-- Straw -->
          <path d="M64 16 L76 16 L66 45" stroke="#8EB3CC" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
          <path d="M68 22 L72 22" stroke="#B8D6EA" stroke-width="3" stroke-linecap="round" />
          <!-- Glass Body -->
          <path d="M34 38 L42 94 C43 99 48 102 54 102 L66 102 C72 102 77 99 78 94 L86 38 Z" 
                fill="#F0F7FB" stroke="#8EB3CC" stroke-width="4" stroke-linejoin="round" />
          <!-- Water level inside glass -->
          <path d="M38 52 L43 92 C44 95 48 97 53 97 L67 97 C72 97 76 95 77 92 L82 52 Z" 
                fill="#D4EAF7" />
          <!-- Water surface curve -->
          <ellipse cx="60" cy="52" rx="22" ry="6" fill="#BDDDF2" stroke="#8EB3CC" stroke-width="2" />
          <!-- Friendly face on glass -->
          <circle cx="52" cy="72" r="3" fill="#466A82" />
          <circle cx="68" cy="72" r="3" fill="#466A82" />
          <path d="M56 78 Q60 83 64 78" stroke="#466A82" stroke-width="2.5" stroke-linecap="round" fill="none" />
          <!-- Soft blush -->
          <circle cx="46" cy="75" r="4" fill="#F4C7C3" opacity="0.6" />
          <circle cx="74" cy="75" r="4" fill="#F4C7C3" opacity="0.6" />
          <!-- Tiny refreshing bubbles -->
          <circle cx="56" cy="62" r="2" fill="#FFFFFF" opacity="0.8" />
          <circle cx="66" cy="65" r="1.5" fill="#FFFFFF" opacity="0.8" />
        }

        @case ('XIXI') {
          <!-- Cute friendly pee droplet character -->
          <path d="M60 22 C60 22 32 60 32 78 C32 94 44 104 60 104 C76 104 88 94 88 78 C88 60 60 22 60 22 Z" 
                fill="#FBF6D8" stroke="#BFB375" stroke-width="4" stroke-linejoin="round" />
          <!-- Droplet inner glow/reflection -->
          <path d="M44 68 C42 74 44 86 54 94" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" fill="none" />
          <!-- Happy smiling eyes -->
          <path d="M48 72 Q52 66 56 72" stroke="#5C5530" stroke-width="3" stroke-linecap="round" fill="none" />
          <path d="M64 72 Q68 66 72 72" stroke="#5C5530" stroke-width="3" stroke-linecap="round" fill="none" />
          <!-- Rosy cheeks -->
          <circle cx="45" cy="78" r="4" fill="#F4C7C3" opacity="0.75" />
          <circle cx="75" cy="78" r="4" fill="#F4C7C3" opacity="0.75" />
          <!-- Smiling mouth -->
          <path d="M55 80 Q60 86 65 80" stroke="#5C5530" stroke-width="3" stroke-linecap="round" fill="#FDF3F3" />
          <!-- Sparkle of clean relief -->
          <path d="M84 42 L86 46 L90 47 L87 50 L88 54 L84 52 L80 54 L81 50 L78 47 L82 46 Z" fill="#F7E6B5" stroke="#BFB375" stroke-width="1.5" />
        }

        @case ('COCO') {
          <!-- Cute smiling poop / potty character in gentle pastel beige -->
          <!-- Base layer -->
          <path d="M30 92 C30 98 42 102 60 102 C78 102 90 98 90 92 C90 86 78 82 60 82 C42 82 30 86 30 92 Z" 
                fill="#E8D5C2" stroke="#B39274" stroke-width="4" />
          <!-- Middle layer -->
          <path d="M36 78 C36 84 46 88 60 88 C74 88 84 84 84 78 C84 72 74 68 60 68 C46 68 36 72 36 78 Z" 
                fill="#EDDCcb" stroke="#B39274" stroke-width="3.5" />
          <!-- Top swirl -->
          <path d="M45 64 C45 54 52 46 60 40 C63 36 67 36 65 42 C63 48 70 52 72 60 C73 66 65 68 60 68 C52 68 45 66 45 64 Z" 
                fill="#F2E3D5" stroke="#B39274" stroke-width="3.5" stroke-linejoin="round" />
          <!-- Happy smiling eyes -->
          <path d="M49 76 Q53 72 57 76" stroke="#5E4733" stroke-width="3" stroke-linecap="round" fill="none" />
          <path d="M63 76 Q67 72 71 76" stroke="#5E4733" stroke-width="3" stroke-linecap="round" fill="none" />
          <!-- Soft rosy cheeks -->
          <circle cx="45" cy="81" r="3.5" fill="#F4C7C3" opacity="0.8" />
          <circle cx="75" cy="81" r="3.5" fill="#F4C7C3" opacity="0.8" />
          <!-- Sweet gentle smile -->
          <path d="M55 81 Q60 86 65 81" stroke="#5E4733" stroke-width="2.5" stroke-linecap="round" fill="none" />
        }

        @case ('DOR') {
          <!-- Friendly soothing bandage / curativo with a caring heart -->
          <!-- Bandage body tilted gently -->
          <g transform="rotate(-15 60 60)">
            <rect x="24" y="44" width="72" height="32" rx="16" fill="#FCE9E9" stroke="#BF7E7E" stroke-width="4" />
            <!-- Central soft pad -->
            <rect x="44" y="44" width="32" height="32" fill="#F9D7D7" stroke="#BF7E7E" stroke-width="2" />
            <!-- Tiny ventilation dots -->
            <circle cx="34" cy="54" r="1.5" fill="#BF7E7E" opacity="0.6" />
            <circle cx="34" cy="66" r="1.5" fill="#BF7E7E" opacity="0.6" />
            <circle cx="86" cy="54" r="1.5" fill="#BF7E7E" opacity="0.6" />
            <circle cx="86" cy="66" r="1.5" fill="#BF7E7E" opacity="0.6" />
            <!-- Gentle caring heart in center -->
            <path d="M60 55 C60 52 56 49 53 51 C50 53 52 57 60 63 C68 57 70 53 67 51 C64 49 60 52 60 55 Z" fill="#D98B8B" />
          </g>
          <!-- Gentle reassuring soothing glow sparkles -->
          <path d="M26 30 L28 34 L32 35 L29 38 L30 42 L26 40 L22 42 L23 38 L20 35 L24 34 Z" fill="#F4C7C3" />
          <path d="M96 74 L98 78 L102 79 L99 82 L100 86 L96 84 L92 86 L93 82 L90 79 L94 78 Z" fill="#F4C7C3" />
        }

        @case ('ALIVIO') {
          <!-- Calming peaceful smiling sun / deep breath breeze -->
          <!-- Calming breath waves -->
          <path d="M22 84 Q40 76 60 84 T98 84" stroke="#84B891" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.7" />
          <path d="M28 94 Q44 88 60 94 T92 94" stroke="#84B891" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.5" />
          <!-- Peaceful Sun Face -->
          <circle cx="60" cy="50" r="28" fill="#FDFBF2" stroke="#84B891" stroke-width="3.5" />
          <!-- Soft glowing rays -->
          <line x1="60" y1="14" x2="60" y2="18" stroke="#84B891" stroke-width="3.5" stroke-linecap="round" />
          <line x1="60" y1="82" x2="60" y2="86" stroke="#84B891" stroke-width="3.5" stroke-linecap="round" />
          <line x1="24" y1="50" x2="28" y2="50" stroke="#84B891" stroke-width="3.5" stroke-linecap="round" />
          <line x1="92" y1="50" x2="96" y2="50" stroke="#84B891" stroke-width="3.5" stroke-linecap="round" />
          <line x1="35" y1="25" x2="38" y2="28" stroke="#84B891" stroke-width="3.5" stroke-linecap="round" />
          <line x1="82" y1="72" x2="85" y2="75" stroke="#84B891" stroke-width="3.5" stroke-linecap="round" />
          <line x1="35" y1="75" x2="38" y2="72" stroke="#84B891" stroke-width="3.5" stroke-linecap="round" />
          <line x1="82" y1="28" x2="85" y2="25" stroke="#84B891" stroke-width="3.5" stroke-linecap="round" />
          <!-- Peaceful sleeping/relief eyes -->
          <path d="M48 48 Q53 43 57 48" stroke="#3D5A45" stroke-width="3" stroke-linecap="round" fill="none" />
          <path d="M63 48 Q67 43 72 48" stroke="#3D5A45" stroke-width="3" stroke-linecap="round" fill="none" />
          <!-- Soft blush -->
          <circle cx="46" cy="54" r="4" fill="#F4C7C3" opacity="0.8" />
          <circle cx="74" cy="54" r="4" fill="#F4C7C3" opacity="0.8" />
          <!-- Gentle smile of relief -->
          <path d="M54 56 Q60 62 66 56" stroke="#3D5A45" stroke-width="2.5" stroke-linecap="round" fill="none" />
        }

        @case ('AGITACAO') {
          <!-- Friendly figure with gentle swirl and energy vibration rings -->
          <!-- Gentle outer vibration waves (non-jarring, pastel) -->
          <path d="M22 46 Q26 60 22 74" stroke="#C49E74" stroke-width="3" stroke-linecap="round" fill="none" />
          <path d="M16 52 Q19 60 16 68" stroke="#C49E74" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.6" />
          <path d="M98 46 Q94 60 98 74" stroke="#C49E74" stroke-width="3" stroke-linecap="round" fill="none" />
          <path d="M104 52 Q101 60 104 68" stroke="#C49E74" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.6" />
          <!-- Central round friendly character -->
          <circle cx="60" cy="60" r="32" fill="#FDF7EE" stroke="#BF9465" stroke-width="3.5" />
          <!-- Expressive restless spiral hair tuft -->
          <path d="M60 28 C60 18 72 16 70 24 C68 28 62 26 64 30" stroke="#BF9465" stroke-width="3" stroke-linecap="round" fill="none" />
          <!-- Big curious eyes looking around -->
          <circle cx="50" cy="56" r="6" stroke="#5E4324" stroke-width="2.5" fill="#FFFFFF" />
          <circle cx="52" cy="55" r="3" fill="#5E4324" />
          <circle cx="70" cy="56" r="6" stroke="#5E4324" stroke-width="2.5" fill="#FFFFFF" />
          <circle cx="72" cy="55" r="3" fill="#5E4324" />
          <!-- Cheeks -->
          <circle cx="44" cy="66" r="4" fill="#F4C7C3" opacity="0.75" />
          <circle cx="76" cy="66" r="4" fill="#F4C7C3" opacity="0.75" />
          <!-- Wavy energetic mouth -->
          <path d="M52 70 Q56 74 60 70 T68 70" stroke="#5E4324" stroke-width="3" stroke-linecap="round" fill="none" />
        }

        @case ('BARULHO') {
          <!-- Sensory noise-canceling headphones / abafadores auriculares -->
          <!-- Headband -->
          <path d="M36 60 C36 34 84 34 84 60" stroke="#8775A8" stroke-width="5" stroke-linecap="round" fill="none" />
          <!-- Headband soft pad -->
          <path d="M46 40 C52 36 68 36 74 40" stroke="#C9BFDC" stroke-width="4" stroke-linecap="round" fill="none" />
          <!-- Central calm face protected from noise -->
          <circle cx="60" cy="64" r="24" fill="#F7F5FB" stroke="#9A88BD" stroke-width="3" />
          <!-- Peaceful closed eyes because sound is buffered -->
          <path d="M51 64 Q55 60 58 64" stroke="#483863" stroke-width="2.5" stroke-linecap="round" fill="none" />
          <path d="M62 64 Q65 60 69 64" stroke="#483863" stroke-width="2.5" stroke-linecap="round" fill="none" />
          <!-- Gentle calm smile -->
          <path d="M56 72 Q60 76 64 72" stroke="#483863" stroke-width="2.5" stroke-linecap="round" fill="none" />
          <!-- Soft blush -->
          <circle cx="48" cy="68" r="3" fill="#F4C7C3" opacity="0.7" />
          <circle cx="72" cy="68" r="3" fill="#F4C7C3" opacity="0.7" />
          <!-- Left ear cup (cushioned headphone) -->
          <rect x="26" y="52" width="14" height="24" rx="7" fill="#E2DBED" stroke="#8775A8" stroke-width="3.5" />
          <!-- Right ear cup -->
          <rect x="80" y="52" width="14" height="24" rx="7" fill="#E2DBED" stroke="#8775A8" stroke-width="3.5" />
          <!-- Soft sound waves being stopped/cushioned outside -->
          <path d="M18 56 Q14 64 18 72" stroke="#B8A8D4" stroke-width="2.5" stroke-linecap="round" fill="none" />
          <path d="M102 56 Q106 64 102 72" stroke="#B8A8D4" stroke-width="2.5" stroke-linecap="round" fill="none" />
        }
      }
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StateIconComponent {
  readonly code = input.required<SystemicStateCode>();
}
