import {
  ChangeDetectionStrategy,
  Component,
  inject
} from '@angular/core';
import { CommunicationStateService } from '../../../core/services/communication-state.service';
import { IBodyHotspot, BodyPartCode } from '../../../core/models/body-hotspot.model';

@Component({
  selector: 'app-silhouette',
  standalone: true,
  templateUrl: './silhouette.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SilhouetteComponent {
  protected readonly commState = inject(CommunicationStateService);

  isHotspotSelected(code: BodyPartCode): boolean {
    return this.commState.selectedBodyPart()?.code === code;
  }

  getHotspotByCode(code: BodyPartCode): IBodyHotspot | undefined {
    return this.commState.bodyHotspots().find(h => h.code === code);
  }

  selectByCode(code: BodyPartCode): void {
    const item = this.getHotspotByCode(code);
    if (item) {
      this.commState.selectBodyPart(item);
    }
  }

  onHotspotKeydown(event: KeyboardEvent, code: BodyPartCode): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.selectByCode(code);
    }
  }
}

