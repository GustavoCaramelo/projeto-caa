import { ISystemicState } from '../models/systemic-state.model';

export const SYSTEMIC_STATES_DATA: readonly ISystemicState[] = [
  {
    id: 'state-fome',
    code: 'FOME',
    label: 'FOME',
    category: 'SYSTEMIC_STATE',
    visualCue: 'PRATO AMIGÁVEL E COLHER SUAVE',
    pastelBg: '#F7EFE6',
    pastelBorder: '#DEC9B5',
    pastelSelectedBg: '#EFE1D2',
    pastelSelectedBorder: '#BE9E81',
    ariaLabel: 'Sentindo Fome'
  },
  {
    id: 'state-sono',
    code: 'SONO',
    label: 'SONO',
    category: 'SYSTEMIC_STATE',
    visualCue: 'LUA CALMA E ESTRELINHA DOURADA PASTEL',
    pastelBg: '#ECEEF6',
    pastelBorder: '#C7CCE5',
    pastelSelectedBg: '#DFE2F2',
    pastelSelectedBorder: '#939DCC',
    ariaLabel: 'Sentindo Sono ou Cansaço'
  }
];

