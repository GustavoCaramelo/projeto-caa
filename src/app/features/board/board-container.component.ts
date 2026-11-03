import {
  ChangeDetectionStrategy,
  Component,
  inject
} from '@angular/core';
import { CommunicationStateService, TabCategory } from '../../core/services/communication-state.service';
import { SilhouetteComponent } from '../body/silhouette/silhouette.component';
import { EmotionsBoardComponent } from '../emotions/emotions-board/emotions-board.component';
import { SystemicStatesComponent } from '../body/systemic-states/systemic-states.component';
import { SensoryPhraseBarComponent } from '../../shared/components/phrase-bar/sensory-phrase-bar.component';

@Component({
  selector: 'app-board-container',
  standalone: true,
  imports: [
    SilhouetteComponent,
    EmotionsBoardComponent,
    SystemicStatesComponent,
    SensoryPhraseBarComponent
  ],
  templateUrl: './board-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardContainerComponent {
  protected readonly commState = inject(CommunicationStateService);

  onTabChange(tab: TabCategory): void {
    this.commState.setActiveTab(tab);
  }
}

