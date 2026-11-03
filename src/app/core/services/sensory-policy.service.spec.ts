import { TestBed } from '@angular/core/testing';
import { SensoryPolicyService } from './sensory-policy.service';

describe('SensoryPolicyService', () => {
  let service: SensoryPolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensoryPolicyService);
  });

  it('deve inicializar com bloqueio estrito de áudio', () => {
    expect(service.isAudioBlocked()).toBe(true);
    expect(service.attemptPlaySound()).toBe(false);
  });

  it('deve manter modo de movimento reduzido e paleta suave ativos', () => {
    expect(service.reducedMotionMode()).toBe(true);
    expect(service.isPastelStrict()).toBe(true);
  });
});

