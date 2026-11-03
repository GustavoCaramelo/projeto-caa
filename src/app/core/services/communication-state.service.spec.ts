import { TestBed } from '@angular/core/testing';
import { CommunicationStateService } from './communication-state.service';
import { EMOTIONS_DATA } from '../data/emotions.data';
import { BODY_HOTSPOTS_DATA } from '../data/body-hotspots.data';
import { SYSTEMIC_STATES_DATA } from '../data/systemic-states.data';

describe('CommunicationStateService', () => {
  let service: CommunicationStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicationStateService);
  });

  it('deve inicializar com listas de dados e sem itens selecionados', () => {
    expect(service.emotions().length).toBe(6);
    expect(service.bodyHotspots().length).toBe(7);
    expect(service.systemicStates().length).toBe(2);
    expect(service.selectedEmotion()).toBeNull();
    expect(service.selectedBodyPart()).toBeNull();
    expect(service.selectedSystemicState()).toBeNull();
    expect(service.hasActiveSelection()).toBe(false);
    expect(service.composedMessage()).toBe('TOQUE EM UMA IMAGEM');
  });

  it('deve selecionar emoção e compor mensagem em CAIXA ALTA', () => {
    const alegria = EMOTIONS_DATA.find(e => e.code === 'ALEGRIA')!;
    service.selectEmotion(alegria);

    expect(service.selectedEmotion()?.code).toBe('ALEGRIA');
    expect(service.composedMessage()).toBe('EU SINTO: ALEGRIA');
    expect(service.hasActiveSelection()).toBe(true);

    // Toggle: desmarcar
    service.selectEmotion(alegria);
    expect(service.selectedEmotion()).toBeNull();
    expect(service.hasActiveSelection()).toBe(false);
  });

  it('deve selecionar ponto de calor do corpo e compor mensagem em CAIXA ALTA', () => {
    const barriga = BODY_HOTSPOTS_DATA.find(b => b.code === 'BARRIGA')!;
    service.selectBodyPart(barriga);

    expect(service.selectedBodyPart()?.code).toBe('BARRIGA');
    expect(service.composedMessage()).toBe('ONDE INCOMODA: BARRIGA');
    expect(service.hasActiveSelection()).toBe(true);
  });

  it('deve selecionar estado sistêmico (FOME/SONO) e compor mensagem', () => {
    const fome = SYSTEMIC_STATES_DATA.find(s => s.code === 'FOME')!;
    service.selectSystemicState(fome);

    expect(service.selectedSystemicState()?.code).toBe('FOME');
    expect(service.composedMessage()).toBe('ESTADO: FOME');
    expect(service.hasActiveSelection()).toBe(true);
  });

  it('deve limpar todas as seleções ao chamar clearAllSelections', () => {
    const sono = SYSTEMIC_STATES_DATA.find(s => s.code === 'SONO')!;
    service.selectSystemicState(sono);
    expect(service.hasActiveSelection()).toBe(true);

    service.clearAllSelections();
    expect(service.selectedEmotion()).toBeNull();
    expect(service.selectedBodyPart()).toBeNull();
    expect(service.selectedSystemicState()).toBeNull();
    expect(service.activeItem()).toBeNull();
    expect(service.hasActiveSelection()).toBe(false);
    expect(service.composedMessage()).toBe('TOQUE EM UMA IMAGEM');
  });
});

