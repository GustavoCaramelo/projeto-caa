import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BoardContainerComponent } from './features/board/board-container.component';
import { SensoryPolicyService } from './core/services/sensory-policy.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BoardContainerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  // Injeta o serviço de política sensorial para assegurar o ambiente silencioso
  protected readonly sensoryPolicy = inject(SensoryPolicyService);
}
